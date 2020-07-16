import { all, fork } from "redux-saga/effects";
import { watcherSingIn } from "./authSaga";
import {
  watcherRequestGetUsers,
  watcherRequestUserById,
  watcherRequestUpdateProfile,
} from "./userSaga";

import { watcherNewSpace, watcherRequestGetSpaces } from "./spaceSaga";

export function* rootSaga() {
  yield all([
    fork(watcherSingIn),
    fork(watcherRequestGetUsers),
    fork(watcherRequestUserById),
    fork(watcherRequestUpdateProfile),
    fork(watcherNewSpace),
    fork(watcherRequestGetSpaces),
  ]);
}
