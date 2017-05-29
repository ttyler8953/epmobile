import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Alert,
} from 'react-native'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider,
} from '@expo/ex-navigation';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/EPSawBlade_small.jpg')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.titleText}>
              Emerging Properties, LLC {"\n"}
            </Text>
            <Text style={styles.tabBarInfoText}>
            "ya we do THAT too..."
            {"\n"}
            </Text>
            <Text style={styles.getStartedText}>
            Emerging Properties, LLC is a localy owned, fully licenced and insured remodeling company located in Lafayette, LA.
            {"\n"}{"\n"}
            We take great pride in being conscientious to your living environment.  Improving your home and enriching your life with the best craftmenship.
            Remodeling does not oly affect your home; it also affects your life and your family.  We help you maximize the potinital of your home.
            {"\n"}{"\n"}
            </Text>
<View style={styles.container}>
<TouchableHighlight >
            <Image
              source={require('../assets/images/home_blueprint.jpg')}
            />
  </TouchableHighlight>
  </View>

            <Text style={styles.getStartedText}>
            {"\n"}We are proud to show you a sample of our work.
            {"\n"}We have created several galleries for you to view, please feel free to view our work.
            {"\n"}
            {"\n"}
            </Text>


          </View>
        </ScrollView>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 52,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
    fontSize: 25,
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
});
