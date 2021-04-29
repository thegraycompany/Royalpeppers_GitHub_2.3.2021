import Realm from "realm";
import React, { useContext, useState, useEffect, useRef } from "react";
import { Scout, Task } from "../../../../schemas";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { useScouts } from "../../../../providers/ScoutProvider";
import { useAuth } from "../../../../providers/AuthProvider";
import { ActionSheet } from "../../../../components/ActionSheet";
import { ListItem } from "react-native-elements";
import email from 'react-native-email'


const TestingDataThing = ({ children, projectPartition }) => {
  const realmRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: projectPartition,
      },
    };
    console.log("config useEffect");
    console.log(config);
    // open a realm for this particular project
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm;
      console.log("doet ie dit");
      const syncTasks = projectRealm.objects("Task");
      let sortedTasks = syncTasks.sorted("name");
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
    console.log("hier");
    const projectRealm = realmRef.current;


    projectRealm.write(() => {
      console.log("nu hier");
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
  return null;
}

export class ScoutOverview extends React.Component {
  eventHandlers = {
    onChangeText: (text) => this.onChangeText(text),
    onSendScout: () => this.onSendScout(),
  };

  constructor(props) {
    super(props);
    this.state = {
      tessting: false,
      Spint: `${this.props.route.params.Spint}`,
      Rups: `${this.props.route.params.Rups}`,
      WitteVlieg: `${this.props.route.params.WitteVlieg}`,
      Trips: `${this.props.route.params.Trips}`,
      Luis: `${this.props.route.params.Luis}`,
      FruitMot: `${this.props.route.params.FruitMot}`,
      Kevers: `${this.props.route.params.Kevers}`,
      Fusarium: `${this.props.route.params.Fusarium}`,
      Pythium: `${this.props.route.params.Pythium}`,
      MineerVlieg: `${this.props.route.params.MineerVlieg}`,
      Meeldauw: `${this.props.route.params.Meeldauw}`,
      Wants: `${this.props.route.params.Wants}`,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Kas: `${this.props.route.params.Kas}`,
      Overig: `${this.props.route.params.Overig}`,
      Email: `${this.props.route.params.Email}`,
      TimeStart: `${this.props.route.params.TimeStart}`
    };
  }

  render() {
    return (
      <View>
         <ScrollView>
          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Location}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Greenhouse}</Text>
              <Text style={styles.title}>{this.state.Path}</Text>
            </View>
          </View>

          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Spint poot:</Text>
              <Text style={styles.subTitle}> {this.state.Spint}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Rups poot:</Text>
              <Text style={styles.subTitle}> {this.state.Rups}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Witte vlieg poot:</Text>
              <Text style={styles.subTitle}> {this.state.WitteVlieg}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Trips poot:</Text>
              <Text style={styles.subTitle}>{this.state.Trips}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Luis poot:</Text>
              <Text style={styles.subTitle}>{this.state.Luis}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Fruit Mot poot:</Text>
              <Text style={styles.subTitle}> {this.state.FruitMot}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kevers poot:</Text>
              <Text style={styles.subTitle}> {this.state.Kevers}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Fusarium poot:</Text>
              <Text style={styles.subTitle}> {this.state.Fusarium}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Pythium poot:</Text>
              <Text style={styles.subTitle}> {this.state.Pythium}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Mineer vlieg poot:</Text>
              <Text style={styles.subTitle}> {this.state.MineerVlieg}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Meeldauw poot:</Text>
              <Text style={styles.subTitle}> {this.state.Meeldauw}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Wants poot:</Text>
              <Text style={styles.subTitle}> {this.state.Wants}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kas</Text>
              <Text style={styles.subTitle}>{this.state.Kas}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Overig</Text>
              <Text style={styles.subTitle}> {this.state.Overig}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={this.eventHandlers.onSendScout}>
              <Text style={styles.title}>OPSLAAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  createCSV = () => {
    // const values = [
    //   ['build', '2017-11-05T05:40:35.515Z'],
    //   ['deploy', '2017-11-05T05:42:04.810Z']
    // ];
    
    // // construct csvString
    // const headerString = 'event,timestamp\n';
    // const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
    // const csvString = `${headerString}${rowString}`;
    
    // // write the current list of answers to a local csv file
    // const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
    // console.log('pathToWrite', pathToWrite);
    // // pathToWrite /storage/emulated/0/Download/data.csv
    // RNFetchBlob.fs
    //   .writeFile(pathToWrite, csvString, 'utf8')
    //   .then(() => {
    //     console.log(`wrote file ${pathToWrite}`);
    //     // wrote file /storage/emulated/0/Download/data.csv
    //   })
    //   .catch(error => console.error(error));
  }


  onChangeText(text) {
    this.setState({ nameInput: text });
  }

  handleEmail = () => {
    //this.createCSV();
    const to = ['arnoud@royalpeppers.nl'] // string or array of email addresses
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    console.log(`${this.state.TimeStart}`);

    var Seconds = ((hours * 3600) + (min * 60) + sec);
    var TotaleTijd = (Seconds - `${this.state.TimeStart}`);

    email(to, {
        // Optional additional arguments
        cc: [], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: 'Resultaat controle Scouten: ' + `${this.props.route.params.Location}` + ' Datum: ' + date + '.' + month + '.' + year,
        body: 'Dit zijn de resultaten: ' + '\n' + `${this.props.route.params.Greenhouse}` + ';'  + `${this.state.Path}` + ';' + `${this.state.Spint}` + ';' + `${this.state.Rups}` + ';'
        + `${this.state.WitteVlieg}` + ';' + `${this.state.Trips}` + ';' +  `${this.state.Luis}` + ';' + `${this.state.FruitMot}` + ';' + `${this.state.Kevers}` + ';' + `${this.state.Fusarium}` + ';' + `${this.state.Pythium}` + ';' 
        + `${this.state.MineerVlieg}` + ';' + `${this.state.Meeldauw}` + ';' + `${this.state.Wants}` + ';'+ ';' + `${this.state.Kas}` + ';' + `${this.state.Overig}` + ';' + + date + '.' + month + '.' + year + ';' + `${this.state.Email}` + ';' + `${TotaleTijd}` + ';'
      }).catch(console.error)
}

  onSendScout() {
    this.handleEmail();
    // de data van de state verstuurd
    this.props.navigation.navigate('HomeNavScreen');
  }
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
