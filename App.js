import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'
import { createStackNavigator } from 'react-navigation';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
}, {
    initialRouteName: 'Weather',
    initialRouteParams: { zipCode: '90110' }

  })

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}