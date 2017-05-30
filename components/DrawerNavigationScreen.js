import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Router } from '../main';

export default class DrawerNavigationScreen extends Component {
  _renderHeader = () => {
    return (
      <View style={{ height: 42, width: 100 }}>
        <Image
          source={require('../assets/images/EPSawBlade_med.png')}
          style={styles.header}
        />
      </View>
    );
  };

  _renderTitle = (text: string, isSelected: boolean) => {
    return (
      <Text
        style={[
          styles.buttonTitleText,
          isSelected ? styles.selectedText : null,
        ]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: boolean) => {
    let extraStyle = { marginTop: 2 };
    if (name === 'md-alert') {
      extraStyle = { ...extraStyle, marginLeft: -3 };
    }
    return (
      <Ionicons
        style={[
          styles.icon,
          isSelected ? styles.selectedText : null,
          extraStyle,
        ]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={300}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="contact"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Contact Us', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="item2"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('contactus')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="another"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-alert', isSelected)}>
          <StackNavigation id="about" initialRoute={Router.getRoute('about')} />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 20,
  
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: '#E8E8E8',
  },
});
