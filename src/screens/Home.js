import React from 'react';
import {StatusBar, View, Text, SafeAreaView} from 'react-native';

import theme from '../theme';
import reacttotron from '../redux/Reactotron';
import Tabs from './Tabs';

class HomeScreen extends React.Component {
  getBarStyle = () => {
    return 'dark-content';
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle={this.getBarStyle()}
          backgroundColor={theme.colors.backgroundBarHome}
        />
        <View>
          <Tabs />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
