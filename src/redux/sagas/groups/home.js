import {put, takeLatest, call, select} from 'redux-saga/effects';
import {fetchTeams, fetchGames, fetchPlayers} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
const {
  completeFetchTeams,
  FETCH_TEAMS,
  completeFetchGames,
  FETCH_GAMES,
  completeFetchPlayers,
  FETCH_PLAYERS,
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
//functions for players
function* performFetchPlayers({data}) {
  try {
    const result = yield call(fetchPlayers, data);

    reactotron.log('result', result);
    if (result.networkSuccess) {
      yield put(completeFetchPlayers({data: result.data}));
    } else yield put(completeFetchPlayers({data: []}));
  } catch {
    yield put(completeFetchPlayers({data: []}));
    return;
  }
}

export function* watchFetchPlayers() {
  yield takeLatest(FETCH_PLAYERS, performFetchPlayers);
}
