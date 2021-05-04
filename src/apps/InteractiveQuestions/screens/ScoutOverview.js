import React, { useContext, useState, useEffect, useRef } from "react";
import { Alert, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from "../../../../providers/AuthProvider";
import { ScoutTable } from "../../../../schemas";
import { HomeNavScreen } from './HomeNavScreen';

export function ScoutOverviewNieuwV2({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();
  const realmRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const versturen = async () => {
    try {
      var hours = new Date().getHours(); //To get the Current Hours
      var min = new Date().getMinutes(); //To get the Current Minutes
      var sec = new Date().getSeconds(); //To get the Current Seconds
      var TimeStop = ((hours * 3600) + (min * 60) + sec);
      const totaleTijd = TimeStop - `${route.params.TimeStart}`;

      var date = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      const config = {
        sync: {
          user: user,
          partitionValue: `project=${user.id}`,
        },
      };
      Realm.open(config).then((projectRealm) => {
        projectRealm.write(() => {
          // Create a new task in the same partition -- that is, in the same project.
          projectRealm.create(
            "ScoutTable",
            new ScoutTable({
              Greenhouse: `${route.params.Greenhouse}`,
              Path: parseInt(`${route.params.Path}`),
              Spint: `${route.params.Spint}`,
              Rups: `${route.params.Rups}`,
              WitteVlieg: `${route.params.WitteVlieg}`,
              Trips: `${route.params.Trips}`,
              Luis: `${route.params.Luis}`,
              FruitMot: `${route.params.FruitMot}`,
              Kevers: `${route.params.Kevers}`,
              Fusarium: `${route.params.Fusarium}`,
              Pythium: `${route.params.Pythium}`,
              MineerVlieg: `${route.params.MineerVlieg}`,
              Meeldauw: `${route.params.Meeldauw}`,
              Wants: `${route.params.Wants}`,
              Kas: `${route.params.Kas}`,
              Overig: `${route.params.Overig}`,
              Date: date + '.' + month + '.' + year,
              Controleur: `${route.params.Email}`,
              TijdControle: totaleTijd,
              partition: `project=${user.id}`,
            })
          );
        });
      });
      Alert.alert("Succesvol verstuurd");
      navigation.navigate(HomeNavScreen);
    } catch (error) {
      Alert.alert("Kon gegevens niet versturen, probeer later opnieuw");
    }
    navigation.navigate(HomeNavScreen);
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.superContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>{route.params.Location}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{route.params.Greenhouse}</Text>
            <Text style={styles.title}>{route.params.Path}</Text>
          </View>
        </View>

        <View style={styles.superContainer}>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Spint poot:</Text>
            <Text style={styles.subTitle}> {route.params.Spint}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Rups poot:</Text>
            <Text style={styles.subTitle}> {route.params.Rups}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Witte vlieg poot:</Text>
            <Text style={styles.subTitle}> {route.params.WitteVlieg}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Trips poot:</Text>
            <Text style={styles.subTitle}>{route.params.Trips}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Luis poot:</Text>
            <Text style={styles.subTitle}>{route.params.Luis}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Fruit Mot poot:</Text>
            <Text style={styles.subTitle}> {route.params.FruitMot}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kevers poot:</Text>
            <Text style={styles.subTitle}> {route.params.Kevers}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Fusarium poot:</Text>
            <Text style={styles.subTitle}> {route.params.Fusarium}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Pythium poot:</Text>
            <Text style={styles.subTitle}> {route.params.Pythium}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Mineer vlieg poot:</Text>
            <Text style={styles.subTitle}> {route.params.MineerVlieg}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Meeldauw poot:</Text>
            <Text style={styles.subTitle}> {route.params.Meeldauw}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Wants poot:</Text>
            <Text style={styles.subTitle}> {route.params.Wants}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kas</Text>
            <Text style={styles.subTitle}>{route.params.Kas}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Overig</Text>
            <Text style={styles.subTitle}> {route.params.Overig}</Text>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity onPress={versturen}>
            <Text style={styles.title}>OPSLAAN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  superContainer: {
    borderBottomWidth: 2,
    borderColor: 'green',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    maxWidth: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 8,
    paddingLeft: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 8,
    paddingLeft: 10,
    maxWidth: 240,
  },
});
