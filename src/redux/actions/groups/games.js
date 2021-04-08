import {createAction} from '../creators';

export default {
  ...createAction('FETCH_GAMES', 'data'),
  ...createAction('COMPLETE_FETCH_GAMES', 'data'),
};
