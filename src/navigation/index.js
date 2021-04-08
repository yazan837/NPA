import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BottomTabIcon from '../components/BottomTabIcon';
import BottomTabLabel from '../components/BottomTabLabel';
// screens
import Home from '../screens/Home';
import Games from '../screens/Games';
import Teams from '../screens/Teams';

// // side menu drawer
import Drawyer from '../components/Drawyer';

import {StyleSheet} from 'react-native';
import theme from '../theme';
import NavigatorService from '../services/navigator';
import Header from '../components/Header';
import reactotron from '../redux/Reactotron';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <BottomTabLabel style={[styles.label, {color: tintColor}]}>
            {'Home'}
          </BottomTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <BottomTabIcon
            tintColor={tintColor}
            style={[styles.icon, {color: tintColor}]}
            // source={require('../../assets/images/dashbord.png')}
          />
        ),
      },
    },
    Teams: {
      screen: Teams,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <BottomTabLabel style={[styles.label, {color: tintColor}]}>
            {'Teams'}
          </BottomTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <BottomTabIcon
            tintColor={tintColor}
            style={[styles.icon, {color: tintColor}]}
            // source={require('../../assets/images/Teams.png')}
          />
        ),
      },
    },
    Games: {
      screen: Games,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <BottomTabLabel style={[styles.label, {color: tintColor}]}>
            {'Games'}
          </BottomTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <BottomTabIcon
            tintColor={tintColor}
            style={[styles.icon, {color: tintColor}]}
            // source={require('../../assets/images/Games.png')}
          />
        ),
      },
    },
  },

  {
    navigationOptions: ({navigation}) => {
      if (navigation.state.index === 0) {
        return {
          header: () => <Header title={'Home'} MenuIcon />,
          animationEnabled: true,
        };
      } else if (navigation.state.index === 1) {
        return {
          header: () => <Header title={'Teams'} />,
          animationEnabled: true,
        };
      } else if (navigation.state.index === 2) {
        return {
          header: () => <Header title={'Games'} />,
          animationEnabled: true,
        };
      }
    },
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#004987',
      inactiveBackgroundColor: '#107ae3',
      inactiveTintColor: '#f2f2f2',
      style: {
        height: 75 * theme.consts.BW,
        alignItems: 'center',
      },
    },
  },
);

const AppNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
  },
  Home: {
    screen: Home,
  },
  Games: {
    screen: Games,
    navigationOptions: {
      header: () => <Header title={'Games'} />,
    },
  },
  Teams: {
    screen: Teams,
    navigationOptions: {
      header: () => <Header title={'Teams'} />,
    },
  },
});

const DrawyerNavigator = createDrawerNavigator({
  AppNavigator: {screen: AppNavigator},
});

const appNavigator = createSwitchNavigator({
  App: {screen: DrawyerNavigator},
});

const Navigator = createAppContainer(appNavigator);

const makeRef = navigatorRef => NavigatorService.setContainer(navigatorRef);
export default () => <Navigator ref={makeRef} />;

const styles = StyleSheet.create({
  icon: {height: 20, width: 20, tintColor: theme.colors.primaryColor},
  label: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 7,
  },
});
