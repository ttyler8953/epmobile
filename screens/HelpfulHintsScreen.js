import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View, } from 'react-native';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home Health Tips',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.monthText}>
                January
              </Text>

              <Text style={styles.getStartedText}>
              Heating/Cooling system - Review your service; clean up debris from around your outside unit, do not forget to change your filters
Garage Door - Check for any loose parts
Electrical Panel - Look for triped breakes (if any, make note and call an electrician)
              </Text>
            </View>


          </ScrollView>
          </View>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  getStartedText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'justify',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
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
  monthText:{
    fontSize: 17,
    textAlign: 'left',
    fontWeight:'bold',
  },
});
