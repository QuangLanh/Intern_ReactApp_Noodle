import {StatusBar} from 'react-native';
import React from 'react';
import Navigating from './Navigating';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/reducers/store';
import {NavigationContainer} from '@react-navigation/native';

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Navigating />
      </NavigationContainer>
    </ReduxProvider>
  );
}
