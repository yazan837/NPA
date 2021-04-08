import React, {Component} from 'react';

import {withNavigation} from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import theme from '../theme';

class Drawyer extends Component {
  render() {
    return (
      <>
        <SafeAreaView
          style={{flex: 1, backgroundColor: theme.colors.backgroundColor}}>
          <Text>Drawer</Text>
        </SafeAreaView>
      </>
    );
  }
}
const DrawyerComponent = withNavigation(Drawyer);

export default DrawyerComponent;
