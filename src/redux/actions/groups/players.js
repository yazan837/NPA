import {createAction} from '../creators';

export default {
  ...createAction('FETCH_PLAYERS', 'data'),
  ...createAction('COMPLETE_FETCH_PLAYERS', 'data'),
};
