import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

class DrawerNavigationMenu extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  render() {
    return (
      <DrawerNavigation
        id='main'
        initialItem='home'
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id='home'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
          renderIcon={isSelected => this._renderIcon('home', isSelected)}>
        >
          <StackNavigation
            id='home'
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='galleries'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Galleries', isSelected)}
          renderIcon={isSelected => this._renderIcon('images', isSelected)}>
        >
          <StackNavigation
            id='galleries'
            initialRoute={Router.getRoute('galleries')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='helpfulhints'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home Helth Tips', isSelected)}
          renderIcon={isSelected => this._renderIcon('images', isSelected)}>
        >
          <StackNavigation
            id='helpfulhints'
            initialRoute={Router.getRoute('helpfulhints')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='links'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Links', isSelected)}
          renderIcon={isSelected => this._renderIcon('book', isSelected)}>
        >
          <StackNavigation
            id='links'
            initialRoute={Router.getRoute('links')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='contactus'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('contactus', isSelected)}
          renderIcon={isSelected => this._renderIcon('paper-plane-o', isSelected)}>
        >
          <StackNavigation
            id='contactus'
            initialRoute={Router.getRoute('contactus')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='settings'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Settings', isSelected)}
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
        >
          <StackNavigation
            id='settings'
            initialRoute={Router.getRoute('settings')}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      <Image
        source={require('../assets/images/EPSawBlade_small.jpg')}
        style={styles.welcomeImage}
      />
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: 'blue'
  },

  titleText: {
    fontWeight: 'bold'
  },

  selectedTitleText: {
    color: 'white'
  }
});
