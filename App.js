import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./providers/AuthProvider";
import { TasksProvider } from "./providers/TasksProvider";

import { WelcomeView } from "./views/WelcomeView";
import { ProjectsView } from "./views/ProjectsView";
import { TasksView } from "./views/TasksView";

import { Logout } from "./components/Logout";

import { HomeNavScreen } from './src/apps/InteractiveQuestions/screens/HomeNavScreen';

import { HarvestScreen } from './src/apps/InteractiveQuestions/screens/HarvestScreen';
import { HarvestMistakes } from './src/apps/InteractiveQuestions/screens/HarvestMistakes';
import { HarvestOverviewNieuwV2, HarvestOverview } from './src/apps/InteractiveQuestions/screens/HarvestOverview';

import { GrowScreen } from './src/apps/InteractiveQuestions/screens/GrowScreen';
import { GrowMistakes } from './src/apps/InteractiveQuestions/screens/GrowMistakes';
import { GrowOverviewNieuwV2 } from './src/apps/InteractiveQuestions/screens/GrowOverview';

import { ScoutScreen } from './src/apps/InteractiveQuestions/screens/ScoutScreen';
import { ScoutMistakes } from './src/apps/InteractiveQuestions/screens/ScoutMistakes';
import { ScoutOverview, ScoutOverviewNieuwV2 } from './src/apps/InteractiveQuestions/screens/ScoutOverview';
import { View } from "react-native";


const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome View"
            component={WelcomeView}
            options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}}
          />
          <Stack.Screen
            name="Projects"
            component={ProjectsView}
            title="ProjectsView"
            headerBackTitle="log out"
            options={{
              headerLeft: function Header() {
                return <Logout />;
              },
            }}
          />
          <Stack.Screen name="Task List">
            {(props) => {
              const { navigation, route } = props;
              const { user, projectPartition } = route.params;
              return (
                <TasksProvider user={user} projectPartition={projectPartition}>
                  <TasksView navigation={navigation} route={route} />
                </TasksProvider>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="HomeNavScreen" component={HomeNavScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} >
            </Stack.Screen>
          
          <Stack.Screen name="HarvestScreen" component={HarvestScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="HarvestMistakes" component={HarvestMistakes} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="HarvestOverview" component={HarvestOverviewNieuwV2} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          
          <Stack.Screen name="GrowScreen" component={GrowScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="GrowMistakes" component={GrowMistakes} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="GrowOverview" component={GrowOverviewNieuwV2} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
      
          <Stack.Screen name="ScoutScreen" component={ScoutScreen} options={{title: 'Scouten', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="ScoutMistakes" component={ScoutMistakes} options={{title: 'Scouten Controle', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
          <Stack.Screen name="ScoutOverview" component={ScoutOverviewNieuwV2} options={{title: 'Scouten Overzicht', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;