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

export default class RemodelingTipsScreen extends Component {

  static route = {
    navigationBar: {
      title: 'Remodeling Tips',
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

            <Text style={styles.titleText}>
              Making your Remodeling Project Sucsessful
            </Text>

            <Text style={styles.getStartedText}>
            Remodeling does not just affect your home; it also affects your lifestyle and your family.  Remodeling your home can be as successful or as much of a nightmare as you wish to make it.  Planning and choosing a remodeling company to do your remodel can make or break your dreams. Remodeling your home represents more than a substantial investment - it is where you live, raise a family and entertain friends.
            </Text>
            <Text style={styles.getStartedText}>
            We understand your desire to get the most out of your remodel.  This is why we have put forth the following to guide you in the process.{"\n"}
            </Text>

            <Text style={styles.getStartedText}>
              <Text style={styles.itemText}>DREAM  - </Text> This is the start of every remodel - Get a file folder, fill it with pictures from magazines, website photos or perhaps your own pictures of products you have seen in stores.  Get the whole family involved in this process. The more ideas, the better
              {"\n"}{"\n"}
              <Text style={styles.itemText}>BUDGET  - </Text> Establish the budget for the project and how you can finance the construction.  Share this budget with your contractor - this give a needed piece of the remodeling puzzle.  Your contractor will be able to more effectively assist you through the selection of products.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>RECOMMENDATIONS - </Text> Ask for recommendations from friends, relatives, business associates - even building material suppliers.  Choosing your remodeling team carefully - it is your home.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>CHECK - </Text> Check the company you are going to use is registration with the state.  Knowing you have a remodeling company to that has been in the community in good standing is a key to your selection.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>REFERENCES - </Text> Do not be afraid to ask your potential remodeling company for references.  Ask to visit projects past and present to get the best representation of the contractor's work
              {"\n"}{"\n"}
              <Text style={styles.itemText}>ASK - </Text> Ask questions to find out the level of product knowledge and trade relationships.  This will also assist in establishing your relationship with your contractor.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>UNDERSTAND - </Text> Understand your contracts being offered.  A few important items to look for are; detailed scope of work, product specifications, payment schedules, change order process, owner's responsibilities, warranties, commencement date, project schedule and process for dispute resolution.
              v{"\n"}{"\n"}
              <Text style={styles.itemText}>COMMUNICATION - </Text> IThis is key to any relationship.  Good communication is extremely important with your designer and construction team. Do not allow yourself to be intimidated or taking for granted in the process.  Ask as many questions as you feel is necessary.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>PREPARE - </Text> Be as prepared as you can for the disruption in your daily lifestyle.  Remodeling sites can be noisy, dusty and dangerous.  Keeping your pets and small children out of harms way may mean relocating them to another area of your home.
              {"\n"}{"\n"}
              <Text style={styles.itemText}>KNOWLEDGE - </Text> Know who you are doing business with is important to the overall trust and confidence you have in your remodeling team.
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
