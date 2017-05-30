import React, { Component } from 'react';
import { View,
        Text,
        StyleSheet,
        StatusBar,
        Image,
        Linking,
        Platform,
        ScrollView,
       } from 'react-native';
import pak from '../package.json';

export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'About',
      tintColor: '#000',
    },
  };

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>

            <Text style={styles.titleText}>
            {"\n"}
            Emerging Properties, LLC
            </Text>
            <Text style={styles.tabBarInfoText}>
            "ya we do THAT too..."
            {"\n"}
            </Text>
            <Text style={styles.getStartedText}>
            Emerging Properties, LLC is a localy owned, fully licenced and insured remodeling company located in Lafayette, LA.
            {"\n"}{"\n"}
            We take great pride in being conscientious to your living environment.  Improving your home and enriching your life with the best craftmenship.
            Remodeling does not only affect your home; it also affects your life and your family.  We help you maximize the potinital of your home.
            {"\n"}{"\n"}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            App Version: {pak.version}
          </Text>
        </View>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 55,
  },
  version: {
    fontSize: 18,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 70,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'justify',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 8,
  },
});
