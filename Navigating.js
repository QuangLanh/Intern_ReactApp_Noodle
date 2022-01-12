import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './presentations/Welcome';
import Infor from './presentations/Infor';
import Done from './presentations/Done';
import Outof from './presentations/Outof';
import ErrorScreen from './presentations/ErrorScreen';
const Stack = createNativeStackNavigator();

function Navigating() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Infor" component={Infor} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen name="Outof" component={Outof} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Navigating;
