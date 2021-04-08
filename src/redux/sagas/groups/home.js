import {put, takeLatest, call, select} from 'redux-saga/effects';
import {fetchTeams} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
const {completeFetchTeam, FETCH_TEAMS} = actions;

//functions for teams
function* performFetchTeams({data}) {
  try {
    const result = yield call(fetchTeams, data);

    reactotron.log('result', result);
    if (result.networkSuccess) {
      yield put(completeFetchTeam({data: result}));
    } else yield put(completeFetchTeam({data: []}));
  } catch {
    yield put(completeFetchTeam({data: []}));
    return;
  }
}

export function* watchFetchTeams() {
  yield takeLatest(FETCH_TEAMS, performFetchTeams);
}
