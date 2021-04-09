import {combineReducers} from 'redux';

import team from './groups/teams';
import game from './groups/games';
import players from './groups/players';
const appReducers = combineReducers({
  team,
  game,
  players,
});

export default (state, action) => {
  return appReducers(state, action);
};
