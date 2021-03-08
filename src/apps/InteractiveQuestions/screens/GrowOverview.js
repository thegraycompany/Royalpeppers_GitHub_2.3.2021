import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import email from 'react-native-email'
import RNFetchBlob from 'react-native-fetch-blob';

export class GrowOverview extends React.Component {
  eventHandlers = {
    onSendGrow: () => this.onSendGrow(),
  };

  constructor(props) {
    super(props);
    this.state = {
      KopGebroken: `${this.props.route.params.KopGebroken}`,
      KopVergeten: `${this.props.route.params.KopVergeten}`,
      StrakGedraaid: `${this.props.route.params.StrakGedraaid}`,
      TopNietGedraaid: `${this.props.route.params.TopNietGedraaid}`,
      VruchtOpDeGrond: `${this.props.route.params.VruchtOpDeGrond}`,
      BloemVruchtEraf: `${this.props.route.params.BloemVruchtEraf}`,
      PlaagNietGemeld: `${this.props.route.params.PlaagNietGemeld}`,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
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
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Employee}</Text>
            </View>
          </View>

          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kop gebroken</Text>
              <Text style={styles.waarde}>{this.state.KopGebroken}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kop vergeten</Text>
              <Text style={styles.waarde}>{this.state.KopVergeten}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Te strak gedraaid</Text>
              <Text style={styles.waarde}>{this.state.StrakGedraaid}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Top niet gedraaid</Text>
              <Text style={styles.waarde}>{this.state.TopNietGedraaid}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Vrucht op de grond</Text>
              <Text style={styles.waarde}>{this.state.VruchtOpDeGrond}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Bloem vrucht eraf</Text>
              <Text style={styles.waarde}>{this.state.BloemVruchtEraf}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Plaag niet gemeld</Text>
              <Text style={styles.waarde}>{this.state.PlaagNietGemeld}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={this.eventHandlers.onSendGrow}>
              <Text style={styles.title}>OPSLAAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  createFile = () => {
    console.log("Test");
    const values = [
      ['build', '2017-11-05T05:40:35.515Z'],
      ['deploy', '2017-11-05T05:42:04.810Z']
    ];
    
    // construct csvString
    const headerString = 'event,timestamp\n';
    const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
    const csvString = `${headerString}${rowString}`;
    
    // write the current list of answers to a local csv file
    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
    console.log('pathToWrite', pathToWrite);
    // pathToWrite /storage/emulated/0/Download/data.csv
    RNFetchBlob.fs
      .writeFile(pathToWrite, csvString, 'utf8')
      .then(() => {
        console.log(`wrote file ${pathToWrite}`);
        // wrote file /storage/emulated/0/Download/data.csv
      })
      .catch(error => console.error(error));
};


  handleEmail = () => {
    //this.createFile();
    const to = ['arnoud@royalpeppers.nl'] // string or array of email addresses
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    var Seconds = ((hours * 3600) + (min * 60) + sec);
    var TotaleTijd = (Seconds - `${this.state.TimeStart}`);
    email(to, {
        // Optional additional arguments
        cc: [], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: 'Resultaat controle Toppen/Draaien: ' + `${this.props.route.params.Location}` + ' Datum: ' + date + '.' + month + '.' + year,
        body: 'Dit zijn de resultaten: ' + '\n' + `${this.props.route.params.Greenhouse}` + ';' + `${this.state.Path}` + ';' + `${this.state.KopGebroken}` + ';' + `${this.state.KopVergeten}` + ';' +
        `${this.state.StrakGedraaid}` + ';' + `${this.state.TopNietGedraaid}` + ';' + `${this.state.VruchtOpDeGrond}` + ';' + `${this.state.BloemVruchtEraf}` + ';' + `${this.state.PlaagNietGemeld}` + ';' + 
         + date + '.' + month + '.' + year + ';' + `${this.state.Email}` + ';' + `${this.state.Employee}` + ';' + `${TotaleTijd}` + ';'
      }).catch(console.error);
    }

  onSendGrow() {
    this.handleEmail();
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
  waarde: {
    position: "absolute",
    paddingLeft: 350,
    fontSize: 24,
  }
});