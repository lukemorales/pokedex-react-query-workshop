import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import axios from 'axios';

import * as actions from './actions';

function* getPokemonsRequest({
  payload,
}: ActionType<typeof actions.getPokemonsRequest>) {
  try {
    const { url } = payload;

    const { data } = yield call(axios.get, url);

    yield put(actions.getPokemonsSuccess(data));
  } catch (err) {
    yield put(actions.getPokemonsFailure());
  }
}

export default all([
  takeLatest(getType(actions.getPokemonsRequest), getPokemonsRequest),
]);
