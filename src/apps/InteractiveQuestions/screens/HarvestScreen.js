import React from 'react';
import { Alert, StyleSheet, ScrollView, Text, View, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Award, Flag, User } from "react-native-feather";
import { NavigationInjectedProps } from 'react-navigation';


export class HarvestScreen extends React.Component {
  eventHandlers = {
    navigateToHarvestMistakes: () => this.navigateToHarvestMistakes(),
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

      Color: null,
      isVisibleColor: false,


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
      isVisibleColor: false,
      ...state
    });
  }


  render() {
    if (this.state.email == "") {
      var locaties = [{ label: 'Log opnieuw in', value: 'Log opnieuw in', icon: () => <Flag size={18} color="#000" /> },];
    } else if (this.state.email == "patrick@royalpeppers.nl" || this.state.email == "peter@royalpeppers.nl" ||
      this.state.email == "ronald@royalpeppers.nl" || this.state.email == "derk@royalpeppers.nl" || this.state.email == "arnoud@royalpeppers.nl"
      || this.state.email == "dianaL@royalpeppers.nl") {
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
    } else if (this.state.email == "rudger@royalpeppers.nl") {
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
      var rillandEmployees = ["Albert-Jan de Jonge", "Krysztof Glugla", "Iwona Kubacka", "Ewelina Chmura", "Przemyslaw Mazurek", "Mirek Myler", "Patryk Kudon", "Dariusz Kudon", "Paulina Walkowiak", "Renata Krawczyk", "Artur Krawczyk", "Adam Ruszak", "Robert Kolczynski", "Przemyslaw Juchnowski", "Beata Dzierzanowska", "Joanna Dzierzanowska", "Dominik Golebiewski", "Piotr Dzierzanowski", "Piotr Grzejszczyk", "Alicja Kalas", "Wieslaw Oginski", "Justyna Brzozowska", "Mariusz Rogala", "Przemyslaw Maslowski", "Rafal Barsznica", "Monika Zieminska", "Wojciech Kubik", "Mehmet  Atli", "Nikolaos Giannakidis", "Murat Sarcan", "Erkout  Oglou", "Zina Ilieva", "Ismail Simsek", "Hristiyana Ilieva", "Asen Iliev"];
      var k;
      var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
      for (k = 0; k < rillandEmployees.length; k++) {
        Medewerkers.push({ label: `${rillandEmployees[k]}`, value: `${rillandEmployees[k]}`, icon: () => <User size={18} color="#000" /> });
      }

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
      var k;
      var rillandEmployees = ["Albert-Jan de Jonge", "Krysztof Glugla", "Iwona Kubacka", "Ewelina Chmura", "Przemyslaw Mazurek", "Mirek Myler", "Patryk Kudon", "Dariusz Kudon", "Paulina Walkowiak", "Renata Krawczyk", "Artur Krawczyk", "Adam Ruszak", "Robert Kolczynski", "Przemyslaw Juchnowski", "Beata Dzierzanowska", "Joanna Dzierzanowska", "Dominik Golebiewski", "Piotr Dzierzanowski", "Piotr Grzejszczyk", "Alicja Kalas", "Wieslaw Oginski", "Justyna Brzozowska", "Mariusz Rogala", "Przemyslaw Maslowski", "Rafal Barsznica", "Monika Zieminska", "Wojciech Kubik", "Mehmet  Atli", "Nikolaos Giannakidis", "Murat Sarcan", "Erkout  Oglou", "Zina Ilieva", "Ismail Simsek", "Hristiyana Ilieva", "Asen Iliev"];
      var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
      for (k = 0; k < rillandEmployees.length; k++) {
        Medewerkers.push({ label: `${rillandEmployees[k]}`, value: `${rillandEmployees[k]}`, icon: () => <User size={18} color="#000" /> });
      }
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
      var lionwegEmployee = ["Rutger Groen", "Arjan Vermeulen", "Carola Intveen", "Tomasz Sciubidlo", "Renata Czerwik", "Julita Zglenicka", "Kamil Zglenicki", "Tomasz Czerwik", "Tudor Sorin", "Mariusz Gill", "Nina Kokowicz", "Tomasz Gill", "Rodi Baycuman", "Erkan Atas"];
      var k;
      var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
      for (k = 0; k < lionwegEmployee.length; k++) {
        Medewerkers.push({ label: `${lionwegEmployee[k]}`, value: `${lionwegEmployee[k]}`, icon: () => <User size={18} color="#000" /> });
      }
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
      var lionwegEmployee = ["Rutger Groen", "Arjan Vermeulen", "Carola Intveen", "Tomasz Sciubidlo", "Renata Czerwik", "Julita Zglenicka", "Kamil Zglenicki", "Tomasz Czerwik", "Tudor Sorin", "Mariusz Gill", "Nina Kokowicz", "Tomasz Gill", "Rodi Baycuman", "Erkan Atas"];
      var k;
      var Medewerkers = [{ label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> }];
      for (k = 0; k < lionwegEmployee.length; k++) {
        Medewerkers.push({ label: `${lionwegEmployee[k]}`, value: `${lionwegEmployee[k]}`, icon: () => <User size={18} color="#000" /> });
      }
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
      var i
      var paden = [];
      var Medewerkers = [{ label: 'Agata Lewandowska', value: 'Agata Lewandowska', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Aydin', value: 'Ali Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Gabr', value: 'Ali Gabr', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Ismail', value: 'Ali Ismail', icon: () => <User size={18} color="#000" /> },
      { label: 'Alicia Masternak', value: 'Alicia Masternak', icon: () => <User size={18} color="#000" /> },
      { label: 'Andrzej Nieweglowski', value: 'Andrzej Nieweglowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Andy de Jong', value: 'Andy de Jong', icon: () => <User size={18} color="#000" /> },
      { label: 'Arjan de Jong', value: 'Arjan de Jong', icon: () => <User size={18} color="#000" /> },
      { label: 'Arjan Vermeulen', value: 'Arjan Vermeulen', icon: () => <User size={18} color="#000" /> },
      { label: 'Arkadiusz Balach', value: 'Arkadiusz Balach', icon: () => <User size={18} color="#000" /> },
      { label: 'Asya Onur', value: 'Asya Onur', icon: () => <User size={18} color="#000" /> },
      { label: 'Barbara Sulikowska', value: 'Barbara Sulikowska', icon: () => <User size={18} color="#000" /> },
      { label: 'Burhan  Aytemur', value: 'Burhan  Aytemur', icon: () => <User size={18} color="#000" /> },
      { label: 'Carola in`t Veen', value: 'Carola in`t Veen', icon: () => <User size={18} color="#000" /> },
      { label: 'Cemil Aydinx', value: 'Cemil Aydinx', icon: () => <User size={18} color="#000" /> },
      { label: 'Cristina Cretu', value: 'Cristina Cretu', icon: () => <User size={18} color="#000" /> },
      { label: 'Damian  Jufa', value: 'Damian  Jufa', icon: () => <User size={18} color="#000" /> },
      { label: 'Danny Nieuwkoop', value: 'Danny Nieuwkoop', icon: () => <User size={18} color="#000" /> },
      { label: 'Dariusz Schulz', value: 'Dariusz Schulz', icon: () => <User size={18} color="#000" /> },
      { label: 'Enver Kaya', value: 'Enver Kaya', icon: () => <User size={18} color="#000" /> },
      { label: 'Ernest Jan Sierocinski', value: 'Ernest Jan Sierocinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Eufrosina Ripa', value: 'Eufrosina Ripa', icon: () => <User size={18} color="#000" /> },
      { label: 'Florin Secrieriu', value: 'Florin Secrieriu', icon: () => <User size={18} color="#000" /> },
      { label: 'Gabriel Grudzinski', value: 'Gabriel Grudzinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Harold Motz', value: 'Harold Motz', icon: () => <User size={18} color="#000" /> },
      { label: 'Hristinka Asenova', value: 'Hristinka Asenova', icon: () => <User size={18} color="#000" /> },
      { label: 'Imit Siampan', value: 'Imit Siampan', icon: () => <User size={18} color="#000" /> },
      { label: 'Ionut-Alin Crismareanu', value: 'Ionut-Alin Crismareanu', icon: () => <User size={18} color="#000" /> },
      { label: 'Ismail Simsek', value: 'Ismail Simsek', icon: () => <User size={18} color="#000" /> },
      { label: 'Iurii Ursu', value: 'Iurii Ursu', icon: () => <User size={18} color="#000" /> },
      { label: 'Jacek Slusarczyk', value: 'Jacek Slusarczyk', icon: () => <User size={18} color="#000" /> },
      { label: 'Jaipay Scrif', value: 'Jaipay Scrif', icon: () => <User size={18} color="#000" /> },
      { label: 'Jan  Stefl', value: 'Jan  Stefl', icon: () => <User size={18} color="#000" /> },
      { label: 'Joanna Alicja', value: 'Joanna Alicja', icon: () => <User size={18} color="#000" /> },
      { label: 'Jolanta Manko', value: 'Jolanta Manko', icon: () => <User size={18} color="#000" /> },
      { label: 'Jolijn Van Winden', value: 'Jolijn Van Winden', icon: () => <User size={18} color="#000" /> },
      { label: 'Julita Zglenicka', value: 'Julita Zglenicka', icon: () => <User size={18} color="#000" /> },
      { label: 'Jurgen  Boesveld', value: 'Jurgen  Boesveld', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Bugadakis', value: 'Kamil Bugadakis', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Niedziela', value: 'Kamil Niedziela', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Zglenicki', value: 'Kamil Zglenicki', icon: () => <User size={18} color="#000" /> },
      { label: 'Kantrina Memet Oglou', value: 'Kantrina Memet Oglou', icon: () => <User size={18} color="#000" /> },
      { label: 'Katarzyna Bieniek', value: 'Katarzyna Bieniek', icon: () => <User size={18} color="#000" /> },
      { label: 'Konrad Jerzy  Zagorowski', value: 'Konrad Jerzy  Zagorowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Konrad Przemyslaw Wolak', value: 'Konrad Przemyslaw Wolak', icon: () => <User size={18} color="#000" /> },
      { label: 'Koray Onur', value: 'Koray Onur', icon: () => <User size={18} color="#000" /> },
      { label: 'Krzysztof Kotarski', value: 'Krzysztof Kotarski', icon: () => <User size={18} color="#000" /> },
      { label: 'Krzysztof Lisowski', value: 'Krzysztof Lisowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Laura Engel', value: 'Laura Engel', icon: () => <User size={18} color="#000" /> },
      { label: 'Maciej Jerzy Iwanczuk', value: 'Maciej Jerzy Iwanczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Mateusz Podlesny', value: 'Mateusz Podlesny', icon: () => <User size={18} color="#000" /> },
      { label: 'Mehmet Celik', value: 'Mehmet Celik', icon: () => <User size={18} color="#000" /> },
      { label: 'Milosz Pliszko', value: 'Milosz Pliszko', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kaminska', value: 'Monika Kaminska', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kransczuk', value: 'Monika Kransczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Przybyka', value: 'Monika Przybyka', icon: () => <User size={18} color="#000" /> },
      { label: 'Moustafa Mitwalli', value: 'Moustafa Mitwalli', icon: () => <User size={18} color="#000" /> },
      { label: 'Onder Kilic', value: 'Onder Kilic', icon: () => <User size={18} color="#000" /> },
      { label: 'Ovidius Vaiciulis', value: 'Ovidius Vaiciulis', icon: () => <User size={18} color="#000" /> },
      { label: 'Ovidiu-Simion Cazacu', value: 'Ovidiu-Simion Cazacu', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Hudzik', value: 'Pawel Hudzik', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Maciejewski', value: 'Pawel Maciejewski', icon: () => <User size={18} color="#000" /> },
      { label: 'Pietru Burluip', value: 'Pietru Burluip', icon: () => <User size={18} color="#000" /> },
      { label: 'Piotr Sckoda', value: 'Piotr Sckoda', icon: () => <User size={18} color="#000" /> },
      { label: 'Przemyslaw Dworak', value: 'Przemyslaw Dworak', icon: () => <User size={18} color="#000" /> },
      { label: 'Przemyslaw Zuchowski', value: 'Przemyslaw Zuchowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Renata Czerwik', value: 'Renata Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert  Bail', value: 'Robert  Bail', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert Bak', value: 'Robert Bak', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert Boronski', value: 'Robert Boronski', icon: () => <User size={18} color="#000" /> },
      { label: 'Roman Wawrzynski', value: 'Roman Wawrzynski', icon: () => <User size={18} color="#000" /> },
      { label: 'Sebastian Kosinski', value: 'Sebastian Kosinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Sedat Surmeli', value: 'Sedat Surmeli', icon: () => <User size={18} color="#000" /> },
      { label: 'Serdin Baycuman', value: 'Serdin Baycuman', icon: () => <User size={18} color="#000" /> },
      { label: 'serqiu serbu', value: 'Serqiu Serbu', icon: () => <User size={18} color="#000" /> },
      { label: 'Teodor Lazariu', value: 'Teodor Lazariu', icon: () => <User size={18} color="#000" /> },
      { label: 'Tomasz  Czerwik', value: 'Tomasz  Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Tomasz Sciubicko', value: 'Tomasz Sciubicko', icon: () => <User size={18} color="#000" /> },
      { label: 'Tudor Sorin', value: 'Tudor Sorin', icon: () => <User size={18} color="#000" /> },
      { label: 'Wojtek Nowack', value: 'Wojtek Nowack', icon: () => <User size={18} color="#000" /> },
      { label: 'Yildiz Rasim', value: 'Yildiz Rasim', icon: () => <User size={18} color="#000" /> },
      { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
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
      var Medewerkers = [{ label: 'Agata Lewandowska', value: 'Agata Lewandowska', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Aydin', value: 'Ali Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Gabr', value: 'Ali Gabr', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Ismail', value: 'Ali Ismail', icon: () => <User size={18} color="#000" /> },
      { label: 'Alicia Masternak', value: 'Alicia Masternak', icon: () => <User size={18} color="#000" /> },
      { label: 'Andrzej Nieweglowski', value: 'Andrzej Nieweglowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Andy de Jong', value: 'Andy de Jong', icon: () => <User size={18} color="#000" /> },
      { label: 'Arjan de Jong', value: 'Arjan de Jong', icon: () => <User size={18} color="#000" /> },
      { label: 'Arjan Vermeulen', value: 'Arjan Vermeulen', icon: () => <User size={18} color="#000" /> },
      { label: 'Arkadiusz Balach', value: 'Arkadiusz Balach', icon: () => <User size={18} color="#000" /> },
      { label: 'Asya Onur', value: 'Asya Onur', icon: () => <User size={18} color="#000" /> },
      { label: 'Barbara Sulikowska', value: 'Barbara Sulikowska', icon: () => <User size={18} color="#000" /> },
      { label: 'Burhan  Aytemur', value: 'Burhan  Aytemur', icon: () => <User size={18} color="#000" /> },
      { label: 'Carola in`t Veen', value: 'Carola in`t Veen', icon: () => <User size={18} color="#000" /> },
      { label: 'Cemil Aydinx', value: 'Cemil Aydinx', icon: () => <User size={18} color="#000" /> },
      { label: 'Cristina Cretu', value: 'Cristina Cretu', icon: () => <User size={18} color="#000" /> },
      { label: 'Damian  Jufa', value: 'Damian  Jufa', icon: () => <User size={18} color="#000" /> },
      { label: 'Danny Nieuwkoop', value: 'Danny Nieuwkoop', icon: () => <User size={18} color="#000" /> },
      { label: 'Dariusz Schulz', value: 'Dariusz Schulz', icon: () => <User size={18} color="#000" /> },
      { label: 'Enver Kaya', value: 'Enver Kaya', icon: () => <User size={18} color="#000" /> },
      { label: 'Ernest Jan Sierocinski', value: 'Ernest Jan Sierocinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Eufrosina Ripa', value: 'Eufrosina Ripa', icon: () => <User size={18} color="#000" /> },
      { label: 'Florin Secrieriu', value: 'Florin Secrieriu', icon: () => <User size={18} color="#000" /> },
      { label: 'Gabriel Grudzinski', value: 'Gabriel Grudzinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Harold Motz', value: 'Harold Motz', icon: () => <User size={18} color="#000" /> },
      { label: 'Hristinka Asenova', value: 'Hristinka Asenova', icon: () => <User size={18} color="#000" /> },
      { label: 'Imit Siampan', value: 'Imit Siampan', icon: () => <User size={18} color="#000" /> },
      { label: 'Ionut-Alin Crismareanu', value: 'Ionut-Alin Crismareanu', icon: () => <User size={18} color="#000" /> },
      { label: 'Ismail Simsek', value: 'Ismail Simsek', icon: () => <User size={18} color="#000" /> },
      { label: 'Iurii Ursu', value: 'Iurii Ursu', icon: () => <User size={18} color="#000" /> },
      { label: 'Jacek Slusarczyk', value: 'Jacek Slusarczyk', icon: () => <User size={18} color="#000" /> },
      { label: 'Jaipay Scrif', value: 'Jaipay Scrif', icon: () => <User size={18} color="#000" /> },
      { label: 'Jan  Stefl', value: 'Jan  Stefl', icon: () => <User size={18} color="#000" /> },
      { label: 'Joanna Alicja', value: 'Joanna Alicja', icon: () => <User size={18} color="#000" /> },
      { label: 'Jolanta Manko', value: 'Jolanta Manko', icon: () => <User size={18} color="#000" /> },
      { label: 'Jolijn Van Winden', value: 'Jolijn Van Winden', icon: () => <User size={18} color="#000" /> },
      { label: 'Julita Zglenicka', value: 'Julita Zglenicka', icon: () => <User size={18} color="#000" /> },
      { label: 'Jurgen  Boesveld', value: 'Jurgen  Boesveld', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Bugadakis', value: 'Kamil Bugadakis', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Niedziela', value: 'Kamil Niedziela', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Zglenicki', value: 'Kamil Zglenicki', icon: () => <User size={18} color="#000" /> },
      { label: 'Kantrina Memet Oglou', value: 'Kantrina Memet Oglou', icon: () => <User size={18} color="#000" /> },
      { label: 'Katarzyna Bieniek', value: 'Katarzyna Bieniek', icon: () => <User size={18} color="#000" /> },
      { label: 'Konrad Jerzy  Zagorowski', value: 'Konrad Jerzy  Zagorowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Konrad Przemyslaw Wolak', value: 'Konrad Przemyslaw Wolak', icon: () => <User size={18} color="#000" /> },
      { label: 'Koray Onur', value: 'Koray Onur', icon: () => <User size={18} color="#000" /> },
      { label: 'Krzysztof Kotarski', value: 'Krzysztof Kotarski', icon: () => <User size={18} color="#000" /> },
      { label: 'Krzysztof Lisowski', value: 'Krzysztof Lisowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Laura Engel', value: 'Laura Engel', icon: () => <User size={18} color="#000" /> },
      { label: 'Maciej Jerzy Iwanczuk', value: 'Maciej Jerzy Iwanczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Mateusz Podlesny', value: 'Mateusz Podlesny', icon: () => <User size={18} color="#000" /> },
      { label: 'Mehmet Celik', value: 'Mehmet Celik', icon: () => <User size={18} color="#000" /> },
      { label: 'Milosz Pliszko', value: 'Milosz Pliszko', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kaminska', value: 'Monika Kaminska', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kransczuk', value: 'Monika Kransczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Przybyka', value: 'Monika Przybyka', icon: () => <User size={18} color="#000" /> },
      { label: 'Moustafa Mitwalli', value: 'Moustafa Mitwalli', icon: () => <User size={18} color="#000" /> },
      { label: 'Onder Kilic', value: 'Onder Kilic', icon: () => <User size={18} color="#000" /> },
      { label: 'Ovidius Vaiciulis', value: 'Ovidius Vaiciulis', icon: () => <User size={18} color="#000" /> },
      { label: 'Ovidiu-Simion Cazacu', value: 'Ovidiu-Simion Cazacu', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Hudzik', value: 'Pawel Hudzik', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Maciejewski', value: 'Pawel Maciejewski', icon: () => <User size={18} color="#000" /> },
      { label: 'Pietru Burluip', value: 'Pietru Burluip', icon: () => <User size={18} color="#000" /> },
      { label: 'Piotr Sckoda', value: 'Piotr Sckoda', icon: () => <User size={18} color="#000" /> },
      { label: 'Przemyslaw Dworak', value: 'Przemyslaw Dworak', icon: () => <User size={18} color="#000" /> },
      { label: 'Przemyslaw Zuchowski', value: 'Przemyslaw Zuchowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Renata Czerwik', value: 'Renata Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert  Bail', value: 'Robert  Bail', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert Bak', value: 'Robert Bak', icon: () => <User size={18} color="#000" /> },
      { label: 'Robert Boronski', value: 'Robert Boronski', icon: () => <User size={18} color="#000" /> },
      { label: 'Roman Wawrzynski', value: 'Roman Wawrzynski', icon: () => <User size={18} color="#000" /> },
      { label: 'Sebastian Kosinski', value: 'Sebastian Kosinski', icon: () => <User size={18} color="#000" /> },
      { label: 'Sedat Surmeli', value: 'Sedat Surmeli', icon: () => <User size={18} color="#000" /> },
      { label: 'Serdin Baycuman', value: 'Serdin Baycuman', icon: () => <User size={18} color="#000" /> },
      { label: 'serqiu serbu', value: 'Serqiu Serbu', icon: () => <User size={18} color="#000" /> },
      { label: 'Teodor Lazariu', value: 'Teodor Lazariu', icon: () => <User size={18} color="#000" /> },
      { label: 'Tomasz  Czerwik', value: 'Tomasz  Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Tomasz Sciubicko', value: 'Tomasz Sciubicko', icon: () => <User size={18} color="#000" /> },
      { label: 'Tudor Sorin', value: 'Tudor Sorin', icon: () => <User size={18} color="#000" /> },
      { label: 'Wojtek Nowack', value: 'Wojtek Nowack', icon: () => <User size={18} color="#000" /> },
      { label: 'Yildiz Rasim', value: 'Yildiz Rasim', icon: () => <User size={18} color="#000" /> },
      { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
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
      var Medewerkers = [{ label: 'Ali Aydin', value: 'Ali Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Gabr', value: 'Ali Gabr', icon: () => <User size={18} color="#000" /> },
      { label: 'Cemil Aydin', value: 'Cemil Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Enver Kaya', value: 'Enver Kaya', icon: () => <User size={18} color="#000" /> },
      { label: 'Erdal Eryilmaz', value: 'Erdal Eryilmaz', icon: () => <User size={18} color="#000" /> },
      { label: 'Fati Karabulut', value: 'Fati Karabulut', icon: () => <User size={18} color="#000" /> },
      { label: 'Moustafa Soliman', value: 'Moustafa Soliman', icon: () => <User size={18} color="#000" /> },
      { label: 'Ramazan Yilnazer', value: 'Ramazan Yilnazer', icon: () => <User size={18} color="#000" /> },
      { label: 'Serdin Baycuman', value: 'Serdin Baycuman', icon: () => <User size={18} color="#000" /> },
      { label: 'Severin Karadzhov', value: 'Severin Karadzhov', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Zglenicki', value: 'Kamil Zglenicki', icon: () => <User size={18} color="#000" /> },
      { label: 'Thomas Czerwik', value: 'Thomas Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Tudor Sorin', value: 'Tudor Sorin', icon: () => <User size={18} color="#000" /> },
      { label: 'Mariusz Gill', value: 'Mariusz Gill', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kaminska', value: 'Monika Kaminska', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Krawczuk', value: 'Monika Krawczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Nina Kokowicz', value: 'Nina Kokowicz', icon: () => <User size={18} color="#000" /> },
      { label: 'Sergiu Sizbu', value: 'Sergiu Sizbu', icon: () => <User size={18} color="#000" /> },
      { label: 'Wojtek Nowak', value: 'Wojtek Nowak', icon: () => <User size={18} color="#000" /> },
      { label: 'Alin Guina', value: 'Alin Guina', icon: () => <User size={18} color="#000" /> },
      { label: 'Lenuta Tampu', value: 'Lenuta Tampu', icon: () => <User size={18} color="#000" /> },
      { label: 'Maria Paraschivu', value: 'Maria Paraschivu', icon: () => <User size={18} color="#000" /> },
      { label: 'Marian Guina', value: 'Marian Guina', icon: () => <User size={18} color="#000" /> },
      { label: 'Andrzej Nieweglowski', value: 'Andrzej Nieweglowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Julita Zglenicka', value: 'Julita Zglenicka', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Maciejewski', value: 'Pawel Maciejewski', icon: () => <User size={18} color="#000" /> },
      { label: 'Renata Czerwik', value: 'Renata Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Thomas Sciubidlo', value: 'Thomas Sciubidlo', icon: () => <User size={18} color="#000" /> },
      { label: 'Janusz Manko', value: 'Janusz Manko', icon: () => <User size={18} color="#000" /> },
      { label: 'Marcin Mackowiak', value: 'Marcin Mackowiak', icon: () => <User size={18} color="#000" /> },
      { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
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

      var Medewerkers = [{ label: 'Ali Aydin', value: 'Ali Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Ali Gabr', value: 'Ali Gabr', icon: () => <User size={18} color="#000" /> },
      { label: 'Cemil Aydin', value: 'Cemil Aydin', icon: () => <User size={18} color="#000" /> },
      { label: 'Enver Kaya', value: 'Enver Kaya', icon: () => <User size={18} color="#000" /> },
      { label: 'Erdal Eryilmaz', value: 'Erdal Eryilmaz', icon: () => <User size={18} color="#000" /> },
      { label: 'Fati Karabulut', value: 'Fati Karabulut', icon: () => <User size={18} color="#000" /> },
      { label: 'Moustafa Soliman', value: 'Moustafa Soliman', icon: () => <User size={18} color="#000" /> },
      { label: 'Ramazan Yilnazer', value: 'Ramazan Yilnazer', icon: () => <User size={18} color="#000" /> },
      { label: 'Serdin Baycuman', value: 'Serdin Baycuman', icon: () => <User size={18} color="#000" /> },
      { label: 'Severin Karadzhov', value: 'Severin Karadzhov', icon: () => <User size={18} color="#000" /> },
      { label: 'Kamil Zglenicki', value: 'Kamil Zglenicki', icon: () => <User size={18} color="#000" /> },
      { label: 'Thomas Czerwik', value: 'Thomas Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Tudor Sorin', value: 'Tudor Sorin', icon: () => <User size={18} color="#000" /> },
      { label: 'Mariusz Gill', value: 'Mariusz Gill', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Kaminska', value: 'Monika Kaminska', icon: () => <User size={18} color="#000" /> },
      { label: 'Monika Krawczuk', value: 'Monika Krawczuk', icon: () => <User size={18} color="#000" /> },
      { label: 'Nina Kokowicz', value: 'Nina Kokowicz', icon: () => <User size={18} color="#000" /> },
      { label: 'Sergiu Sizbu', value: 'Sergiu Sizbu', icon: () => <User size={18} color="#000" /> },
      { label: 'Wojtek Nowak', value: 'Wojtek Nowak', icon: () => <User size={18} color="#000" /> },
      { label: 'Alin Guina', value: 'Alin Guina', icon: () => <User size={18} color="#000" /> },
      { label: 'Lenuta Tampu', value: 'Lenuta Tampu', icon: () => <User size={18} color="#000" /> },
      { label: 'Maria Paraschivu', value: 'Maria Paraschivu', icon: () => <User size={18} color="#000" /> },
      { label: 'Marian Guina', value: 'Marian Guina', icon: () => <User size={18} color="#000" /> },
      { label: 'Andrzej Nieweglowski', value: 'Andrzej Nieweglowski', icon: () => <User size={18} color="#000" /> },
      { label: 'Julita Zglenicka', value: 'Julita Zglenicka', icon: () => <User size={18} color="#000" /> },
      { label: 'Pawel Maciejewski', value: 'Pawel Maciejewski', icon: () => <User size={18} color="#000" /> },
      { label: 'Renata Czerwik', value: 'Renata Czerwik', icon: () => <User size={18} color="#000" /> },
      { label: 'Thomas Sciubidlo', value: 'Thomas Sciubidlo', icon: () => <User size={18} color="#000" /> },
      { label: 'Janusz Manko', value: 'Janusz Manko', icon: () => <User size={18} color="#000" /> },
      { label: 'Marcin Mackowiak', value: 'Marcin Mackowiak', icon: () => <User size={18} color="#000" /> },
      { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
      for (i = 601; i < 783; i++) {
        paden.push({ label: `${i}`, value: `${i}`, icon: () => <Flag size={18} color="#000" /> })
      }
    } else if (this.state.Greenhouse == "1WV") {
      var i
      var paden = [];
      var Medewerkers = [
        { label: 'Aleksandra Jawniak', value: 'Aleksandra Jawniak', icon: () => <User size={18} color="#000" /> },
        { label: 'Alicja Kowalska', value: 'Alicja Kowalska', icon: () => <User size={18} color="#000" /> },
        { label: 'Andy de Jong', value: 'Andy de Jong', icon: () => <User size={18} color="#000" /> },
        { label: 'Angelika Sabastyn', value: 'Angelika Sabastyn', icon: () => <User size={18} color="#000" /> },
        { label: 'Angelika Wisniowska', value: 'Angelika Wisniowska', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Baradziej', value: 'Anna Baradziej', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Osinska', value: 'Anna Osinska', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Popova', value: 'Anna Popova', icon: () => <User size={18} color="#000" /> },
        { label: 'Arkadiusz Zielinski', value: 'Arkadiusz Zielinski', icon: () => <User size={18} color="#000" /> },
        { label: 'Asen Iliev Asenov', value: 'Asen Iliev Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Asie Angelova Tinkova', value: 'Asie Angelova Tinkova', icon: () => <User size={18} color="#000" /> },
        { label: 'Atif Yuksel', value: 'Atif Yuksel', icon: () => <User size={18} color="#000" /> },
        { label: 'Aurelia Vlad', value: 'Aurelia Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Beata stypula', value: 'Beata stypula', icon: () => <User size={18} color="#000" /> },
        { label: 'Bedri Topalov Aliev', value: 'Bedri Topalov Aliev', icon: () => <User size={18} color="#000" /> },
        { label: 'Boris Chalakov Zhelev', value: 'Boris Chalakov Zhelev', icon: () => <User size={18} color="#000" /> },
        { label: 'Cengiz Yilmaz', value: 'Cengiz Yilmaz', icon: () => <User size={18} color="#000" /> },
        { label: 'Cevdet Kucuk', value: 'Cevdet Kucuk', icon: () => <User size={18} color="#000" /> },
        { label: 'Daria Monika Witak', value: 'Daria Monika Witak', icon: () => <User size={18} color="#000" /> },
        { label: 'Denka Radeva Toskova', value: 'Denka Radeva Toskova', icon: () => <User size={18} color="#000" /> },
        { label: 'Dimitar Rusev Angelov', value: 'Dimitar Rusev Angelov', icon: () => <User size={18} color="#000" /> },
        { label: 'Diyan Ogniyanov Asenov', value: 'Diyan Ogniyanov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Elena Vlad', value: 'Elena Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Enver Demir', value: 'Enver Demir', icon: () => <User size={18} color="#000" /> },
        { label: 'Erika Bogdan', value: 'Erika Bogdan', icon: () => <User size={18} color="#000" /> },
        { label: 'Erka Yungul', value: 'Erka Yungul', icon: () => <User size={18} color="#000" /> },
        { label: 'Erkan Atas', value: 'Erkan Atas', icon: () => <User size={18} color="#000" /> },
        { label: 'Erkan Yungul', value: 'Erkan Yungul', icon: () => <User size={18} color="#000" /> },
        { label: 'Fahrettin Kantarciogl', value: 'Fahrettin Kantarciogl', icon: () => <User size={18} color="#000" /> },
        { label: 'Fidanka Angelova Asenova', value: 'Fidanka Angelova Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Firat Gunes', value: 'Firat Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Galya Dimitrova Ruseva', value: 'Galya Dimitrova Ruseva', icon: () => <User size={18} color="#000" /> },
        { label: 'Gana Stayanova Yuliyanova', value: 'Gana Stayanova Yuliyanova', icon: () => <User size={18} color="#000" /> },
        { label: 'Gercho Hristov Naydenov', value: 'Gercho Hristov Naydenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Gergana Atanasova Asenova', value: 'Gergana Atanasova Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Haci Bekir Duran', value: 'Haci Bekir Duran', icon: () => <User size={18} color="#000" /> },
        { label: 'Hanifi Polat', value: 'Hanifi Polat', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristina Ilkova Staykova', value: 'Hristina Ilkova Staykova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Asenova Ilieva', value: 'Hristinka Asenova Ilieva', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Ilieva Asenova', value: 'Hristinka Ilieva Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Misheva Angelova', value: 'Hristinka Misheva Angelova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristo Rusev Dimitrov', value: 'Hristo Rusev Dimitrov', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristoz Hristozov Valentinov', value: 'Hristoz Hristozov Valentinov', icon: () => <User size={18} color="#000" /> },
        { label: 'Iliya Veselinov Popov', value: 'Iliya Veselinov Popov', icon: () => <User size={18} color="#000" /> },
        { label: 'Jolijn van Winden', value: 'Jolijn van Winden', icon: () => <User size={18} color="#000" /> },
        { label: 'Jurgen Boesveld', value: 'Jurgen Boesveld', icon: () => <User size={18} color="#000" /> },
        { label: 'Kamenka Petkova Kostova', value: 'Kamenka Petkova Kostova', icon: () => <User size={18} color="#000" /> },
        { label: 'Karolina Rattu', value: 'Karolina Rattu', icon: () => <User size={18} color="#000" /> },
        { label: 'Karolina Yeghshatyan', value: 'Karolina Yeghshatyan', icon: () => <User size={18} color="#000" /> },
        { label: 'Katarzyna Duda', value: 'Katarzyna Duda', icon: () => <User size={18} color="#000" /> },
        { label: 'Laura Engel', value: 'Laura Engel', icon: () => <User size={18} color="#000" /> },
        { label: 'Malgorzata Anna Chmielewska', value: 'Malgorzata Anna Chmielewska', icon: () => <User size={18} color="#000" /> },
        { label: 'Mariya Misheva Angelova', value: 'Mariya Misheva Angelova', icon: () => <User size={18} color="#000" /> },
        { label: 'Martijn Mertens', value: 'Martijn Mertens', icon: () => <User size={18} color="#000" /> },
        { label: 'Marzena Kowalczyk', value: 'Marzena Kowalczyk', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmed Mehmed Hyussein', value: 'Mehmed Mehmed Hyussein', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Ali Temur ', value: 'Mehmet Ali Temur ', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Demirel', value: 'Mehmet Demirel', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Gunes', value: 'Mehmet Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Mersil Mehmedali Sedat', value: 'Mersil Mehmedali Sedat', icon: () => <User size={18} color="#000" /> },
        { label: 'Milan Georgiev Stefanov', value: 'Milan Georgiev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Mircho Georgiev Elenov', value: 'Mircho Georgiev Elenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Miryana Georgieva Tencheva', value: 'Miryana Georgieva Tencheva', icon: () => <User size={18} color="#000" /> },
        { label: 'Mitko Angelov Tinkov', value: 'Mitko Angelov Tinkov', icon: () => <User size={18} color="#000" /> },
        { label: 'Mohamed Ahmed Mahmoud', value: 'Mohamed Ahmed Mahmoud', icon: () => <User size={18} color="#000" /> },
        { label: 'Mohamed Veli Osman', value: 'Mohamed Veli Osman', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Krawczk', value: 'Monika Krawczk', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Krystyna Przygocka', value: 'Monika Krystyna Przygocka', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Przygocka', value: 'Monika Przygocka', icon: () => <User size={18} color="#000" /> },
        { label: 'Muhammed Demirel ', value: 'Muhammed Demirel ', icon: () => <User size={18} color="#000" /> },
        { label: 'Murat Ozkay', value: 'Murat Ozkay', icon: () => <User size={18} color="#000" /> },
        { label: 'Mustafa Borislavov Gerov', value: 'Mustafa Borislavov Gerov', icon: () => <User size={18} color="#000" /> },
        { label: 'Myumyun Mestan Osman', value: 'Myumyun Mestan Osman', icon: () => <User size={18} color="#000" /> },
        { label: 'Natalia Medrala', value: 'Natalia Medrala', icon: () => <User size={18} color="#000" /> },
        { label: 'Neslihan Ismailova Ahmedova', value: 'Neslihan Ismailova Ahmedova', icon: () => <User size={18} color="#000" /> },
        { label: 'Nevzer Lyutova Ahmedova', value: 'Nevzer Lyutova Ahmedova', icon: () => <User size={18} color="#000" /> },
        { label: 'Nicolai Vlad', value: 'Nicolai Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Nikodem Antosiak', value: 'Nikodem Antosiak', icon: () => <User size={18} color="#000" /> },
        { label: 'Ognyan Uzunov Hristov', value: 'Ognyan Uzunov Hristov', icon: () => <User size={18} color="#000" /> },
        { label: 'Orlin Dobrev Stefanov', value: 'Orlin Dobrev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Pencho Radev Bozhinov', value: 'Pencho Radev Bozhinov', icon: () => <User size={18} color="#000" /> },
        { label: 'Penco Bozhinov Radev', value: 'Penco Bozhinov Radev', icon: () => <User size={18} color="#000" /> },
        { label: 'Rada Dimitrova Hristineva', value: 'Rada Dimitrova Hristineva', icon: () => <User size={18} color="#000" /> },
        { label: 'Recep Gunes', value: 'Recep Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Robert Jankowski', value: 'Robert Jankowski', icon: () => <User size={18} color="#000" /> },
        { label: 'Rolands Samsanov', value: 'Rolands Samsanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumen Angelov Simeonov', value: 'Rumen Angelov Simeonov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumen Stoyanov Atanasov', value: 'Rumen Stoyanov Atanasov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumyana Miteva Nadkova', value: 'Rumyana Miteva Nadkova', icon: () => <User size={18} color="#000" /> },
        { label: 'Sasho Dimitrov Rusev', value: 'Sasho Dimitrov Rusev', icon: () => <User size={18} color="#000" /> },
        { label: 'Serdal Ayyildiz', value: 'Serdal Ayyildiz ', icon: () => <User size={18} color="#000" /> },
        { label: 'Slavey Atanasov Asenov', value: 'Slavey Atanasov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Slawomir Boleslaw Floryczyk', value: 'Slawomir Boleslaw Floryczyk', icon: () => <User size={18} color="#000" /> },
        { label: 'Stefan Andonov Asenov', value: 'Stefan Andonov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Stefan Dimchev Stefanov', value: 'Stefan Dimchev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Stoyan Stoyanov Stoykov', value: 'Stoyan Stoyanov Stoykov', icon: () => <User size={18} color="#000" /> },
        { label: 'Veli Asenov Mustafov', value: 'Veli Asenov Mustafov', icon: () => <User size={18} color="#000" /> },
        { label: 'Viktoria Cjacka', value: 'Viktoria Cjacka', icon: () => <User size={18} color="#000" /> },
        { label: 'Viktors Paskevics', value: 'Viktors Paskevics', icon: () => <User size={18} color="#000" /> },
        { label: 'Vitalijs Paskevics', value: 'Vitalijs Paskevics', icon: () => <User size={18} color="#000" /> },
        { label: 'Yilmaz Ciftcioglu ', value: 'Yilmaz Ciftcioglu ', icon: () => <User size={18} color="#000" /> },
        { label: 'Zoya Nikolaeva Yordanova', value: 'Zoya Nikolaeva Yordanova', icon: () => <User size={18} color="#000" /> },
        { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
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
      var Medewerkers = [
        { label: 'Aleksandra Jawniak', value: 'Aleksandra Jawniak', icon: () => <User size={18} color="#000" /> },
        { label: 'Alicja Kowalska', value: 'Alicja Kowalska', icon: () => <User size={18} color="#000" /> },
        { label: 'Andy de Jong', value: 'Andy de Jong', icon: () => <User size={18} color="#000" /> },
        { label: 'Angelika Sabastyn', value: 'Angelika Sabastyn', icon: () => <User size={18} color="#000" /> },
        { label: 'Angelika Wisniowska', value: 'Angelika Wisniowska', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Baradziej', value: 'Anna Baradziej', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Osinska', value: 'Anna Osinska', icon: () => <User size={18} color="#000" /> },
        { label: 'Anna Popova', value: 'Anna Popova', icon: () => <User size={18} color="#000" /> },
        { label: 'Arkadiusz Zielinski', value: 'Arkadiusz Zielinski', icon: () => <User size={18} color="#000" /> },
        { label: 'Asen Iliev Asenov', value: 'Asen Iliev Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Asie Angelova Tinkova', value: 'Asie Angelova Tinkova', icon: () => <User size={18} color="#000" /> },
        { label: 'Atif Yuksel', value: 'Atif Yuksel', icon: () => <User size={18} color="#000" /> },
        { label: 'Aurelia Vlad', value: 'Aurelia Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Beata stypula', value: 'Beata stypula', icon: () => <User size={18} color="#000" /> },
        { label: 'Bedri Topalov Aliev', value: 'Bedri Topalov Aliev', icon: () => <User size={18} color="#000" /> },
        { label: 'Boris Chalakov Zhelev', value: 'Boris Chalakov Zhelev', icon: () => <User size={18} color="#000" /> },
        { label: 'Cengiz Yilmaz', value: 'Cengiz Yilmaz', icon: () => <User size={18} color="#000" /> },
        { label: 'Cevdet Kucuk', value: 'Cevdet Kucuk', icon: () => <User size={18} color="#000" /> },
        { label: 'Daria Monika Witak', value: 'Daria Monika Witak', icon: () => <User size={18} color="#000" /> },
        { label: 'Denka Radeva Toskova', value: 'Denka Radeva Toskova', icon: () => <User size={18} color="#000" /> },
        { label: 'Dimitar Rusev Angelov', value: 'Dimitar Rusev Angelov', icon: () => <User size={18} color="#000" /> },
        { label: 'Diyan Ogniyanov Asenov', value: 'Diyan Ogniyanov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Elena Vlad', value: 'Elena Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Enver Demir', value: 'Enver Demir', icon: () => <User size={18} color="#000" /> },
        { label: 'Erika Bogdan', value: 'Erika Bogdan', icon: () => <User size={18} color="#000" /> },
        { label: 'Erka Yungul', value: 'Erka Yungul', icon: () => <User size={18} color="#000" /> },
        { label: 'Erkan Atas', value: 'Erkan Atas', icon: () => <User size={18} color="#000" /> },
        { label: 'Erkan Yungul', value: 'Erkan Yungul', icon: () => <User size={18} color="#000" /> },
        { label: 'Fahrettin Kantarciogl', value: 'Fahrettin Kantarciogl', icon: () => <User size={18} color="#000" /> },
        { label: 'Fidanka Angelova Asenova', value: 'Fidanka Angelova Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Firat Gunes', value: 'Firat Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Galya Dimitrova Ruseva', value: 'Galya Dimitrova Ruseva', icon: () => <User size={18} color="#000" /> },
        { label: 'Gana Stayanova Yuliyanova', value: 'Gana Stayanova Yuliyanova', icon: () => <User size={18} color="#000" /> },
        { label: 'Gercho Hristov Naydenov', value: 'Gercho Hristov Naydenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Gergana Atanasova Asenova', value: 'Gergana Atanasova Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Haci Bekir Duran', value: 'Haci Bekir Duran', icon: () => <User size={18} color="#000" /> },
        { label: 'Hanifi Polat', value: 'Hanifi Polat', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristina Ilkova Staykova', value: 'Hristina Ilkova Staykova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Asenova Ilieva', value: 'Hristinka Asenova Ilieva', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Ilieva Asenova', value: 'Hristinka Ilieva Asenova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristinka Misheva Angelova', value: 'Hristinka Misheva Angelova', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristo Rusev Dimitrov', value: 'Hristo Rusev Dimitrov', icon: () => <User size={18} color="#000" /> },
        { label: 'Hristoz Hristozov Valentinov', value: 'Hristoz Hristozov Valentinov', icon: () => <User size={18} color="#000" /> },
        { label: 'Iliya Veselinov Popov', value: 'Iliya Veselinov Popov', icon: () => <User size={18} color="#000" /> },
        { label: 'Jolijn van Winden', value: 'Jolijn van Winden', icon: () => <User size={18} color="#000" /> },
        { label: 'Jurgen Boesveld', value: 'Jurgen Boesveld', icon: () => <User size={18} color="#000" /> },
        { label: 'Kamenka Petkova Kostova', value: 'Kamenka Petkova Kostova', icon: () => <User size={18} color="#000" /> },
        { label: 'Karolina Rattu', value: 'Karolina Rattu', icon: () => <User size={18} color="#000" /> },
        { label: 'Karolina Yeghshatyan', value: 'Karolina Yeghshatyan', icon: () => <User size={18} color="#000" /> },
        { label: 'Katarzyna Duda', value: 'Katarzyna Duda', icon: () => <User size={18} color="#000" /> },
        { label: 'Laura Engel', value: 'Laura Engel', icon: () => <User size={18} color="#000" /> },
        { label: 'Malgorzata Anna Chmielewska', value: 'Malgorzata Anna Chmielewska', icon: () => <User size={18} color="#000" /> },
        { label: 'Mariya Misheva Angelova', value: 'Mariya Misheva Angelova', icon: () => <User size={18} color="#000" /> },
        { label: 'Martijn Mertens', value: 'Martijn Mertens', icon: () => <User size={18} color="#000" /> },
        { label: 'Marzena Kowalczyk', value: 'Marzena Kowalczyk', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmed Mehmed Hyussein', value: 'Mehmed Mehmed Hyussein', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Ali Temur ', value: 'Mehmet Ali Temur ', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Demirel', value: 'Mehmet Demirel', icon: () => <User size={18} color="#000" /> },
        { label: 'Mehmet Gunes', value: 'Mehmet Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Mersil Mehmedali Sedat', value: 'Mersil Mehmedali Sedat', icon: () => <User size={18} color="#000" /> },
        { label: 'Milan Georgiev Stefanov', value: 'Milan Georgiev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Mircho Georgiev Elenov', value: 'Mircho Georgiev Elenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Miryana Georgieva Tencheva', value: 'Miryana Georgieva Tencheva', icon: () => <User size={18} color="#000" /> },
        { label: 'Mitko Angelov Tinkov', value: 'Mitko Angelov Tinkov', icon: () => <User size={18} color="#000" /> },
        { label: 'Mohamed Ahmed Mahmoud', value: 'Mohamed Ahmed Mahmoud', icon: () => <User size={18} color="#000" /> },
        { label: 'Mohamed Veli Osman', value: 'Mohamed Veli Osman', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Krawczk', value: 'Monika Krawczk', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Krystyna Przygocka', value: 'Monika Krystyna Przygocka', icon: () => <User size={18} color="#000" /> },
        { label: 'Monika Przygocka', value: 'Monika Przygocka', icon: () => <User size={18} color="#000" /> },
        { label: 'Muhammed Demirel ', value: 'Muhammed Demirel ', icon: () => <User size={18} color="#000" /> },
        { label: 'Murat Ozkay', value: 'Murat Ozkay', icon: () => <User size={18} color="#000" /> },
        { label: 'Mustafa Borislavov Gerov', value: 'Mustafa Borislavov Gerov', icon: () => <User size={18} color="#000" /> },
        { label: 'Myumyun Mestan Osman', value: 'Myumyun Mestan Osman', icon: () => <User size={18} color="#000" /> },
        { label: 'Natalia Medrala', value: 'Natalia Medrala', icon: () => <User size={18} color="#000" /> },
        { label: 'Neslihan Ismailova Ahmedova', value: 'Neslihan Ismailova Ahmedova', icon: () => <User size={18} color="#000" /> },
        { label: 'Nevzer Lyutova Ahmedova', value: 'Nevzer Lyutova Ahmedova', icon: () => <User size={18} color="#000" /> },
        { label: 'Nicolai Vlad', value: 'Nicolai Vlad', icon: () => <User size={18} color="#000" /> },
        { label: 'Nikodem Antosiak', value: 'Nikodem Antosiak', icon: () => <User size={18} color="#000" /> },
        { label: 'Ognyan Uzunov Hristov', value: 'Ognyan Uzunov Hristov', icon: () => <User size={18} color="#000" /> },
        { label: 'Orlin Dobrev Stefanov', value: 'Orlin Dobrev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Pencho Radev Bozhinov', value: 'Pencho Radev Bozhinov', icon: () => <User size={18} color="#000" /> },
        { label: 'Penco Bozhinov Radev', value: 'Penco Bozhinov Radev', icon: () => <User size={18} color="#000" /> },
        { label: 'Rada Dimitrova Hristineva', value: 'Rada Dimitrova Hristineva', icon: () => <User size={18} color="#000" /> },
        { label: 'Recep Gunes', value: 'Recep Gunes', icon: () => <User size={18} color="#000" /> },
        { label: 'Robert Jankowski', value: 'Robert Jankowski', icon: () => <User size={18} color="#000" /> },
        { label: 'Rolands Samsanov', value: 'Rolands Samsanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumen Angelov Simeonov', value: 'Rumen Angelov Simeonov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumen Stoyanov Atanasov', value: 'Rumen Stoyanov Atanasov', icon: () => <User size={18} color="#000" /> },
        { label: 'Rumyana Miteva Nadkova', value: 'Rumyana Miteva Nadkova', icon: () => <User size={18} color="#000" /> },
        { label: 'Sasho Dimitrov Rusev', value: 'Sasho Dimitrov Rusev', icon: () => <User size={18} color="#000" /> },
        { label: 'Serdal Ayyildiz', value: 'Serdal Ayyildiz ', icon: () => <User size={18} color="#000" /> },
        { label: 'Slavey Atanasov Asenov', value: 'Slavey Atanasov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Slawomir Boleslaw Floryczyk', value: 'Slawomir Boleslaw Floryczyk', icon: () => <User size={18} color="#000" /> },
        { label: 'Stefan Andonov Asenov', value: 'Stefan Andonov Asenov', icon: () => <User size={18} color="#000" /> },
        { label: 'Stefan Dimchev Stefanov', value: 'Stefan Dimchev Stefanov', icon: () => <User size={18} color="#000" /> },
        { label: 'Stoyan Stoyanov Stoykov', value: 'Stoyan Stoyanov Stoykov', icon: () => <User size={18} color="#000" /> },
        { label: 'Veli Asenov Mustafov', value: 'Veli Asenov Mustafov', icon: () => <User size={18} color="#000" /> },
        { label: 'Viktoria Cjacka', value: 'Viktoria Cjacka', icon: () => <User size={18} color="#000" /> },
        { label: 'Viktors Paskevics', value: 'Viktors Paskevics', icon: () => <User size={18} color="#000" /> },
        { label: 'Vitalijs Paskevics', value: 'Vitalijs Paskevics', icon: () => <User size={18} color="#000" /> },
        { label: 'Yilmaz Ciftcioglu ', value: 'Yilmaz Ciftcioglu ', icon: () => <User size={18} color="#000" /> },
        { label: 'Zoya Nikolaeva Yordanova', value: 'Zoya Nikolaeva Yordanova', icon: () => <User size={18} color="#000" /> },
        { label: 'N.T.B.', value: 'N.T.B.', icon: () => <User size={18} color="#000" /> },
      ];
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


    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>
            OOGSTEN
        </Text>

          {/* Locatie */}
          <View style={styles.dropdown, {
            ...(Platform.OS !== 'android' && {
              zIndex: 10
            })
          }}>
            <Text style={styles.subtitle}>Locatie</Text>
            <DropDownPicker
              items={locaties}
              defaultValue={this.state.Location}
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
          <View style={styles.dropdown, {
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
          <View style={styles.dropdown, {
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
          <View style={styles.dropdown, {
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
          {/* Kleur */}
          <View style={styles.dropdown, {
            ...(Platform.OS !== 'android' && {
              zIndex: 6
            })
          }}>
            <Text style={styles.subtitle}>Kleur</Text>
            <DropDownPicker
              items={[
                { label: 'Groen', value: 'Groen', icon: () => <Award size={18} color="#000" /> },
                { label: 'Rood', value: 'Rood', icon: () => <Award size={18} color="#000" /> },
                { label: 'Geel', value: 'Geel', icon: () => <Award size={18} color="#000" /> },
                { label: 'Oranje', value: 'Oranje', icon: () => <Award size={18} color="#000" /> },
              ]}
              defaultValue={this.state.Color}
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
              dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 180 }}

              isVisible={this.state.isVisibleColor}
              onOpen={() => this.changeVisibility({
                isVisibleColor: true
              })}
              onClose={() => this.setState({
                isVisibleColor: false
              })}
              onChangeItem={item => this.setState({
                Color: item.value
              })}
            />
          </View>

          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity onPress={this.eventHandlers.navigateToHarvestMistakes}>
              <Text style={styles.title}>START CONTROLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  navigateToHarvestMistakes() {
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    var Seconds = ((hours * 3600) + (min * 60) + sec);
    this.setState({ TimeStart: Seconds });

    if (this.state.Location != null && this.state.Greenhouse != null && this.state.Path != null && this.state.Employee != null && this.state.Color != null) {
      this.props.navigation.navigate('HarvestMistakes', {
        Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
        Employee: this.state.Employee, Color: this.state.Color, Email: this.state.email, TimeStart: this.state.TimeStart
      });
    } else {
      Alert.alert("Voer alle velden in");
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
