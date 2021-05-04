import React, { useEffect, useState, useRef } from 'react';
import { Alert } from 'react-native';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import email from 'react-native-email'
import { parse } from 'react-native-svg';
import { useAuth } from "../../../../providers/AuthProvider";
import { GrowTable, EmployeeTable } from "../../../../schemas";
import { HomeNavScreen } from './HomeNavScreen';

export function GrowOverviewNieuwV2({ navigation, route }) {
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
            "GrowTable",
            new GrowTable({
              Greenhouse: `${route.params.Greenhouse}`,
              Path: parseInt(`${route.params.Path}`),
              KopGebroken: parseInt(`${route.params.KopGebroken}`),
              KopVergeten: parseInt(`${route.params.KopVergeten}`),
              StrakGedraaid: parseInt(`${route.params.StrakGedraaid}`),
              TopNietGedraaid: parseInt(`${route.params.TopNietGedraaid}`),
              TeKortGetopt: parseInt(`${route.params.TeKortGetopt}`),
              VruchtOpDeGrond: parseInt(`${route.params.VruchtOpDeGrond}`),
              BloemVruchtEraf: parseInt(`${route.params.BloemVruchtEraf}`),
              PlaagNietGemeld: parseInt(`${route.params.PlaagNietGemeld}`),
              Date: date + '.' + month + '.' + year,
              Controleur: `${route.params.Email}`,
              Employee: `${route.params.Employee}`,
              TijdControle: totaleTijd,
              partition: `project=${user.id}`,
            })
          );
        });
        navigation.navigate(HomeNavScreen);
        Alert.alert("Succesvol verstuurd");
      });
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
          <View style={styles.container}>
            <Text style={styles.title}>{route.params.Employee}</Text>
          </View>
        </View>

        <View style={styles.superContainer}>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kop gebroken</Text>
            <Text style={styles.waarde}>{route.params.KopGebroken}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kop vergeten</Text>
            <Text style={styles.waarde}>{route.params.KopVergeten}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te strak gedraaid</Text>
            <Text style={styles.waarde}>{route.params.StrakGedraaid}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Top niet gedraaid</Text>
            <Text style={styles.waarde}>{route.params.TopNietGedraaid}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te kort getopt</Text>
            <Text style={styles.waarde}>{route.params.TeKortGetopt}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht op de grond</Text>
            <Text style={styles.waarde}>{route.params.VruchtOpDeGrond}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Bloem vrucht eraf</Text>
            <Text style={styles.waarde}>{route.params.BloemVruchtEraf}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Plaag niet gemeld</Text>
            <Text style={styles.waarde}>{route.params.PlaagNietGemeld}</Text>
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
  waarde: {
    position: "absolute",
    paddingLeft: 310,
    fontSize: 24,
  }
});