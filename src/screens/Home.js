import React from 'react';
import {StatusBar, View, Text, SafeAreaView} from 'react-native';

import theme from '../theme';
import reacttotron from '../redux/Reactotron';

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
