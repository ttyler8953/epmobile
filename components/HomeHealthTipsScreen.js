import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  SlidingTabNavigation,
  SlidingTabNavigationItem,
} from '@expo/ex-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

export default class HomeHealthTipsScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Home Health Tips',
      ...SlidingTabNavigation.navigationBarStyles,
    },
  };

  _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('first');
    });
  };

  _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('second');
    });
  };

  _goToThirdTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('third');
    });
  };
  _goToFourthTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('fourth');
    });
  };

  _renderLabel = ({ route }) => {
    let title;
    if (route.key === 'first') {
      title = 'January';
    } else if (route.key === 'second') {
      title = 'March';
    }
    else if (route.key === 'third') {
      title = 'June';
    }else if (route.key === 'fourth') {
      title = 'October';
    }

    return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <SlidingTabNavigation
          id="sliding-tab-navigation"
          navigatorUID="sliding-tab-navigation"
          initialTab="first"
          renderLabel={this._renderLabel}
          barBackgroundColor="#0084FF"
          indicatorStyle={styles.tabIndicator}>
          <SlidingTabNavigationItem id="first">
            <ScrollView style={styles.quoteContainer}>
            <TouchableOpacity onPress={this._goToSecondTab}>
              <EvilIcons
                name="arrow-right"
                size={16}
                style={styles.button}
              />
            </TouchableOpacity>

              <Text style={styles.getStartedText}>
                <Text style={styles.itemText}>Heating/Cooling System - </Text> Review your service; clean up debris from around your outside unit, do not forget to change your filters
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Garage Door - </Text> Check for any loose parts
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Electrical Panel - </Text> Look for tripped breakes (if any, make note and call an electrician)
              </Text>

            </ScrollView>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="second">
          <ScrollView
            style={styles.quoteContainer} >

              <View style={styles.buttonView}>
              <TouchableOpacity onPress={this._goToFirstTab} >
                <EvilIcons
                  name="arrow-left"
                  size={16}
                  style={styles.button}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._goToThirdTab} >
                  <EvilIcons
                    name="arrow-right"
                    size={16}
                    style={styles.button}
                  />
                  </TouchableOpacity>
                </View>

                <Text style={styles.getStartedText}>
                  <Text style={styles.itemText}>Caulking - </Text> Inspect doors and windows for cracked or missing caulking
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Roofing/Gutters/Downspouts/Drains - </Text> Clean leaves and other debris
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Electrical outlets - </Text> Make sure you are not overloading outlets
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Tile grout - </Text> Inspect the grout lines of your tiles
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Fire system/smoke alarms - </Text> Make sure you have properly working smoke detectors
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Out buildings/sheds - </Text> Inspect for damage
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Fencing - </Text> Replace broken fence panels
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Siding - </Text> Inspect for damaged siding and have it replaced
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Windows - </Text> Inspect for leaky or broken windows, make sure your windows open and close smoothly
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Attic - </Text> Make sure your attic ventilation is not impeded
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Foundation - </Text> Inspect for movement, cracks and/or rotting lumber
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Balconies/porches/decks - </Text> Inspect for rotting lumber and/or damage
                </Text>
            </ScrollView>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="third">
            <ScrollView style={styles.quoteContainer}>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this._goToSecondTab}>
                <EvilIcons
                  name="arrow-left"
                  size={16}
                  style={styles.button}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._goToFourthTab}>
                  <EvilIcons
                    name="arrow-right"
                    size={16}
                    style={styles.button}
                  />
                </TouchableOpacity>
                </View>
                <Text style={styles.getStartedText}>
                  <Text style={styles.itemAlertText}>June starts Hurricane Season</Text>
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Heating/Cooling System - </Text> Review your service; clean up debris from around your outside unit, do not forget to change your filters
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Garage Door - </Text> Check for any loose parts
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Electrical Panel - </Text> Look for tripped breakes (if any, make note and call an electrician)
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Water Heater - </Text> Inspect safety valve and drain tank
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Septic Tank - </Text> Inspect tank level
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Plumbing fixtures/connections - </Text> Check for leaks or signs of plumbing failure
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Shutter/Storm Doors - </Text> Inspect for damage and repair damaged shutters/doors
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Fireplace/Chimney - </Text> Clean and service
                  {"\n"}{"\n"}
                  <Text style={styles.itemText}>Weather Stripping - </Text> Check for cracks and air leaks
                </Text>


            </ScrollView>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="fourth">
            <ScrollView style={styles.quoteContainer}>
            <TouchableOpacity onPress={this._goToThirdTab}>
              <EvilIcons
                name="arrow-left"
                size={16}
                style={styles.button}
              />

            </TouchableOpacity>
              <Text style={styles.getStartedText}>
                <Text style={styles.itemText}>Caulking - </Text> Inspect doors and windows for cracked or missing caulking
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Roofing/Gutters/Downspouts/Drains - </Text> Clean leaves and other debris
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Electrical outlets - </Text> Make sure you are not overloading outlets
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Tile grout - </Text> Inspect the grout lines of your tiles
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Fire system/smoke alarms - </Text> Make sure you have properly working smoke detectors
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Siding - </Text> Inspect for damaged siding and have it replaced
                {"\n"}{"\n"}
                <Text style={styles.itemText}>Windows - </Text> Inspect for leaky or broken windows, make sure your windows open and close smoothly
              </Text>

            </ScrollView>
          </SlidingTabNavigationItem>
        </SlidingTabNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  getStartedText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'justify',
  },
  itemText:{
    fontSize: 17,
    textAlign: 'left',
    fontWeight:'bold',
  },
  itemAlertText:{
    fontSize: 17,
    textAlign: 'left',
    fontWeight:'bold',
    color: '#c33636'
  },
  tabLabel: {
    margin: 8,
    fontSize: 13,
    color: '#fff',
  },

  tabIndicator: {
    backgroundColor: '#FFEB3B',
  },

  quoteContainer: {
    flex: 1,
    padding: 24,
  },

  quoteMarks: {
    alignSelf: 'flex-start',
    color: '#E91E63',
    fontSize: 36,
    left: -8,
    bottom: -42,
    marginTop: -64,
  },

  quoteText: {
    color: '#222',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    margin: 8,
  },

  quoteAuthor: {
    color: '#888',
    fontSize: 12,
    fontStyle: 'italic',
  },

  button: {
    margin: 16,
    color: '#0084FF',
  },

  buttonView:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
