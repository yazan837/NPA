import {combineReducers} from 'redux';

import team from './groups/teams';

const appReducers = combineReducers({
  team,
});

export default (state, action) => {
  return appReducers(state, action);
};
