import React from 'react';
import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import * as Icon from "react-native-feather";

export class GrowMistakes extends React.Component {
  eventHandlers = {
    onChangeText: (text) => this.onChangeText(text),
    navigateToGrowOverview: () => this.navigateToGrowOverview(),
  };

  constructor(props) {
    super(props);
    this.state = {
      KopGebroken: 0,
      KopVergeten: 0,
      StrakGedraaid: 0,
      TopNietGedraaid: 0,
      VruchtOpDeGrond: 0,
      BloemVruchtEraf: 0,
      PlaagNietGemeld: 0,
      Overig: '',

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
      Email: `${this.props.route.params.Email}`,
      TimeStart: `${this.props.route.params.TimeStart}`,
    };
  }

  render() {
    const {Overig} = this.state.Overig;
    return (
      <View>
         <View style={styles.container}>
            <Text style={styles.subTitle}>Kop gebroken</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.KopGebroken}</Text>
              <TouchableOpacity onPress={() => this.removeKG()} style={{paddingLeft: 10}}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addKG()} style={{paddingLeft: 10}}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Kop vergeten</Text>
            <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.KopVergeten}</Text>
            <TouchableOpacity onPress={() => this.removeKV()} style={{paddingLeft: 10}}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addKV()} style={{paddingLeft: 10}}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Te strak gedraaid</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.StrakGedraaid}</Text>
              <TouchableOpacity onPress={() => this.removeSG()} style={{paddingLeft: 10}}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addSG()} style={{paddingLeft: 10}}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Top niet gedraaid</Text>
            <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.TopNietGedraaid}</Text>
            <TouchableOpacity onPress={() => this.removeTNG()} style={{paddingLeft: 10}}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addTNG()} style={{paddingLeft: 10}}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht op de grond</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.VruchtOpDeGrond}</Text>
              <TouchableOpacity onPress={() => this.removeVOG()} style={{paddingLeft: 10}}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addVOG()} style={{paddingLeft: 10}}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Bloem/Vrucht eraf</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.BloemVruchtEraf}</Text>
              <TouchableOpacity onPress={() => this.removeBVE()} style={{paddingLeft: 10}}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addBVE()} style={{paddingLeft: 10}}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Plaag niet gemeld</Text>
            <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.PlaagNietGemeld}</Text>
            <TouchableOpacity onPress={() => this.removePlague()} style={{paddingLeft: 10}}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addPlague()} style={{paddingLeft: 10}}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            </View>
          </View>


        <View style={{paddingTop: 50}}>
        <TouchableOpacity onPress={this.eventHandlers.navigateToGrowOverview}>
          <Text style={styles.title}>NAAR OVERZICHT</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  onChangeText(text) {
    this.setState({nameInput: text});
  }

  navigateToGrowOverview() {
    this.props.navigation.navigate('GrowOverview', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
      Employee: this.state.Employee, KopGebroken: this.state.KopGebroken, KopVergeten: this.state.KopVergeten, StrakGedraaid: this.state.StrakGedraaid,
      TopNietGedraaid: this.state.TopNietGedraaid, VruchtOpDeGrond: this.state.VruchtOpDeGrond, BloemVruchtEraf: this.state.BloemVruchtEraf,
      PlaagNietGemeld: this.state.PlaagNietGemeld, Email: this.state.Email, TimeStart: this.state.TimeStart});
  }


  addKG() {
    this.setState({KopGebroken: (this.state.KopGebroken + 1)})
  }

  removeKG() {Email
    if (this.state.KopGebroken >= 1 ){
    this.setState({KopGebroken: (this.state.KopGebroken - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addKV() {
    this.setState({KopVergeten: (this.state.KopVergeten + 1)})
  }

  removeKV() {
    if (this.state.KopVergeten >= 1 ){
    this.setState({KopVergeten: (this.state.KopVergeten - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addSG() {
    this.setState({StrakGedraaid: (this.state.StrakGedraaid + 1)})
  }

  removeSG() {
    if (this.state.StrakGedraaid >= 1 ){
    this.setState({StrakGedraaid: (this.state.StrakGedraaid - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addTNG() {
    this.setState({TopNietGedraaid: (this.state.TopNietGedraaid + 1)})
  }

  removeTNG() {
    if (this.state.TopNietGedraaid >= 1 ){
    this.setState({TopNietGedraaid: (this.state.TopNietGedraaid - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addVOG() {
    this.setState({VruchtOpDeGrond: (this.state.VruchtOpDeGrond + 1)})
  }

  removeVOG() {
    if (this.state.VruchtOpDeGrond >= 1 ){
    this.setState({VruchtOpDeGrond: (this.state.VruchtOpDeGrond - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addBVE() {
    this.setState({BloemVruchtEraf: (this.state.BloemVruchtEraf + 1)})
  }

  removeBVE() {
    if (this.state.BloemVruchtEraf >= 1 ){
    this.setState({BloemVruchtEraf: (this.state.BloemVruchtEraf - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }

  addPlague() {
    this.setState({PlaagNietGemeld: (this.state.PlaagNietGemeld + 1)})
  }

  removePlague() {
    if (this.state.PlaagNietGemeld >= 1 ){
    this.setState({PlaagNietGemeld: (this.state.PlaagNietGemeld - 1)})
    } else {
      console.log("spint staat op 0");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: 'green',
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  count: {
    fontSize: 28,
    paddingLeft: 20,
  },
  positionCount: {
    alignItems: "center",
    flexDirection: 'row',
    position: "absolute",
    ...Platform.select({
      ios: {
        paddingLeft: (global.windowWidth / 1.8)
      },
      android: {
        paddingLeft: (global.windowWidth / 1.8)
      },
      default: {
        paddingLeft: 210
      }
    })
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontSize: 24,
      },
      default: {
        fontSize: 18,
      }
    })
  }
});
