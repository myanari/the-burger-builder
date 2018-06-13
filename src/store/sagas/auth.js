import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as actionTypes from "../actions/actionTypes";
import * as actions from '../actions';
import {logout} from "../actions/auth";

export function* logoutSaga() {
	yield localStorage.removeItem('token');
	yield localStorage.removeItem('userId');
	yield localStorage.removeItem('expirationTime');
	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
}