import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, ScrollView, Platform } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import DropDownPicker from 'react-native-dropdown-picker';
import { Flag, User } from "react-native-feather";


export class GrowScreen extends React.Component {
  eventHandlers = {
    navigateToGrowMistakes: () => this.navigateToGrowMistakes(),
  };

  constructor(props) {
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    var Seconds = ((hours * 3600) + (min * 60) + sec);
    super(props);
    this.state = {
      Location: null,
      isVisibleLocation: false,

      Greenhouse: null,
      isVisibleGreenhouse: false,

      Path: null,
      isVisiblePath: false,

      Employee: null,
      isVisibleEmployee: false,

      TimeStart: Seconds,

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
    if (this.state.email == "") {
      var locaties = [{ label: 'Log opnieuw in', value: 'Log opnieuw in', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.email == "patrick@royalpeppers.nl" || this.state.email == "peter@royalpeppers.nl" ||
      this.state.email == "ronald@royalpeppers.nl" || this.state.email == "derk@royalpeppers.nl" || this.state.email == "arnoud@royalpeppers.nl"
      || this.state.email == "dianaL@royalpeppers.nl" || this.state.email == "Richard@royalpeppers.nl" || this.state.email == "joanna@royalpeppers.nl") {
      var locaties = [{ label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" /> },
      { label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Flag size={18} color="#000" />, hidden: true },
      { label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" /> },
      { label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" /> },
      { label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.email == "arjan@royalpeppers.nl") {
      var locaties = [{ label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "albert-jan@royalpeppers.nl") {
      var locaties = [{ label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "krisztof@royalpeppers.nl") {
      var locaties = [{ label: 'Rilland', value: 'Rilland', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "rutger@royalpeppers.nl") {
      var locaties = [{ label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "arjanV@royalpeppers.nl") {
      var locaties = [{ label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "ruben@royalpeppers.nl") {
      var locaties = [{ label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "roelK@royalpeppers.nl") {
      var locaties = [{ label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "martijn@royalpeppers.nl") {
      var locaties = [{ label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "andy@royalpeppers.nl") {
      var locaties = [{ label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "recep@royalpeppers.nl") {
      var locaties = [{ label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Flag size={18} color="#000" />, },];
    } else if (this.state.email == "harold@royalpeppers.nl"){
      var locaties = [{ label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Flag size={18} color="#000" />,}];
    }

    if (this.state.Location == "Rilland") {
      var kassen = [{ label: '1R', value: '1R', icon: () => <Flag size={18} color="#000" /> },
      { label: '2R', value: '2R', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.Location == "Anthony Lionweg") {
      var kassen = [{ label: '1A', value: '1A', icon: () => <Flag size={18} color="#000" /> },
      { label: '2A', value: '2A', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.Location == "Narcissenweg") {
      var kassen = [{ label: '1N', value: '1N', icon: () => <Flag size={18} color="#000" /> },
      { label: '2N', value: '2N', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.Location == "Waddinxveen") {
      var kassen = [{ label: '1WV', value: '1WV', icon: () => <Flag size={18} color="#000" /> },
      { label: '2WV', value: '2WV', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.Location == "Warmoeziersweg") {
      var kassen = [{ label: '1W', value: '1W', icon: () => <Flag size={18} color="#000" /> },
      { label: '2W', value: '2W', icon: () => <Flag size={18} color="#000" /> },];
    } else {
      var kassen = [{ label: 'Selecteer eerst een Locatie', value: 'Selecteer eerst een Locatie', icon: () => <Flag size={18} color="#000" /> },];
    }


    if (this.state.Greenhouse == "1R") {
      var i;
      var paden = [];
      for (i = 101; i < 197; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 201; i < 297; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 301; i < 397; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 401; i < 497; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "2R") {
      var i
      var paden = [];
      for (i = 501; i < 597; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 616; i < 697; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 701; i < 797; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 801; i < 897; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "1A") {
      var i
      var paden = [];
      for (i = 101; i < 178; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 201; i < 278; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 301; i < 371; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 401; i < 471; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "2A") {
      var i
      var paden = [];
      for (i = 501; i < 559; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 611; i < 659; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 701; i < 755; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 801; i < 855; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "1W") {
      var i;
      var paden = [];
      for (i = 113; i < 169; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 201; i < 269; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 301; i < 359; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 401; i < 459; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "2W") {
      var i
      var paden = [];
      for (i = 501; i < 579; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 601; i < 679; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 701; i < 773; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 801; i < 885; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "1N") {
      var i
      var paden = [];
      for (i = 1; i < 145; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 201; i < 345; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 401; i < 575; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "2N") {
      var i
      var paden = [];
      for (i = 601; i < 783; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "1WV") {
      var i
      var paden = [];
      for (i = 101; i < 161; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 201; i < 261; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 301; i < 355; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 401; i < 455; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 501; i < 555; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 601; i < 655; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 701; i < 755; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 801; i < 855; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "2WV") {
      var i
      var paden = [];
      for (i = 901; i < 961; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 1001; i < 1061; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 1101; i < 1154; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
      for (i = 1201; i < 1254; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    }
    else {
      var Medewerkers = [{ label: 'Medewerkers niet gevonden', value: 'Medewerkers niet gevonden', icon: () => <Flag size={18} color="#000" /> }];
      var paden = [{ label: 'Selecteer eerst een Kas', value: 'Selecteer eerst een Kas', icon: () => <Flag size={18} color="#000" /> }];
    }

    var Employees = ["101 Albert-Jan de Jonge","102 Krysztof Glugla","103 Iwona Kubacka","120 Ewelina Chmura","121 Przemyslaw Mazurek","122 Mirek Myler","123 Patryk Kudon","124 Dariusz Kudon","125 Paulina Walkowiak","126 Renata Krawczyk","127 Artur Krawczyk","128 Adam Ruszak","129 Robert Kolczynski","130 Gabor Fabian","131 Bence Zoltan","132 Micula Szilvia","133 Marianna Dutka","140 Przemyslaw Juchnowski","141 Beata Dzierzanowska","142 Joanna Dzierzanowska","143 Dominik Golebiewski","144 Piotr Dzierzanowski","145 Piotr Grzejszczyk","146 Alicja Kalas","147 Wieslaw Oginski","148 Justyna Brzozowska","149 Mariusz Rogala","150 Przemyslaw Maslowski","151 Rafal Barsznica","152 Monika Zieminska","153 Wojciech Kubik","154 Florin Moraniu","155 Zicu Sirbu","156 Constantin Dobreanu","157 Adrian Sirbu","180 Mehmet Atli","181 Nikolaos Giannakidis","182 Murat Sarcan","183 Erkout Oglou","184 Zina Ilieva","185 Ismail Simsek","186 Hristiyana Ilieva","187 Asen Iliev","188 Yanko Blagoev","201 Arjan de Jong","202 danny nieuwkoop","203 Harold Motz","204 Jolijn Van Winden","205 Laura Engel","206 jakub dolata","207 aleksandra matusiak","208 katarzyna matusiak","221 monika kaminska","231 Monika Kransczuk","241 Agata Lewandowska","251 Ali Aydin","252 Ali Gabr","253 Ali Ismail","254 Asya Onur","255 Burhan Aytemur","256 Cemil Aydinx","257 Enver Kaya","258 Koray Onur","259 Mehmet Celik","260 Moustafa Mitwalli","261 Onder Kilic","262 Sedat Surmeli","263 Serdin Baycuman","264 Yildiz Rasim","302 Arjan Vermeulen","303 Carola In `t veen","304 Tomasz Sciubidlo","305 Renata Czerwik","306 Julita Zglenicka","320 Kamil Zglenicki","321 Tomasz Czerwik","322 Tudor Sorin","340 Mariusz Gill","341 Nina Kokowicz","342 Tomasz Gill","343 Rodi Baycuman","344 Erkan Atas","345 Harun Kocoglu","346 Marcin Mackowiak","401 Ruben Mertens","402 Roel Klapwijk","410 Ana Popova","412 Hristina Ivanova","413 Sasho Rusev","420 Robert Bak","421 Barbara Walkowiak","422 Florin Chiriac","423 Florin Dobreanu","424 Katarzyna Malinowska","425 Miroslaw Pecula","426 Miroslaw Pilarek","427 Piotr Mazurek","428 Alicia Masternak","429 Fetinia Maxim","430 Cozma Maxim","431 Arthur Jankowswki","440 Daniel Baicu","442 Cemil Aydin","444 Erdal Eryilmaz","445 Fati Karabulut","446 Moustafa Soliman","448 Severin Karadzhov","450 Marian  Baicu","451 Sla Hristova","460 Alin-Ionut Neagos","461 Bianca Cretu","462 Boris Gheorghe","463 Fanica Ghita","464 Ionut Urezanu","465 Maria Gheorghe","466 Thomas Czerwik","468 Virgil Gheorghe","471 Andrzej Nieweglowski","481 Monika Krawczuk","484 Sergiu Serbu","486 Wojtek Nowack","491 Tomasz Burzykowski","501 Andy de Jong","502 Jurgen Boesveld","503 Martijn Mertens","520 Aleksandra Jawniak","521 Alicja Kowalska","522 Angelika Sabastyn","523 Angelika Wisniowska","524 Anna Baradziej","525 Anna Osinska","526 Anna Popova","527 Binnaz karakoch","528 Asen Iliev Asenov","529 Asie Angelova Tinkova","530 Atif Uksel","531 Beata Agnieska Kudla","532 Beata stypula","533 Daniel Sumera","534 Bekir Duran","535 Cevdet Kucuk","536 Daria Monika Witak","537 Wiktoria Sumera","538 Dimitar Rusev Angelov","539 Diyan Ogniyanov Asenov","540 Gabriele Stunguryte","541 Enver Demir","542 Erika Lukoseviciute","543 Huseyin Eser","545 Vytene Rubeziute","546 Feysal  Coskun","547 Hristina Ivanova Demirova","548 Hristinta Ivanova","549 Galya Dimitrova","550 Gana Stayanova","551 Atanas Georgiev","552 Gergana Atanasova","553 Haci Bekir","554 Hanifi Polat","555 Hristina Ilkova","556 Hristinka Asenova","557 Hristinka Ilieva","558 Hristinka Misheva","559 Hristo Rusev","560 Hristoz Hristozov","561 Iliya Veselinov","562 Kamenka Petkova","563 Karolina Rattu","564 Marcin Krasucki","565 Katarzyna duda","566 Malgorzata Anna","567 Mariya Misheva","568 Marzena kowalczyk","569 Mehmed Mehmed","570 Mehmet Ali","571 Mehmet Demirel","572 Mehmet Gunes","573 Mersil Mehmedali","574 Milan Georgiev","575 Mircho Georgiev","576 Miryana Georgieva","577 Mitko Angelov","578 Mohamed Ahmed","579 Mohamed Veli","580 Serdal Ayyildiz","581 Monika Krystyna","582 Monika Przygocka","583 Muhammed Demirel","584 Murat Ozkay","585 Mustafa Borislavov","586 Myumyun Mestan","587 Natalia Medrala","588 Neslihan Ismailova","589 Nevzer Lyutova","590 Marcin Kaczmara","591 Nikodem Antosiak","592 Ognyan Uzunov","593 Orlin Dobrev","594 Irina Lodigina","595 Penco Bozhinov","596 Rada Dimitrova","597 Recep Gunes","598 Robert Jankowski","599 Rolands Samsanov","600 Rumen Stoyanov","601 Rumyana Miteva","602 Sasho Dimitrov","604 Slavey Atanasov","605 Slawomir Boleslaw","606 Stefan Andonov","607 Stefan Dimchev","608 Stoyan Stoyanov","609 Veli Asenov","610 Viktoria Cjacka","611 Viktors Paskevics","612 Vitalijs paskevics","613 Yilmaz Ciftcioglu","614 Zoya Nikolaeva","901 Peter van den Bosch","902 Patrick van den Bosch","903 Ronald van Winden","904 Arnoud  van den berge","905 Derk van Duijvenboode","906 Richard de Vreede","907 Tom Mosselman","908 Joanna Smola","909 Pawel Maciejewski","910 Diana van der Leer","911 Jan van den Bosch"];
    var k;
    var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
    for (k = 0; k < Employees.length; k++) {
      Medewerkers.push({ label: `${Employees[k]}`, value: `${Employees[k]}`, icon: () => <User size={18} color="#000" /> });
    }

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Toppen/Draaien
          </Text>

            {/* Locatie */}
            <View style={{ paddingBottom: 20,
              ...(Platform.OS !== 'android' && {
                zIndex: 10
              })
            }}>
              <Text style={styles.subtitle}>Locatie</Text>
              <DropDownPicker
                items={locaties}
                defaultValue={this.state.Location}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                labelStyle={{
                  fontSize: 16,
                  textAlign: 'left',
                  color: '#000'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 230 }}

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
                  Employee: null,
                  Color: null,
                })}
              />
            </View>
           
            {/* Greenhouse */}
            <View style={{ paddingBottom: 20,
              ...(Platform.OS !== 'android' && {
                zIndex: 9
              })
            }}>
              <Text style={styles.subtitle}>Kas</Text>
              <DropDownPicker
                items={kassen}
                defaultValue={this.state.Greenhouse}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                labelStyle={{
                  fontSize: 16,
                  textAlign: 'left',
                  color: '#000'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}

                isVisible={this.state.isVisibleGreenhouse}
                onOpen={() => this.changeVisibility({
                  isVisibleGreenhouse: true
                })}
                onClose={() => this.setState({
                  isVisibleGreenhouse: false
                })}
                onChangeItem={item => this.setState({
                  Greenhouse: item.value,
                  Path: null,
                  Employee: null,
                  Color: null,
                })}
              />
            </View>
            
            {/* Pad */}
            <View style={{paddingBottom: 20,
              ...(Platform.OS !== 'android' && {
                zIndex: 8
              })
            }}>
              <Text style={styles.subtitle}>Pad</Text>
              <DropDownPicker
                items={paden}
                defaultValue={this.state.Path}
                searchable={true}
                searchablePlaceholder="Zoek een pad"
                searchablePlaceholderTextColor="gray"
                searchableError={() => <Text>Pad niet gevonden</Text>}
                searchableStyle={{ backgroundColor: '#dfdfdf' }}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                labelStyle={{
                  fontSize: 16,
                  textAlign: 'left',
                  color: '#000'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 300 }}

                isVisible={this.state.isVisiblePath}
                onOpen={() => this.changeVisibility({
                  isVisiblePath: true
                })}
                onClose={() => this.setState({
                  isVisiblePath: false
                })}
                onChangeItem={item => this.setState({
                  Path: item.value,
                  Employee: null,
                  Color: null
                })}
              />
            </View>
            
            {/* Medewerker */}
            <View style={{paddingBottom: 100,
              ...(Platform.OS !== 'android' && {
                zIndex: 7
              })
            }}>
              <Text style={styles.subtitle}>Medewerker</Text>
              <DropDownPicker
                items={Medewerkers}
                defaultValue={this.state.Employee}
                searchable={true}
                searchablePlaceholder="Zoek een medewerker"
                searchablePlaceholderTextColor="gray"
                searchableError={() => <Text>Not Found</Text>}
                searchableStyle={{ backgroundColor: '#dfdfdf' }}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                labelStyle={{
                  fontSize: 16,
                  textAlign: 'left',
                  color: '#000'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 300 }}

                isVisible={this.state.isVisibleEmployee}
                onOpen={() => this.changeVisibility({
                  isVisibleEmployee: true
                })}
                onClose={() => this.setState({
                  isVisibleEmployee: false
                })}
                onChangeItem={item => this.setState({
                  Employee: item.value,
                  Color: null
                })}
              />
            </View>


          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity onPress={this.eventHandlers.navigateToGrowMistakes}>
              <Text style={styles.title}>START CONTROLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  navigateToGrowMistakes() {
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    var Seconds = ((hours * 3600) + (min * 60) + sec);
    this.setState({ TimeStart: Seconds });

    if (this.state.Location != null && this.state.Greenhouse != null && this.state.Path != null && this.state.Employee != null) {
      this.props.navigation.navigate('GrowMistakes', {
        Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
        Employee: this.state.Employee, Email: this.state.email, TimeStart: this.state.TimeStart
      });
    } else {
      Alert.alert("Voer alle velding in");
    }
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
  },
});
