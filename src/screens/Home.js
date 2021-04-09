import React from 'react';

import Page from '../components/Page';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayersPage from '../components/PlayersPage';
import actions from '../redux/actions';
import reactotron from 'reactotron-react-native';

const {fetchPlayers} = actions;
class Players extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render() {
    return (
      <Page isLoading={this.props.isFethingPlayers}>
        <PlayersPage data={this.props.players} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isFethingPlayers: state.players.isFethingPlayers,
  players: state.players.players,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchPlayers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Players);
