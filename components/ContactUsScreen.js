import React, { Component } from 'react';
import { View,
        Text,
        StyleSheet,
        StatusBar,
        Image,
        Linking,
        Platform,
        ScrollView,
        TouchableHighlight,
       } from 'react-native';
import { Router } from '../main';

export default class ContactUsScreen extends Component {

  static route = {
    navigationBar: {
      title: 'Contact Us',
      tintColor: '#000',
    },
  };
  _goToScreen = name => () => {
    this.props.navigator.push(Router.getRoute(name));
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
          <TouchableHighlight
          onPress={this._goToScreen('home')}>
          <Image
            source={require('../assets/images/EPSawBlade_small.jpg')}

          />
          </TouchableHighlight>
            <Text style={styles.titleText}>
              Emerging Properties, LLC
            </Text>
            <Text style={styles.tabBarInfoText}>
            "ya we do THAT too..."
            {"\n"}{"\n"}
            </Text>

            <Text style={styles.getStartedText}>
            If you need a qoute,
            </Text>
            <Text style={styles.getStartedText}>
            or just wish to get in touch with us,{"\n"}
            </Text>

            <Text style={styles.getStartedText}>
            PO Box 1076
            </Text>

            <Text style={styles.getStartedText}>
            Younsgville, LA 70592{"\n"}{"\n"}
            </Text>

            <Text style={styles.getStartedText}>
            Phone: (337) 981-3223
            </Text>

            <Text style={styles.getStartedText}>
            Email: ep100@cox.net
            </Text>

          </View>
        </ScrollView>

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
    marginHorizontal: 50,
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
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
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
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    fontStyle: 'italic'
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
