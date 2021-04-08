import actions from '../../actions/index';
import {combineReducers} from 'redux';

const {FETCH_GAMES, COMPLETE_FETCH_GAMES} = actions;

const initState = false;

//for GAMES
const isFethingGames = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES: {
      return true;
    }
    case COMPLETE_FETCH_GAMES: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const games = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_GAMES:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isFethingGames,
  games,
});
