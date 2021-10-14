/**
 * @format
 */

import { AppRegistry, StyleSheet, View } from 'react-native';
import React, {Component} from 'react'
import App from './App';
import {name as appName} from './app.json';


export default class Myproject extends Component {
  render() {
    return <View style={styles.MainContainer}><App /></View>;
  }
}
AppRegistry.registerComponent(appName, () => Myproject);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',

    // Set hex color code here.
    backgroundColor: 'rgba(2, 62, 192, 1)',
  },
});