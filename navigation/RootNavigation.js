import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';


export default class RootNavigation extends React.Component {


  render() {
    return (
      <TabNavigation tabBarHeight={56} initialTab="home">
        <TabNavigationItem
          id="home"
          renderIcon={isSelected => this._renderIcon('home', isSelected)}>
          <StackNavigation initialRoute="home" />
        </TabNavigationItem>

        <TabNavigationItem
          id="galleries"
          renderIcon={isSelected => this._renderIcon('image', isSelected)}>
          <StackNavigation initialRoute="galleries" />
        </TabNavigationItem>

        <TabNavigationItem
          id="helpfulhints"
          renderIcon={isSelected => this._renderIcon('tasks', isSelected)}>
          <StackNavigation initialRoute="helpfulhints" />
        </TabNavigationItem>

        <TabNavigationItem
          id="links"
          renderIcon={isSelected => this._renderIcon('book', isSelected)}>
          <StackNavigation initialRoute="links" />
        </TabNavigationItem>

        <TabNavigationItem
          id="contactus"
          renderIcon={isSelected => this._renderIcon('paper-plane-o', isSelected)}>
          <StackNavigation initialRoute="contactus" />
        </TabNavigationItem>

        <TabNavigationItem
          id="settings"
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
          <StackNavigation initialRoute="settings" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});