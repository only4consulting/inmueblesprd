import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Screens from './src/screens';

const RootStack = createStackNavigator(
  {
    _dashboard: Screens.Dashboard,
    _houseDetail: Screens.HouseDetail,
  },
  {
    initialRouteName: '_dashboard',
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
);

export default function App(props) {
  return <RootStack />;
}
