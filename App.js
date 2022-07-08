// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogbookListScreen from 'Logster/src/screens/LogbookListScreen.js';
import EditLogbookScreen from 'Logster/src/screens/EditLogbookScreen.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logbook">
        <Stack.Screen name="Logbook" component={LogbookListScreen} />
        <Stack.Screen name="Edit Logbook" component={EditLogbookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;