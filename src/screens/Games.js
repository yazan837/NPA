import React from 'react';

import Page from '../components/Page';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GamesPage from '../components/GamesPage';
import actions from '../redux/actions';
import reactotron from 'reactotron-react-native';

const {fetchGames} = actions;
class Games extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <Page isLoading={this.props.isFethingGame}>
        <GamesPage data={this.props.game} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isFethingGame: state.game.isFethingGames,
  game: state.game.games,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchGames}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Games);
