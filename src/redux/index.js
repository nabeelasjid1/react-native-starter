import { fork, all } from "redux-saga/effects";
import usersWatcher from "./users/sagas";
import businessWatcher from './business/sagas'
import authWatcher from './auth/sagas'
export default function* rootSaga() {
  yield all([
    fork(usersWatcher),
    fork(businessWatcher),
    fork(authWatcher),
  ]);
}
