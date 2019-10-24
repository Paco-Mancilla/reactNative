/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      siwtchValue:false,
    };
  }


  onChange=(value)=>{
    console.warn(`El switch cambiara a: ${value}`)
    this.setState({switchValue:value})
  }
  onPressLearnMore=()=>{ 
    console.warn('Escribiste')
    Alert.alert(`Cambio de variable a: ${this.state.text}`)
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={{ height: 40, width:300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText= {text=>this.setState({text: text} )}
      />
      <Switch
        onValueChange={()=>this.onChange(!this.state.switchValue)}
        value={this.state.switchValue}
        />
        <Button 
        onPress={() => this.onPressLearnMore()}
        title="Learn More"
        color="#841584"
        accessibilityLabel = "lear more about this purple button"
        />

        <Text style={styles.welcome}>React-Francisco Mancilla Figueroa</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
