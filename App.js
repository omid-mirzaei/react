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
  Button
} from 'react-native';
import Regform from './app/components/registeration';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
    <Regform>
    <Text>sisibash</Text>
    </Regform>
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#34495e',
  },
  regbutton: {
    textAlign: 'right',
    color: '#333333',
    marginBottom: 5,
    flex:1,
  },
});
