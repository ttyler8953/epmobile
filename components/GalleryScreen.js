import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { TabNavigation, TabNavigationItem } from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class GalleryScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Image Gallery',
    },
  };

  _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('first');
    });
  };

  _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('second');
    });
  };

  _goToThirdTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('third');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="Kitchens"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            >
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={require('../assets/images/Galleries/kitchen1.jpg')}
              />
              <Image
                style={styles.image}
                source={require('../assets/images/Galleries/kitchen2.jpg')}
              />

            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            title="Bathrooms"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            >
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={require('../assets/images/Galleries/bath1.jpg')}
              />
              <Image
                style={styles.image}
                source={require('../assets/images/Galleries/bath2.jpg')}
              />

            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
            title="Patios"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            >
            <ScrollView>
            <Image
              style={styles.image}
              source={require('../assets/images/Galleries/patio1.jpg')}
            />
            <Image
              style={styles.image}
              source={require('../assets/images/Galleries/patio2.jpg')}
            />
            </ScrollView>
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }
  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: getColor(isSelected) }}>
        {title}
      </Text>
    );
  };
}
const IMAGE_SIZE = Dimensions.get('window').width / 2 - 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  image: {
    flex: 0.5,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'cover',
    margin: 4,
    borderRadius: 3,
  },
  cover: {
    flex: 1,
    height: 160,
    width: null,
    resizeMode: 'cover',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#0084FF',
    borderRadius: 3,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 13,
    color: '#fff',
  },
  article: {
    padding: 20,
  },
  heading: {
    margin: 4,
    color: '#222',
    fontWeight: 'bold',
    fontSize: 32,
  },
  body: {
    margin: 4,
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },
  gif: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: '#CCC',
  },
  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
