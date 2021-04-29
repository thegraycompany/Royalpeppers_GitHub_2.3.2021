import React from 'react';
import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import * as Icon from "react-native-feather";

export class HarvestMistakes extends React.Component {
  eventHandlers = {
    navigateToHarvestOverview: () => this.navigateToHarvestOverview(),
  };

  constructor(props) {
    global.windowWidth = Dimensions.get('window').width;
    super(props);
    this.state = {
      Sneetje: 0,
      Buts: 0,
      TeBont: 0,
      RafeligeSteel: 0,
      Blad: 0,
      VruchtVergeten: 0,
      KarNietSchoon: 0,
      Overig: '',
      TeKleinGesneden: 0,
      TeGrootGesneden: 0,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
      Color: `${this.props.route.params.Color}`,
      Email: `${this.props.route.params.Email}`,
      TimeStart: `${this.props.route.params.TimeStart}`,
    };
  }

  render() {
    const { Overig } = this.state.Overig;
    if (this.state.Color == "Groen") {
      return (
        <View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Sneetje</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Sneetje}</Text>
              <TouchableOpacity onPress={() => this.removeSneetje()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addSneetje()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Buts</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Buts}</Text>
              <TouchableOpacity onPress={() => this.removeButs()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addButs()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Te Bont</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.TeBont}</Text>
              <TouchableOpacity onPress={() => this.removeTeBont()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addTeBont()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Rafelige Steel</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.RafeligeSteel}</Text>
              <TouchableOpacity onPress={() => this.removeRafeligeSteel()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addRafeligeSteel()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Blad</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Blad}</Text>
              <TouchableOpacity onPress={() => this.removeBlad()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addBlad()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht vergeten</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.VruchtVergeten}</Text>
              <TouchableOpacity onPress={() => this.removeVruchtVergeten()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addVruchtVergeten()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Kar niet schoon</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.KarNietSchoon}</Text>
              <TouchableOpacity onPress={() => this.removeKarNietSchoon()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addKarNietSchoon()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Te klein gesneden</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.TeKleinGesneden}</Text>
              <TouchableOpacity onPress={() => this.removeTeKleinGesneden()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addTeKleinGesneden()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Te groot gesneden</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.TeGrootGesneden}</Text>
              <TouchableOpacity onPress={() => this.removeTeGrootGesneden()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addTeGrootGesneden()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity onPress={this.eventHandlers.navigateToHarvestOverview}>
              <Text style={styles.title}>NAAR OVERZICHT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Sneetje</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Sneetje}</Text>
              <TouchableOpacity onPress={() => this.removeSneetje()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addSneetje()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Buts</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Buts}</Text>
              <TouchableOpacity onPress={() => this.removeButs()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addButs()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Te Bont</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.TeBont}</Text>
              <TouchableOpacity onPress={() => this.removeTeBont()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addTeBont()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Rafelige Steel</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.RafeligeSteel}</Text>
              <TouchableOpacity onPress={() => this.removeRafeligeSteel()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addRafeligeSteel()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Blad</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.Blad}</Text>
              <TouchableOpacity onPress={() => this.removeBlad()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addBlad()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Vrucht vergeten</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.VruchtVergeten}</Text>
              <TouchableOpacity onPress={() => this.removeVruchtVergeten()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addVruchtVergeten()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subTitle}>Kar niet schoon</Text>
            <View style={styles.positionCount}>
              <Text style={styles.count}>{this.state.KarNietSchoon}</Text>
              <TouchableOpacity onPress={() => this.removeKarNietSchoon()} style={{ paddingLeft: 10 }}>
                <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.addKarNietSchoon()} style={{ paddingLeft: 10 }}>
                <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity onPress={this.eventHandlers.navigateToHarvestOverview}>
              <Text style={styles.title}>NAAR OVERZICHT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  onChangeOverige(text) {
    this.setState({ Overig: text });
  }

  navigateToHarvestOverview() {
      this.props.navigation.navigate('HarvestOverview', {
        Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
        Employee: this.state.Employee, Color: this.state.Color, Sneetje: this.state.Sneetje, Buts: this.state.Buts, TeBont: this.state.TeBont,
        RafeligeSteel: this.state.RafeligeSteel, Blad: this.state.Blad, VruchtVergeten: this.state.VruchtVergeten,
        KarNietSchoon: this.state.KarNietSchoon, Email: this.state.Email, TimeStart: this.state.TimeStart, TeKleinGesneden: this.state.TeKleinGesneden, TeGrootGesneden: this.state.TeGrootGesneden
      });
  }

  addSneetje() {
    this.setState({ Sneetje: (this.state.Sneetje + 1) })
  }

  removeSneetje() {
    if (this.state.Sneetje >= 1) {
      this.setState({ Sneetje: (this.state.Sneetje - 1) })
    }
  }

  addButs() {
    this.setState({ Buts: (this.state.Buts + 1) })
  }

  removeButs() {
    if (this.state.Buts >= 1) {
      this.setState({ Buts: (this.state.Buts - 1) })
    }
  }

  addTeBont() {
    this.setState({ TeBont: (this.state.TeBont + 1) })
  }

  removeTeBont() {
    if (this.state.TeBont >= 1) {
      this.setState({ TeBont: (this.state.TeBont - 1) })
    }
  }

  addRafeligeSteel() {
    this.setState({ RafeligeSteel: (this.state.RafeligeSteel + 1) })
  }

  removeRafeligeSteel() {
    if (this.state.RafeligeSteel >= 1) {
      this.setState({ RafeligeSteel: (this.state.RafeligeSteel - 1) })
    }
  }

  addBlad() {
    this.setState({ Blad: (this.state.Blad + 1) })
  }

  removeBlad() {
    if (this.state.Blad >= 1) {
      this.setState({ Blad: (this.state.Blad - 1) })
    }
  }

  addVruchtVergeten() {
    this.setState({ VruchtVergeten: (this.state.VruchtVergeten + 1) })
  }

  removeVruchtVergeten() {
    if (this.state.VruchtVergeten >= 1) {
      this.setState({ VruchtVergeten: (this.state.VruchtVergeten - 1) })
    }
  }

  addKarNietSchoon() {
    this.setState({ KarNietSchoon: (this.state.KarNietSchoon + 1) })
  }

  removeKarNietSchoon() {
    if (this.state.KarNietSchoon >= 1) {
      this.setState({ KarNietSchoon: (this.state.KarNietSchoon - 1) })
    }
  }

  addTeKleinGesneden() {
    this.setState({ TeKleinGesneden: (this.state.TeKleinGesneden + 1) })
  }

  removeTeKleinGesneden() {
    if (this.state.TeKleinGesneden >= 1) {
      this.setState({ TeKleinGesneden: (this.state.TeKleinGesneden - 1) })
    }
  }

  addTeGrootGesneden() {
    this.setState({ TeGrootGesneden: (this.state.TeGrootGesneden + 1) })
  }

  removeTeGrootGesneden() {
    if (this.state.TeGrootGesneden >= 1) {
      this.setState({ TeGrootGesneden: (this.state.TeGrootGesneden - 1) })
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
        paddingLeft: (global.windowWidth / 2)
      },
      android: {
        paddingLeft: 230
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
        fontSize: 22,
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
