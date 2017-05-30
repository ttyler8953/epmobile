import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { Router } from '../main';

export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Emerging Properties, LLC',
    },
  };

  _goToScreen = name => () => {
    this.props.navigator.push(Router.getRoute(name));
  };

  render() {
    return (
      <View style={styles.container}>
        <ListItem
          title="Image Gallery"
          description="Veiw a sample of our work by viewing our image gallery"
          onPress={this._goToScreen('gallery')}
        />
       <ListItem
          title="Home Health Tips"
          description="Tips you can do to keep your home in the best shape possible."
          onPress={this._goToScreen('homehealthtipsscreen')}
        />
        <ListItem
          title="Remodeling Tips"
          description="Tips on how to make your remodling project as successful as possible."
          onPress={this._goToScreen('remodelingTips')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b7a3b',
  },
});
