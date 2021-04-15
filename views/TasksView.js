import React, { useState, useEffect } from "react";

import { View, Button } from "react-native";
import styles from "../stylesheet";

import { Overlay } from "react-native-elements";
import { ManageTeam } from "../components/ManageTeam";

import { useTasks } from "../providers/TasksProvider";
import { TaskItem } from "../components/TaskItem";
import { AddTask } from "../components/AddTask";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export function TasksView({ navigation, route }) {
  const { name } = route.params;

  const [overlayVisible, setOverlayVisible] = useState(false);
  AddTask
  const { tasks, createTask } = useTasks();
  useEffect(() => {
    navigation.setOptions({
      headerRight: function Header() {
        return <AddTask createTask={createTask} />;
      },
      title: `${name}'s Tasks`,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        {tasks.map((task) =>
          task ? <TaskItem key={`${task._id}`} task={task} /> : null
        )}

        {name === "My Project" ? (
          <>
            <View style={styles.manageTeamButtonContainer}>
              <Button
                title="Manage Team"
                onPress={() => setOverlayVisible(true)}
              />
            </View>
            <Overlay
              isVisible={overlayVisible}
              onBackdropPress={() => setOverlayVisible(false)}
            >
              <ManageTeam />
            </Overlay>
          </>
        ) : null}
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeNavScreen", {email: "richard@royalpeppers.nl"})}>
          <Text>
            bla bla test
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
