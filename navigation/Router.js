import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import Galleries from '../screens/Galleries';
import LinksScreen from '../screens/LinksScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import HelpfulHintsScreen from '../screens/HelpfulHintsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  galleries: () => Galleries,
  links: () => LinksScreen,
  contactus: () => ContactUsScreen,
  helpfulhints: () => HelpfulHintsScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
