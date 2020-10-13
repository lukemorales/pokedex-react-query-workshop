import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import api from '../../../services/api';

export function* getPokemonsRequest({
  payload,
}: ActionType<typeof actions.getPokemonsRequest>) {
  try {
    const { offset } = payload;

    const { data } = yield call(api.get, '', { params: { offset, limit: 20 } });

    yield put(actions.getPokemonsSuccess(data));
  } catch (err) {
    yield put(actions.getPokemonsFailure());
  }
}

export default all([
  takeLatest(getType(actions.getPokemonsRequest), getPokemonsRequest),
]);
