import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { Task, EmployeeTable } from "../schemas";
import { useAuth } from "./AuthProvider";

const TasksContext = React.createContext(null);

const TasksProvider = ({ children, projectPartition }) => {
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
    // open a realm for this particular project
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm;

      const syncTasks = projectRealm.objects("EmployeeTable");
      let sortedTasks = syncTasks.sorted("name");
      global.GlobalEmployees = sortedTasks;
      console.log("\n");
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
    var Employees = ["101 Albert-Jan de Jonge","102 Krysztof Glugla","103 Iwona Kubacka","120 Ewelina Chmura","121 Przemyslaw Mazurek","122 Mirek Myler","123 Patryk Kudon","124 Dariusz Kudon","125 Paulina Walkowiak","126 Renata Krawczyk","127 Artur Krawczyk","128 Adam Ruszak","129 Robert Kolczynski","130 Gabor Fabian","131 Bence Zoltan","132 Micula Szilvia","133 Marianna Dutka","140 Przemyslaw Juchnowski","141 Beata Dzierzanowska","142 Joanna Dzierzanowska","143 Dominik Golebiewski","144 Piotr Dzierzanowski","145 Piotr Grzejszczyk","146 Alicja Kalas","147 Wieslaw Oginski","148 Justyna Brzozowska","149 Mariusz Rogala","150 Przemyslaw Maslowski","151 Rafal Barsznica","152 Monika Zieminska","153 Wojciech Kubik","154 Florin Moraniu","155 Zicu Sirbu","156 Constantin Dobreanu","157 Adrian Sirbu","180 Mehmet Atli","181 Nikolaos Giannakidis","182 Murat Sarcan","183 Erkout Oglou","184 Zina Ilieva","185 Ismail Simsek","186 Hristiyana Ilieva","187 Asen Iliev","188 Yanko Blagoev","201 Arjan de Jong","202 danny nieuwkoop","203 Harold Motz","204 Jolijn Van Winden","205 Laura Engel","206 jakub dolata","207 aleksandra matusiak","208 katarzyna matusiak","221 monika kaminska","231 Monika Kransczuk","241 Agata Lewandowska","251 Ali Aydin","252 Ali Gabr","253 Ali Ismail","254 Asya Onur","255 Burhan Aytemur","256 Cemil Aydinx","257 Enver Kaya","258 Koray Onur","259 Mehmet Celik","260 Moustafa Mitwalli","261 Onder Kilic","262 Sedat Surmeli","263 Serdin Baycuman","264 Yildiz Rasim","302 Arjan Vermeulen","303 Carola In `t veen","304 Tomasz Sciubidlo","305 Renata Czerwik","306 Julita Zglenicka","320 Kamil Zglenicki","321 Tomasz Czerwik","322 Tudor Sorin","340 Mariusz Gill","341 Nina Kokowicz","342 Tomasz Gill","343 Rodi Baycuman","344 Erkan Atas","345 Harun Kocoglu","346 Marcin Mackowiak","401 Ruben Mertens","402 Roel Klapwijk","410 Ana Popova","412 Hristina Ivanova","413 Sasho Rusev","420 Robert Bak","421 Barbara Walkowiak","422 Florin Chiriac","423 Florin Dobreanu","424 Katarzyna Malinowska","425 Miroslaw Pecula","426 Miroslaw Pilarek","427 Piotr Mazurek","428 Alicia Masternak","429 Fetinia Maxim","430 Cozma Maxim","431 Arthur Jankowswki","440 Daniel Baicu","442 Cemil Aydin","444 Erdal Eryilmaz","445 Fati Karabulut","446 Moustafa Soliman","448 Severin Karadzhov","450 Marian  Baicu","451 Sla Hristova","460 Alin-Ionut Neagos","461 Bianca Cretu","462 Boris Gheorghe","463 Fanica Ghita","464 Ionut Urezanu","465 Maria Gheorghe","466 Thomas Czerwik","468 Virgil Gheorghe","471 Andrzej Nieweglowski","481 Monika Krawczuk","484 Sergiu Serbu","486 Wojtek Nowack","491 Tomasz Burzykowski","501 Andy de Jong","502 Jurgen Boesveld","503 Martijn Mertens","520 Aleksandra Jawniak","521 Alicja Kowalska","522 Angelika Sabastyn","523 Angelika Wisniowska","524 Anna Baradziej","525 Anna Osinska","526 Anna Popova","527 Binnaz karakoch","528 Asen Iliev Asenov","529 Asie Angelova Tinkova","530 Atif Uksel","531 Beata Agnieska Kudla","532 Beata stypula","533 Daniel Sumera","534 Bekir Duran","535 Cevdet Kucuk","536 Daria Monika Witak","537 Wiktoria Sumera","538 Dimitar Rusev Angelov","539 Diyan Ogniyanov Asenov","540 Gabriele Stunguryte","541 Enver Demir","542 Erika Lukoseviciute","543 Huseyin Eser","545 Vytene Rubeziute","546 Feysal  Coskun","547 Hristina Ivanova Demirova","548 Hristinta Ivanova","549 Galya Dimitrova","550 Gana Stayanova","551 Atanas Georgiev","552 Gergana Atanasova","553 Haci Bekir","554 Hanifi Polat","555 Hristina Ilkova","556 Hristinka Asenova","557 Hristinka Ilieva","558 Hristinka Misheva","559 Hristo Rusev","560 Hristoz Hristozov","561 Iliya Veselinov","562 Kamenka Petkova","563 Karolina Rattu","564 Marcin Krasucki","565 Katarzyna duda","566 Malgorzata Anna","567 Mariya Misheva","568 Marzena kowalczyk","569 Mehmed Mehmed","570 Mehmet Ali","571 Mehmet Demirel","572 Mehmet Gunes","573 Mersil Mehmedali","574 Milan Georgiev","575 Mircho Georgiev","576 Miryana Georgieva","577 Mitko Angelov","578 Mohamed Ahmed","579 Mohamed Veli","580 Serdal Ayyildiz","581 Monika Krystyna","582 Monika Przygocka","583 Muhammed Demirel","584 Murat Ozkay","585 Mustafa Borislavov","586 Myumyun Mestan","587 Natalia Medrala","588 Neslihan Ismailova","589 Nevzer Lyutova","590 Marcin Kaczmara","591 Nikodem Antosiak","592 Ognyan Uzunov","593 Orlin Dobrev","594 Irina Lodigina","595 Penco Bozhinov","596 Rada Dimitrova","597 Recep Gunes","598 Robert Jankowski","599 Rolands Samsanov","600 Rumen Stoyanov","601 Rumyana Miteva","602 Sasho Dimitrov","604 Slavey Atanasov","605 Slawomir Boleslaw","606 Stefan Andonov","607 Stefan Dimchev","608 Stoyan Stoyanov","609 Veli Asenov","610 Viktoria Cjacka","611 Viktors Paskevics","612 Vitalijs paskevics","613 Yilmaz Ciftcioglu","614 Zoya Nikolaeva","901 Peter van den Bosch","902 Patrick van den Bosch","903 Ronald van Winden","904 Arnoud  van den berge","905 Derk van Duijvenboode","906 Richard de Vreede","907 Tom Mosselman","908 Joanna Smola","909 Pawel Maciejewski","910 Diana van der Leer","911 Jan van den Bosch"];
    var k;
    var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
    for (k = 0; k < Employees.length; k++) {
      projectRealm.write(() => {
        // Create a new task in the same partition -- that is, in the same project.
        projectRealm.create(
          "EmployeeTable",
          new EmployeeTable({
            name: Employees[k] || "New Task",
            partition: projectPartition,
          })
        );
      });
    }
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

export { TasksProvider, useTasks };