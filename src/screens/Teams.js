import React from 'react';
import {StatusBar, View, Text, SafeAreaView} from 'react-native';
import Page from '../components/Page';
import theme from '../theme';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TeamsPage from '../components/TeamsPage';
import actions from '../redux/actions';
import reactotron from 'reactotron-react-native';
const {fetchTeams} = actions;
class Teams extends React.Component {
  componentDidMount() {
    this.props.fetchTeams();
  }
  render() {
    return (
      <Page isLoading={this.props.isFethingTeam}>
        <TeamsPage data={this.props.teams} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isFethingTeam: state.team.isFethingTeams,
  teams: state.team.teams,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchTeams}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
