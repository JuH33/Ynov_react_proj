import { FETCH_USER, DROP_USER_ASYNC, CREATE_USER } from '../actions/userActions';
import { takeLatest, takeEvery } from 'redux-saga/effects';
import { dropUserAsync, userXhr, createUserAsync } from './userMiddleware';
import { ADD_DEST_ROUTE_ASYNC } from '../actions/routeActions';
import { GET_DESCRIPTION } from '../actions/map/descriptionActions';
import { ADD_GRADE } from '../actions/map/gradeActions';
import { fetchRoute } from './destMiddleware';
import { getMarkerDescription, addGrade } from './markerMiddleware';

/** *******************************
 *  SAGAS TAKERS
 */

export function *sagas() {
  yield takeLatest(FETCH_USER, userXhr);
  yield takeLatest(CREATE_USER, createUserAsync);
  yield takeEvery(DROP_USER_ASYNC, dropUserAsync);
  yield takeLatest(ADD_DEST_ROUTE_ASYNC, fetchRoute);
  yield takeLatest(GET_DESCRIPTION, getMarkerDescription);
  yield takeLatest(ADD_GRADE, addGrade);
}
