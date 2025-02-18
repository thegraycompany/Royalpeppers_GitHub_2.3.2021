import React, { useRef } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../../../providers/AuthProvider";
import { HarvestTable } from "../../../../schemas";
import { HomeNavScreen } from './HomeNavScreen';
import { HarvestScreen } from './HarvestScreen';
import RNExitApp from 'react-native-exit-app';
import * as Icon from "react-native-feather";


export function HarvestOverviewNieuwV2({ navigation, route }) {
  const { user, signUp, signIn } = useAuth();
  const realmRef = useRef(null);

  const navigeerHarvest = () => {
    navigation.navigate('HarvestScreen');
  }

  const navigeerHome = () => {
    navigation.navigate('HomeNavScreen');
  }

  const closeApp = () => {
    RNExitApp.exitApp();
  }

  const versturen = () => {
    try {
      var hours = new Date().getHours(); //To get the Current Hours
      var min = new Date().getMinutes(); //To get the Current Minutes
      var sec = new Date().getSeconds(); //To get the Current Seconds
      var TimeStop = ((hours * 3600) + (min * 60) + sec);
      const totaleTijd = TimeStop - `${route.params.TimeStart}`;

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
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
            "HarvestTable",
            new HarvestTable({
              Greenhouse: `${route.params.Greenhouse}`,
              Path: parseInt(`${route.params.Path}`),
              Sneetje: parseInt(`${route.params.Sneetje}`),
              Buts: parseInt(`${route.params.Buts}`),
              TeBont: parseInt(`${route.params.TeBont}`),
              RafeligeSteel: parseInt(`${route.params.RafeligeSteel}`),
              Blad: parseInt(`${route.params.Blad}`),
              VruchtVergeten: parseInt(`${route.params.VruchtVergeten}`),
              KarNietSchoon: parseInt(`${route.params.KarNietSchoon}`),
              TeKleinGesneden: parseInt(`${route.params.TeKleinGesneden}`),
              TeGrootGesneden: parseInt(`${route.params.TeGrootGesneden}`),
              Date: date + '.' + month + '.' + year,
              Controleur: `${route.params.Email}`,
              Employee: `${route.params.Employee}`,
              TijdControle: totaleTijd,
              partition: `project=${user.id}`,
            })
          );
        });
        Alert.alert("Succesvol verstuurd");
      });
    } catch (error) {
      Alert.alert("Kon gegevens niet versturen, probeer later opnieuw");
    }
  }

  if (route.params.Color == "Groen") {
    return (
      <ScrollView>
        <View style={styles.superContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>{route.params.Location}</Text>
            <Text style={styles.title}>{route.params.Color}</Text>
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
            <Text style={styles.subTitle}>Sneetje</Text>
            <Text style={styles.waarde}>{route.params.Sneetje}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Buts</Text>
            <Text style={styles.waarde}>{route.params.Buts}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te bont</Text>
            <Text style={styles.waarde}>{route.params.TeBont}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Rafelige steel</Text>
            <Text style={styles.waarde}>{route.params.RafeligeSteel}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Blad</Text>
            <Text style={styles.waarde}>{route.params.Blad}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht vergeten</Text>
            <Text style={styles.waarde}>{route.params.VruchtVergeten}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kar niet schoon</Text>
            <Text style={styles.waarde}>{route.params.KarNietSchoon}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te klein gesneden</Text>
            <Text style={styles.waarde}>{route.params.TeKleinGesneden}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te groot gesneden</Text>
            <Text style={styles.waarde}>{route.params.TeGrootGesneden}</Text>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity onPress={versturen}>
            <Text style={styles.title}>OPSLAAN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 60 }}>
          <View style={styles.NavigationContainer}>
            <TouchableOpacity onPress={() => navigeerHarvest()} style={{ paddingLeft: 40 }}>
              <Icon.PlusCircle stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigeerHome()} style={{ paddingLeft: 40 }}>
              <Icon.Home stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closeApp()} style={{ paddingLeft: 40 }}>
              <Icon.XCircle stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.superContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>{route.params.Location}</Text>
            <Text style={styles.title}>{route.params.Color}</Text>
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
            <Text style={styles.subTitle}>Sneetje</Text>
            <Text style={styles.waarde}>{route.params.Sneetje}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Buts</Text>
            <Text style={styles.waarde}>{route.params.Buts}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Te bont</Text>
            <Text style={styles.waarde}>{route.params.TeBont}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Rafelige Steel</Text>
            <Text style={styles.waarde}>{route.params.RafeligeSteel}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Blad</Text>
            <Text style={styles.waarde}>{route.params.Blad}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht Vergeten</Text>
            <Text style={styles.waarde}>{route.params.VruchtVergeten}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Kar niet schoon</Text>
            <Text style={styles.waarde}>{route.params.KarNietSchoon}</Text>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity onPress={versturen}>
            <Text style={styles.title}>OPSLAAN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 60 }}>
          <View style={styles.NavigationContainer}>
            <TouchableOpacity onPress={() => navigeerHarvest()} style={{ paddingLeft: 40 }}>
              <Icon.PlusCircle stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigeerHome()} style={{ paddingLeft: 40 }}>
              <Icon.Home stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closeApp()} style={{ paddingLeft: 40 }}>
              <Icon.XCircle stroke="black" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  NavigationContainer: {
    paddingLeft: 50,
    alignItems: "center",
    flexDirection: 'row',
    position: "absolute",
  },
  superContainer: {
    borderBottomWidth: 2,
    borderColor: 'green',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 40,
    marginTop: 5,
    marginBottom: 5,
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
    paddingLeft: 20,
  },
  waarde: {
    position: "absolute",
    paddingLeft: 310,
    fontSize: 24,
  }
});