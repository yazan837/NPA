import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import theme from '../theme';
import {withNavigation} from 'react-navigation';
import reactotron from 'reactotron-react-native';

class Players extends React.Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() => this.setState({RewardsId: item.id})}>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            width: 250 * theme.consts.BW,
          }}>
          <Text
            style={{
              color: '#23353D',
              fontSize: 20 * theme.consts.BW,
              fontWeight: 'bold',
            }}>
            name: {item.first_name}
          </Text>
          <Text style={{color: '#23353D', fontSize: 20 * theme.consts.BW}}>
            position: {item.position}
          </Text>
          <Text style={{color: '#23353D', fontSize: 20 * theme.consts.BW}}>
            height: {item.height_feet}
          </Text>
          <Text style={{color: '#23353D', fontSize: 20 * theme.consts.BW}}>
            weight: {item.weight_pounds}
          </Text>
          <Text style={{color: '#23353D', fontSize: 20 * theme.consts.BW}}>
            team: {item.team.full_name}
          </Text>
        </View>
        <View style={styles.battelcontainer}>
          <Image
            source={require('../../assets/images/basketplayer.jpg')}
            style={{
              height: 70 * theme.consts.BW,
              width: 70 * theme.consts.BW,
              borderRadius: 25,
            }}
            resizeMode="center"
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {data} = this.props;

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}

export default withNavigation(Players);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#808080',
  },
  image: {
    height: 30 * theme.consts.BW,
    tintColor: '#fff',
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20 * theme.consts.BW,
    width: '90%',
    height: 150 * theme.consts.BW,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 25,
    padding: 10,
  },
  battelcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75 * theme.consts.BW,
    width: 75 * theme.consts.BW,
  },
  text: {
    fontSize: 20,
    color: '#808080',
  },

  containerStyle2: {
    borderWidth: 0.5 * theme.consts.BW,
    borderRadius: 2 * theme.consts.BW,
    borderColor: '#8CC6FF',

    marginTop: 10 * theme.consts.BW,
    flexDirection: 'row',
    width: 380 * theme.consts.BW,
    flex: 1,
    justifyContent: 'space-between',
    padding: 10 * theme.consts.BW,
  },

  filterborder: {
    flexDirection: 'row',
    borderRadius: 25 * theme.consts.BW,
    backgroundColor: '#3a91e7',
    width: 80 * theme.consts.BW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterimage: {
    height: 15 * theme.consts.BW,
    width: 15 * theme.consts.BW,
  },
  rowfilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#107ae3',
    width: 400 * theme.consts.BW,
    height: 40 * theme.consts.BW,
    padding: 10 * theme.consts.BW,
    margin: 10 * theme.consts.BW,
    borderRadius: 25 * theme.consts.BW,
  },
  rowfilterList: {
    backgroundColor: '#107ae3',
    alignSelf: 'center',
    width: 405 * theme.consts.BW,
    height: 120 * theme.consts.BW,
    borderRadius: 25 * theme.consts.BW,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#107AE3',
    width: 125 * theme.consts.BW,
    height: 50 * theme.consts.BW,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {height: 40 * theme.consts.BW, width: 40 * theme.consts.BW},
});
