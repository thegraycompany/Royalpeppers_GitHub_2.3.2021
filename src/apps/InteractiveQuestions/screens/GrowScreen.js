import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import DropDownPicker from 'react-native-dropdown-picker';
import { Flag, User } from "react-native-feather";

export class GrowScreen extends React.Component {
  eventHandlers = {
    navigateToGrowMistakes: () => this.navigateToGrowMistakes(),
  };

  constructor(props) {
    super(props);
    this.state = {
      Location: '',
      isVisibleLocation: false,
  
      Greenhouse: '',
      isVisibleGreenhouse: false,
  
      Path: '',
      isVisiblePath: false,
  
      Employee: 'Pietje Puk',
      isVisibleEmployee: false,

      email: `${this.props.route.params.email}`
    };
  }

  changeVisibility(state) {
    this.setState({
        isVisibleLocation: false,
        isVisibleGreenhouse: false,
        isVisiblePath: false,
        isVisibleEmployee: false,
        ...state
    });
}

  render() {
    if(this.state.email == ""){
      var locaties = [{label: 'Log opnieuw in', value: 'Log opnieuw in', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.email == "patrick@royalpeppers.nl" || this.state.email == "peter@royalpeppers.nl" || 
    this.state.email == "ronald@royalpeppers.nl" || this.state.email == "derk@royalpeppers.nl" || this.state.email == "arnoud@royalpeppers.nl"
    || this.state.email == "dianaL@royalpeppers.nl"){
      var locaties = [{label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" />},
              {label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Flag size={18} color="#000" />, hidden: true},
              {label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" />},
              {label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" />},
              {label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.email == "arjan@royalpeppers.nl"){
      var locaties = [{label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "albert-jan@royalpeppers.nl"){
      var locaties = [{label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "krisztof@royalpeppers.nl"){
      var locaties = [{label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "rudger@royalpeppers.nl"){
      var locaties = [{label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "arjanV@royalpeppers.nl"){
      var locaties = [{label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "ruben@royalpeppers.nl"){
      var locaties = [{label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "roelK@royalpeppers.nl"){
      var locaties = [{label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "martijn@royalpeppers.nl"){
      var locaties = [{label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "andy@royalpeppers.nl"){
      var locaties = [{label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />,},];
    } else if(this.state.email == "recep@royalpeppers.nl"){
      var locaties = [{label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />,},];
    }

    if(this.state.Location == "Rilland"){
      var kassen = [{label: 'Kas 1R', value: 'Kas 1R', icon: () => <Flag size={18} color="#000" />},
        {label: 'Kas 2R', value: 'Kas 2R', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.Location == "Anthony Lionweg"){
      var kassen = [{label: 'Kas 1A', value: 'Kas 1A', icon: () => <Flag size={18} color="#000" />},
      {label: 'Kas 2A', value: 'Kas 2A', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.Location == "Narcissenweg"){
      var kassen = [{label: 'Kas 1N', value: 'Kas 1N', icon: () => <Flag size={18} color="#000" />},
      {label: 'Kas 2N', value: 'Kas 2N', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.Location == "Waddinxveen"){
      var kassen = [{label: 'Kas 1WV', value: 'Kas 1WV', icon: () => <Flag size={18} color="#000" />},
      {label: 'Kas 2WV', value: 'Kas 2WV', icon: () => <Flag size={18} color="#000" />},];
    } else if(this.state.Location == "Warmoeziersweg"){
      var kassen = [{label: 'Kas 1W', value: 'Kas 1W', icon: () => <Flag size={18} color="#000" />},
      {label: 'Kas 2W', value: 'Kas 2W', icon: () => <Flag size={18} color="#000" />},];
    } else {
      var kassen = [{label: 'Selecteer eerst een Locatie', value: 'Selecteer eerst een Locatie', icon: () => <Flag size={18} color="#000" />},];
    }


    if(this.state.Greenhouse == "Kas 1R"){
      var i;
      var paden = [];
      for(i = 101; i < 197; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 201; i < 297; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 301; i < 397; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 401; i < 497; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    }else if(this.state.Greenhouse == "Kas 2R"){
      var i
      var paden = [];
      for(i = 501; i < 597; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 616; i < 697; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 701; i < 797; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 801; i < 897; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 1A"){
      var i
      var paden = [];
      for(i = 101; i < 178; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 201; i < 278; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 301; i < 371; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 401; i < 471; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 2A"){
      var i
      var paden = [];
      for(i = 501; i < 559; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 611; i < 659; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 701; i < 755; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 801; i < 855; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 1W"){
      var i
      var paden = [];
      for(i = 113; i < 169; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 201; i < 269; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 301; i < 359; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 401; i < 459; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 2W"){
      var i
      var paden = [];
      for(i = 501; i < 579; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 601; i < 679; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 701; i < 773; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 801; i < 885; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 1N"){
      var i
      var paden = [];
      for(i = 1; i < 145; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 201; i < 345; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 401; i < 575; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 2N"){
      var i
      var paden = [];
      for(i = 601; i < 783; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 1WV"){
      var i
      const paden = [];
      for(i = 101; i < 161; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 201; i < 261; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 301; i < 355; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 401; i < 455; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 501; i < 555; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 601; i < 655; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 701; i < 755; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 801; i < 855; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    } else if(this.state.Greenhouse == "Kas 2WV"){
      var i
      var paden = [];
      for(i = 901; i < 961; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 1001; i < 1061; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 1101; i < 1154; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
      for(i = 1201; i < 1254; i++){
        paden.push({label: "Pad " + `${i}`, value: 'Pad ' + `${i}`, icon: () => <Flag size={18} color="#000" />})
      }
    }
    else{
      var paden = [{label: 'Selecteer eerst een Kas', value: 'Selecteer eerst een Kas', icon: () => <Flag size={18} color="#000" />}];
    }   



    
    return (
      <View>
        <Text style={styles.title}>
          Toppen/Draaien
        </Text>
        
        <View style={styles.dropdown}>
        <Text style={styles.subtitle}>Locatie</Text>
        <DropDownPicker
          items={locaties}
          defaultValue={this.state.Location}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa', minHeight: 200}}

          isVisible={this.state.isVisibleLocation}
          onOpen={() => this.changeVisibility({
            isVisibleLocation: true
          })}
          onClose={() => this.setState({
            isVisibleLocation: false
          })}
          onChangeItem={item => this.setState({
              Location: item.value,
              Greenhouse: null,
              Path: null,
          })}
      />
      </View>
      
        <View style={styles.dropdown}>
        <Text style={styles.subtitle}>Kas</Text>
        <DropDownPicker
          items={kassen}
          defaultValue={this.state.Greenhouse}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}

          isVisible={this.state.isVisibleGreenhouse}
          onOpen={() => this.changeVisibility({
            isVisibleGreenhouse: true
          })}
          onClose={() => this.setState({
            isVisibleGreenhouse: false
          })}
          onChangeItem={item => this.setState({
              Greenhouse: item.value,
              Path: null
          })}
       />
       </View>

        <View style={styles.dropdown}>
        <Text style={styles.subtitle}>Pad</Text>
        <DropDownPicker
          items={paden}
          defaultValue={this.state.Path}
          searchable={true}
          searchablePlaceholder="Zoek een pad"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
          searchableStyle={{backgroundColor: '#dfdfdf'}}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}

          isVisible={this.state.isVisiblePath}
          onOpen={() => this.changeVisibility({
            isVisiblePath: true
          })}
          onClose={() => this.setState({
            isVisiblePath: false
          })}
          onChangeItem={item => this.setState({
              Path: item.value
          })}
       />
        </View>

        <View style={styles.dropdown}>
        <Text style={styles.subtitle}>Medewerker</Text>
        <DropDownPicker
          items={[
              {label: 'Pietje Puk', value: 'Pietje Puk', icon: () => <User size={18} color="#000" />, hidden: true},
              {label: 'Tom Thieman', value: 'Tom Thieman', icon: () => <User size={18} color="#000" />},
          ]}
          defaultValue={this.state.Employee}
          searchable={true}
          searchablePlaceholder="Zoek een Medewerker"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
          searchableStyle={{backgroundColor: '#dfdfdf'}}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}
          
          isVisible={this.state.isVisibleEmployee}
          onOpen={() => this.changeVisibility({
            isVisibleEmployee: true
          })}
          onClose={() => this.setState({
            isVisibleEmployee: false
          })}
          onChangeItem={item => this.setState({
              Employee: item.value
          })}
       />
        </View>

        
      <View style={{paddingTop: 50}}>
        <TouchableOpacity onPress={this.eventHandlers.navigateToGrowMistakes}>
          <Text style={styles.title}>START CONTROLE</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  navigateToGrowMistakes() {
    this.props.navigation.navigate('GrowMistakes', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
      Employee: this.state.Employee});
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
  },
  dropdown: {
    marginHorizontal: 16,
    paddingBottom: 20,
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
  subtitle: {
    fontSize: 24,
  },
});