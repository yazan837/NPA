import {put, takeLatest, call, select} from 'redux-saga/effects';
import {fetchTeams, fetchGames} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
const {
  completeFetchTeams,
  FETCH_TEAMS,
  completeFetchGames,
  FETCH_GAMES,
} = actions;

//functions for teams
function* performFetchTeams({data}) {
  try {
    const result = yield call(fetchTeams, data);

    reactotron.log('result', result);
    if (result.networkSuccess) {
      yield put(completeFetchTeams({data: result.data}));
    } else yield put(completeFetchTeams({data: []}));
  } catch {
    yield put(completeFetchTeams({data: []}));
    return;
  }
}

export function* watchFetchTeams() {
  yield takeLatest(FETCH_TEAMS, performFetchTeams);
}
//functions for games
function* performFetchGames({data}) {
  try {
    const result = yield call(fetchGames, data);

    reactotron.log('result', result);
    if (result.networkSuccess) {
      yield put(completeFetchGames({data: result.data}));
    } else yield put(completeFetchGames({data: []}));
  } catch {
    yield put(completeFetchGames({data: []}));
    return;
  }
}

export function* watchFetchGames() {
  yield takeLatest(FETCH_GAMES, performFetchGames);
}
