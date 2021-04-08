import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { Task, EmployeeTable} from "../schemas";
import { useAuth } from "./AuthProvider";

const TasksContext = React.createContext(null);

const EmployeeProvider = ({ children, projectPartition }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const realmRef = useRef(null);

  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: projectPartition,
      },
    };
    // open a realm for this createTaskparticular project
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm;

      const syncTasks = projectRealm.objects("EmployeeTable");
      let sortedTasks = syncTasks.sorted("name");
      console.log(sortedTasks);
      setTasks([...sortedTasks]);
      sortedTasks.addListener(() => {
        setTasks([...sortedTasks]);
      });
    });

    return () => {
      // cleanup function
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setTasks([]);
      }
    };
  }, [user, projectPartition]);

  const createTask = (newTaskName) => {
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      // Create a new task in the same partition -- that is, in the same project.
      projectRealm.create(
        "Task",
        new Task({
          name: newTaskName || "New Task",
          partition: projectPartition,
        })
      );
    });
  };

  const setTaskStatus = (task, status) => {
    // One advantage of centralizing the realm functionality in this provider is
    // that we can check to make sure a valid status was passed in here.
    if (
      ![
        Task.STATUS_OPEN,
        Task.STATUS_IN_PROGRESS,
        Task.STATUS_COMPLETE,
      ].includes(status)
    ) {
      throw new Error(`Invalid status: ${status}`);
    }
    const projectRealm = realmRef.current;

    projectRealm.write(() => {
      task.status = status;
    });
  };

  // Define the function for deleting a task.
  const deleteTask = (task) => {
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      projectRealm.delete(task);
      setTasks([...projectRealm.objects("Task").sorted("name")]);
    });
  };

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <TasksContext.Provider
      value={{
        createTask,
        deleteTask,
        setTaskStatus,
        tasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useTasks = () => {
  const task = useContext(TasksContext);
  if (task == null) {
    throw new Error("useTasks() called outside of a TasksProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return task;
};

export { EmployeeProvider, useTasks };