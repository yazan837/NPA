import actions from '../../actions/index';
import {combineReducers} from 'redux';

const {FETCH_TEAMS, COMPLETE_FETCH_TEAMS} = actions;

const initState = false;

//for teams
const isFethingTeams = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TEAMS: {
      return true;
    }
    case COMPLETE_FETCH_TEAMS: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const teams = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_TEAMS:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isFethingTeams,
  teams,
});
