import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  
} from 'react-native';
import LoginForm from './LoginForm'

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  signUp() {
    Actions.signup()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor='#222'
          barStyle='light-content'
        />
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../../Images/react_native.png')} 
            />
            <Text style={styles.logoText}>A React Native Application</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm type="LOGIN"/>
        </View>
        <View style={styles.signUpCont}>
          <Text style={styles.subtext}>Don't have an account yet?  </Text>
          <TouchableOpacity onPress={this.signUp}><Text style={styles.signup}>Sign Up!</Text></TouchableOpacity>
        </View>
      </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  logoContainer: {
    margin: 60,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 17,
    padding: 5,
    color: 'white',
    opacity: 0.6,
  },
  formContainer: {
    flexGrow: 1.2,
  },
  subtext: {
    fontWeight: '200',
    color: 'white',
    opacity: 0.6,
  },
  signUpCont: {
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row',
  },
  signup: {
    color:'white',
    opacity: 0.4,
  },
});