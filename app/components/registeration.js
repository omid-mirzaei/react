
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Regform extends Component<Props> {
  render() {
    return (
      <View style={styles.Regform}>
        <Text style={styles.header}>
            ثبت نام
        </Text>
        <TextInput  style={styles.TextInput} placeholder='نام کاربری' underlineColorAndroid={'transparent'}>

        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Regform:{
  

},
header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
marginBottom:40,
borderBottomColor:'blue',
borderBottomWidth:1,
},
TextInput:{

height:40,
marginBottom:30,
borderBottomColor:'#f8f8f8',
borderBottomWidth:1,
}
});
