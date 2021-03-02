import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import email from 'react-native-email'


export class HarvestOverview extends React.Component {
  eventHandlers = {
    onChangeText: (text) => this.onChangeText(text),
    onSendHarvest: () => this.onSendHarvest(),
  };

  constructor(props) {
    super(props);
    this.state = {
      Sneetje: `${this.props.route.params.Sneetje}`,
      Buts: `${this.props.route.params.Buts}`,
      TeBont: `${this.props.route.params.TeBont}`,
      RafeligeSteel: `${this.props.route.params.RafeligeSteel}`,
      Blad: `${this.props.route.params.Blad}`,
      VruchtVergeten: `${this.props.route.params.VruchtVergeten}`,
      KarNietSchoon: `${this.props.route.params.KarNietSchoon}`,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
      Color: `${this.props.route.params.Color}`,
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Location}</Text>
              <Text style={styles.title}>{this.state.Color}</Text>
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
              <Text style={styles.subTitle}>Sneetje</Text>
              <Text style={styles.waarde}>{this.state.Sneetje}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Buts</Text>
              <Text style={styles.waarde}>{this.state.Buts}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Te bont</Text>
              <Text style={styles.waarde}>{this.state.TeBont}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Rafelige Steel</Text>
              <Text style={styles.waarde}>{this.state.RafeligeSteel}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Blad</Text>
              <Text style={styles.waarde}>{this.state.Blad}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Vrucht Vergeten</Text>
              <Text style={styles.waarde}>{this.state.VruchtVergeten}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kar niet schoon</Text>
              <Text style={styles.waarde}>{this.state.KarNietSchoon}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={this.eventHandlers.onSendHarvest}>
              <Text style={styles.title}>OPSLAAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
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

    email(to, {
        // Optional additional arguments
        cc: [], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: 'Resultaat controle: ' + `${this.props.route.params.Location}` + ' Datum: ' + date + '.' + month + '.' + year,
        body: 'Dit zijn de resultaten: ' + '\n' + `${this.props.route.params.Greenhouse}` + '\n'  + `${this.state.Path}` + '\n' + 'Sneetje: ' + `${this.state.Sneetje}` + '\n' + 'Buts: ' + `${this.state.Buts}` + '\n'
        + 'Te bont: ' + `${this.state.TeBont}` + '\n' + 'Rafelige Steel: ' + `${this.state.RafeligeSteel}` + '\n' + 'Blad: ' + `${this.state.Blad}` + '\n' + 'Vrucht vergeten: ' + `${this.state.VruchtVergeten}` + '\n'
        + 'Kar niet Schoon: ' + `${this.state.KarNietSchoon}` 
      }).catch(console.error)
}

  onSendHarvest() {
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
    paddingLeft: 350,
    fontSize: 24,
  }
});