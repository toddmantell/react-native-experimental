import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <TouchableOpacity onPress={() => navigate('Profile')}>
      <Text>Hello, Chat App!</Text>
    </TouchableOpacity>
    );
  }
}