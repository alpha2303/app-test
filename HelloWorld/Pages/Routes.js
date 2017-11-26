import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'

import Splash from '../Components/Splash';
import Login from '../Components/Login/Login';
import Signup from '../Components/Login/Signup';

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="splash" component={Splash} title="Splash" />
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="signup" component={Signup} title="Signup"/>
        </Stack>
      </Router>
    );
  }
}