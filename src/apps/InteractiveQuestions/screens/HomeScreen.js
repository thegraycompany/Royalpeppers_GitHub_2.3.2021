import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  input: string;
  wachtwoord: string;
}

export class HomeScreen extends React.Component<IProps, IState> {
  public eventHandlers = {
    onChangePassword: (text: string) => this.onChangePassword(text),
    onChangeName: (text: string) => this.onChangeName(text),
    navigateToNextScreen: () => this.navigateToNextScreen(),
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      input: '',
      wachtwoord: '',
    };
  }

  public render() {
    const { input } = this.state.input;
    const { wachtwoord } = this.state.wachtwoord;
    return (
      <View>
        <Text style={styles.title}> Login</Text>

        <View style={styles.container}>
          <View style={styles.superContainer}>
        <TextInput
          onChangeText={this.eventHandlers.onChangeName}
          style={styles.subTitle}
          placeholder="Email"
          value={
            input
          }
        />
        </View>
        <View style={styles.superContainer}>
        <TextInput
          onChangeText={this.eventHandlers.onChangePassword}
          style={styles.subTitle}
          placeholder="wachtwoord"
          value={
            input
          }
        />
        </View>
        </View>
        <TouchableOpacity onPress={this.eventHandlers.navigateToNextScreen}>
          <Text style={styles.title}>INLOGGEN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onChangeName(text: string) {
    this.setState({ input: text });
  }

  onChangePassword(text: string) {
    this.setState({ wachtwoord: text });
  }

  navigateToNextScreen() {
    this.props.navigation.navigate('QuestionDetail', { name: this.state.input });
  }
}


const styles = StyleSheet.create({
  superContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: 'green',
    minWidth: 200,
    paddingTop: 20,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    marginVertical: 8,
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