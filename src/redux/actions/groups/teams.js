import {createAction} from '../creators';

export default {
  ...createAction('FETCH_TEAMS', 'data'),
  ...createAction('COMPLETE_FETCH_TEAMS', 'data'),
};
