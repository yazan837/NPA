import {combineReducers} from 'redux';

import team from './groups/teams';
import game from './groups/games';
const appReducers = combineReducers({
  team,
  game,
});

export default (state, action) => {
  return appReducers(state, action);
};
