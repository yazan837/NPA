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

class TeamsPage extends React.Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() => this.setState({RewardsId: item.id})}>
        <View style={styles.battelcontainer}>
          <Image
            source={require('../../assets/images/basketball.jpg')}
            style={{
              height: 60 * theme.consts.BW,
              width: 60 * theme.consts.BW,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            height: '90%',
            justifyContent: 'space-between',
            width: 300 * theme.consts.BW,
          }}>
          <Text style={{color: 'red', fontSize: 20 * theme.consts.BW}}>
            city: {item.city}
          </Text>
          <Text style={{color: 'red', fontSize: 20 * theme.consts.BW}}>
            conference :{item.conference}
          </Text>
          <Text style={{color: 'red', fontSize: 20 * theme.consts.BW}}>
            full name: {item.full_name}
          </Text>
          <Text style={{color: 'red', fontSize: 20 * theme.consts.BW}}>
            name :{item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {data} = this.props;

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15 * theme.consts.BW,
          }}>
          <Text
            style={{
              fontSize: 22 * theme.consts.BW,
              color: '#312F2F',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            LIST OF TEAMS
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}

export default withNavigation(TeamsPage);

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
    height: 120 * theme.consts.BW,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey',
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
