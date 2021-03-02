import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Icon from "react-native-feather";
import { NavigationInjectedProps } from 'react-navigation';
import { useScout } from '../../../../providers/ScoutProvider';

export class ScoutMistakes extends React.Component {
  eventHandlers = {
    onChangeKas: (text) => this.onChangeKas(text),
    onChangeOverig: (text) => this.onChangeOverig(text),
    navigateToScoutOverview: () => this.navigateToScoutOverview(),
  };

  constructor(props) {
    super(props);
    this.state = {
      Spint: [],
      isVisibleSpint: false,

      Rups: [],
      isVisibleRups: false,

      WitteVlieg: [],
      isVisibleWitteVlieg: false,

      Trips: [],
      isVisibleTrips: false,

      Luis: [],
      isVisibleLuis: false,

      FruitMot: [],
      isVisibleFruitMot: false,

      Kevers: [],
      isVisibleKevers: false,

      Fusarium: [],
      isVisibleFusarium: false,

      Pythium: [],
      isVisiblePythium: false,

      MineerVlieg: [],
      isVisibleMineerVlieg: false,

      Meeldauw: [],
      isVisibleMeeldauw: false,

      Wants: [],
      isVisibleWants: false,

      Kas: '',
      Overig: '',

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Paden: `${this.props.route.params.paden}`
    };
  }

  changeVisibility(state) {
    this.setState({
      isVisibleSpint: false,
      isVisibleRups: false,
      isVisibleWitteVlieg: false,
      isVisibleTrips: false,
      isVisibleLuis: false,
      isVisibleFruitMot: false,
      isVisibleKevers: false,
      isVisibleFusarium: false,
      isVisiblePythium: false,
      isVisibleMineerVlieg: false,
      isVisibleMeeldauw: false,
      isVisibleWants: false,
      Kas: '',
      Overig: '',

      ...state
    });
  }

  render() {

    const { Kas } = this.state.Kas;
    const { Overig } = this.state.Overig;
    return (
      <View>
        <ScrollView>
          {/* Spint */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Spint</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Spint}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleSpint}
              onOpen={() => this.changeVisibility({
                isVisibleSpint: true
              })}
              onClose={() => this.setState({
                isVisibleSpint: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Spint: item // an array of the selected items
              })}
            />
          </View>

          {/* Rups */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Rups</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Rups}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleRups}
              onOpen={() => this.changeVisibility({
                isVisibleRups: true
              })}
              onClose={() => this.setState({
                isVisibleRups: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Rups: item // an array of the selected items
              })}
            />
          </View>

          {/* Witte Vlieg */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Witte Vlieg</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.WitteVlieg}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleWitteVlieg}
              onOpen={() => this.changeVisibility({
                isVisibleWitteVlieg: true
              })}
              onClose={() => this.setState({
                isVisibleWitteVlieg: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                WitteVlieg: item // an array of the selected items
              })}
            />
          </View>

          {/* Trips */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Trips</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Trips}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleTrips}
              onOpen={() => this.changeVisibility({
                isVisibleTrips: true
              })}
              onClose={() => this.setState({
                isVisibleTrips: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Trips: item // an array of the selected items
              })}
            />
          </View>

          {/* Luis */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Luis</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Luis}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleLuis}
              onOpen={() => this.changeVisibility({
                isVisibleLuis: true
              })}
              onClose={() => this.setState({
                isVisibleLuis: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Luis: item // an array of the selected items
              })}
            />
          </View>

          {/* Fruit Mot */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Fruit Mot</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.FruitMot}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleFruitMot}
              onOpen={() => this.changeVisibility({
                isVisibleFruitMot: true
              })}
              onClose={() => this.setState({
                isVisibleFruitMot: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                FruitMot: item // an array of the selected items
              })}
            />
          </View>

          {/* Kevers */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Kevers</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Kevers}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleKevers}
              onOpen={() => this.changeVisibility({
                isVisibleKevers: true
              })}
              onClose={() => this.setState({
                isVisibleKevers: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Kevers: item // an array of the selected items
              })}
            />
          </View>

          {/* Fusarium */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Fusarium</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Fusarium}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleFusarium}
              onOpen={() => this.changeVisibility({
                isVisibleFusarium: true
              })}
              onClose={() => this.setState({
                isVisibleFusarium: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Fusarium: item // an array of the selected items
              })}
            />
          </View>

          {/* Pythium */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Pythium</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Pythium}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisiblePythium}
              onOpen={() => this.changeVisibility({
                isVisiblePythium: true
              })}
              onClose={() => this.setState({
                isVisiblePythium: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Pythium: item // an array of the selected items
              })}
            />
          </View>

          {/* Mineer Vlieg */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Mineer Vlieg</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.MineerVlieg}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleMineerVlieg}
              onOpen={() => this.changeVisibility({
                isVisibleMineerVlieg: true
              })}
              onClose={() => this.setState({
                isVisibleMineerVlieg: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                MineerVlieg: item // an array of the selected items
              })}
            />
          </View>

          {/* Meeldauw */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Meeldauw</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Meeldauw}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleMeeldauw}
              onOpen={() => this.changeVisibility({
                isVisibleMeeldauw: true
              })}
              onClose={() => this.setState({
                isVisibleMeeldauw: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Meeldauw: item // an array of the selected items
              })}
            />
          </View>


          {/* Wants */}
          <View style={styles.dropdown}>
            <Text style={styles.subTitle}>Wants</Text>
            <DropDownPicker
              items={[
                { label: 'Alle poten', value: 'Alle Poten', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '1', value: '1', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '2', value: '2', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '3', value: '3', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '4', value: '4', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '5', value: '5', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '6', value: '6', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '7', value: '7', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '8', value: '8', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '9', value: '9', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '10', value: '10', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '11', value: '11', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '12', value: '12', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '13', value: '13', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '14', value: '14', icon: () => <Icon.Flag size={18} color="#900" /> },
                { label: '15', value: '15', icon: () => <Icon.Flag size={18} color="#900" /> },
              ]}

              searchable={true}
              searchablePlaceholder="Zoek een "
              searchablePlaceholderTextColor="gray"
              searchableError={() => <Text> bestaat niet</Text>}

              placeholder="Selecteer een poot"

              labelStyle={{
                fontSize:16,
                textAlign: 'left',
                color: '#000'
              }}

              multiple={true}
              multipleText="%d (en) geselecteerd"
              min={0}
              max={50}

              defaultValue={this.state.Wants}
              containerStyle={{ height:40 }}
              dropDownStyle={{ minHeight:300 }}
              isVisible={this.state.isVisibleWants}
              onOpen={() => this.changeVisibility({
                isVisibleWants: true
              })}
              onClose={() => this.setState({
                isVisibleWants: false
              })}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                Wants: item // an array of the selected items
              })}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Kas</Text>
            <View style={styles.count}>
              <TextInput
                style={{ fontSize:24, color: '#000', maxWidth: 200}}
                placeholder="Omschrijving"
                onChangeText={this.eventHandlers.onChangeKas}
                value={
                  Kas
                }
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Overige</Text>
            <TextInput
              style={{ fontSize:24, color: '#000', paddingLeft:10, maxWidth: 200 }}
              placeholder="Omschrijving"
              onChangeText={this.eventHandlers.onChangeOverig}
              value={
                Overig
              }
            />
          </View>

          <View style={{ paddingTop:20 }}>
            <TouchableOpacity onPress={this.eventHandlers.navigateToScoutOverview}>
              <Text style={styles.title}>NAAR OVERZICHT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  navigateToScoutOverview() {
    this.props.navigation.navigate('ScoutOverview', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path, Kas: this.state.Kas,
      Overig: this.state.Overig, Spint: this.state.Spint, Rups: this.state.Rups, WitteVlieg: this.state.WitteVlieg, Trips: this.state.Trips, Luis: this.state.Luis,
    FruitMot: this.state.FruitMot, Kevers: this.state.Kevers, Fusarium: this.state.Fusarium, Pythium: this.state.Pythium, MineerVlieg: this.state.MineerVlieg,
    Meeldauw: this.state.Meeldauw, Wants: this.state.Wants});
  }
  onChangeKas(text) {
    this.setState({ Kas: text });
  }

  onChangeOverig(text) {
    this.setState({ Overig: text });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:20,
    borderBottomWidth:2,
    borderColor: 'green',
    paddingBottom:10,
    paddingTop:10,
    marginTop:5,
    marginBottom:5,
  },
  count: {
    fontSize:28,
    paddingLeft:20,
  },
  positionCount: {
    alignItems: "center",
    flexDirection: 'row',
    position: "absolute",
    paddingLeft:210,
  },
  testContainer: {
    borderBottomWidth:2,
    borderColor: 'green',
  },
  title: {
    textAlign: 'center',
    fontSize:32,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize:28,
  },
  dropdown: {
    marginHorizontal:16,
    paddingBottom:20,
  },
});