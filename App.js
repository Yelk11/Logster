// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogbookListScreen from './src/screens/LogbookListScreen.js';
import EditLogbookScreen from './src/screens/EditLogbookScreen.js';
import EditLogEntry from './src/screens/EditLogEntryScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log Entry">
        <Stack.Screen name="Logbook" component={LogbookListScreen} />
        <Stack.Screen name="Create Logbook" component={EditLogbookScreen} />
        <Stack.Screen name="Log Entry" component={EditLogEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;