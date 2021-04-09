import actions from '../../actions/index';
import {combineReducers} from 'redux';

const {FETCH_PLAYERS, COMPLETE_FETCH_PLAYERS} = actions;

const initState = false;

//for players
const isFethingPlayers = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS: {
      return true;
    }
    case COMPLETE_FETCH_PLAYERS: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const players = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_PLAYERS:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isFethingPlayers,
  players,
});
