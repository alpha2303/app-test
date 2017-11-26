/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
// import Splash from './Components/Splash';
// import Login from './Components/Login/Login';
// import Signup from './Components/Login/Signup';
import Routes from './Pages/Routes'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
        <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {
    flex: 2,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
    textAlignVertical: 'center',
  },
  subtext: {
    fontWeight: '200',
    color: 'white',
    padding: 20,
  }
});
