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

class GamesPage extends React.Component {
  renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        {/* <TouchableOpacity
          style={[styles.containerStyle, {backgroundColor: item.bg_color}]}
          onPress={() =>
            this.setState({isModalVisible: true, RewardsId: item.id})
          }>
          <View style={styles.battelcontainer}>
            <Image
              source={{
                uri: 'http://services.larsa.io/files/file/' + item.image,
              }}
              style={{
                height: 60 * theme.consts.BW,
                width: 60 * theme.consts.BW,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25 * theme.consts.BW,
            }}>
            <Text style={{color: '#fff', fontSize: 16 * theme.consts.BW}}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
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
              color: '#8DC965',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            LIST OF GAMES
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20 * theme.consts.BW,
          }}>
          <Text
            style={{
              fontSize: 14 * theme.consts.BW,
              textAlign: 'center',
              color: '#808080',
            }}>
            Select from one of the below categories,
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 14 * theme.consts.BW,
              textAlign: 'center',
              color: '#808080',
            }}>
            and pick the reward
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

export default withNavigation(GamesPage);

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
    justifyContent: 'center',
    margin: 20 * theme.consts.BW,
    width: 175 * theme.consts.BW,
    height: 140 * theme.consts.BW,
    // backgroundColor: '#d9c755',
  },
  battelcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60 * theme.consts.BW,
    width: 60 * theme.consts.BW,
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
