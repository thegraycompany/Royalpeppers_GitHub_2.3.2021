import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button, Alert, AsyncStorage } from "react-native";
import Realm from "realm";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";
import { Task, EmployeeTable } from "../schemas";

export function WelcomeView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();
  const realmRef = useRef(null);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: `project=${user.id}`,
      },
    };
    // open a realm for this particular project
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm;

      const syncTasks = projectRealm.objects("EmployeeTable");
      let sortedTasks = syncTasks.sorted("name");
      global.GlobalEmployees = sortedTasks;
      console.log("\n");
      //console.log(global.GlobalEmployees);
      setTasks([...sortedTasks]);
      sortedTasks.addListener(() => {
        setTasks([...sortedTasks]);
      });
    });

    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      //navigation.navigate("Projects");
      navigation.navigate("HomeNavScreen", { email: email });
      
    }

    return () => {
      // cleanup function
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setTasks([]);
      }
    };
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Press sign in");
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <View>
      <Text style={styles.title}> Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          style={styles.inputStyle}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={onPressSignIn}>
        <Text style={styles.title}>INLOGGEN</Text>
      </TouchableOpacity>
    </View>
  );
}