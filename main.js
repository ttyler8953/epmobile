import Exponent, { Asset, AppLoading } from 'expo';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DrawerNavigationScreen from './components/DrawerNavigationScreen';
import AboutScreen from './components/AboutScreen';
import HomeHealthTipsScreen from './components/HomeHealthTipsScreen';
import ContactUsScreen from './components/ContactUsScreen';
import GalleryScreen from './components/GalleryScreen';
import RemodelingTipsScreen from './components/RemodelingTipsScreen';

import AlertBarsScreen from './components/AlertBarsScreen';
import TranslucentBarScreen from './components/TranslucentBarScreen';
import EventEmitterScreen from './components/EventEmitterScreen';
import CustomNavigationBarScreen
  from './components/CustomNavigationBarScreen';

import { createRouter, NavigationProvider } from '@expo/ex-navigation';

const assets = [
  require('./assets/images/Galleries/bath1.jpg'),
  require('./assets/images/Galleries/bath2.jpg'),
  require('./assets/images/Galleries/kitchen1.jpg'),
  require('./assets/images/Galleries/kitchen2.jpg'),
  require('./assets/images/Galleries/patio1.jpg'),
  require('./assets/images/Galleries/patio2.jpg'),

];

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
  contactus: () => ContactUsScreen,
  homehealthtipsscreen: () => HomeHealthTipsScreen,
  gallery: () => GalleryScreen,
  remodelingTips: () => RemodelingTipsScreen,
}));

class App extends Component {
  state = {
    bootstrapped: false,
  };

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap = async () => {
    const promises = assets.map(module =>
      Asset.fromModule(module).downloadAsync()
    );
    await Promise.all(promises);
    this.setState({
      bootstrapped: true,
    });
  };

  render() {
    if (!this.state.bootstrapped) {
      return <AppLoading />;
    }

    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screens, you can
      * think of a stack like a stack of playing cards, and each time
      * you add a screen it slides in on top. Stacks can contain
      * other stacks, for example if you have a tab bar, each of the
      * tabs has its own individual stack. This is where the playing
      * card analogy falls apart, but it's still useful when thinking
      * of individual stacks.
      */
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <DrawerNavigationScreen />
      </NavigationProvider>
    );
  }
}

Exponent.registerRootComponent(App);
