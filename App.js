import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

const AppNavigation = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

export default class App extends React.Component {
   static navigationOptions = {
    title: 'Welcome',
  };
  render() {    
    return <AppNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
})

//AppRegistry.registerComponent('AppNavigation', () => AppNavigation);

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     //currently using this project just to play with adding yarn packages
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
