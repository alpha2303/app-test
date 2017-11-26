import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Splash extends Component {

  start() {
    Actions.login()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor='#222'
          barStyle='light-content'
        />
        <View style={styles.subcontainer}>
        <Text style={styles.title}>React App</Text>
        <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()} 
        onPress={this.start}    
        >
            <View style={styles.logButton}>
                <Text style={styles.logText}>
                    Get Started
                </Text>
            </View>
        </TouchableNativeFeedback>
        </View>
        <Text style={styles.subtext}>Powered by React Native</Text>
      </View>
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
  subcontainer: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
    margin: 60,
    textAlignVertical: 'center',
  },
  subtext: {
    alignItems:'flex-start',
    fontWeight: '200',
    color: 'white',
    fontSize: 16,
    padding: 20,
  },
  logButton: {
    backgroundColor: '#36d1f2',
    borderRadius: 8,
    padding: 20,
    margin: 60,
  },
  logText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
}
});
