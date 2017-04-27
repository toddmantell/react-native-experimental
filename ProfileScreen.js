import React from 'react';
import {Button} from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
    title: 'Find A Therapist',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
    );
  }
}