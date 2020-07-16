import { call, takeLatest, put } from "redux-saga/effects";
import { createNewSpace, getAllSpace } from "../Api/spaceApi";
import {
  receiveNewSpace,
  receiveGetSpace,
  requestGetSpace,
} from "../Actions/spaceActions";
import {
  REQUEST_NEW_SPACE,
  REQUEST_GET_SPACE,
} from "../ActionsTypes/spaceActionsTypes";

export function* workerNewSpace(action) {
  try {
    const response = yield call(createNewSpace, action.payload);

    if (response) {
      yield put(receiveNewSpace({ response }));
    }
    yield put(requestGetSpace());
  } catch (e) {
    console.log(e);
  }
}

export function* watcherNewSpace() {
  yield takeLatest(REQUEST_NEW_SPACE, workerNewSpace);
}

export function* workerRequestGetSpaces() {
  try {
    const response = yield call(getAllSpace);
    if (response) {
      yield put(receiveGetSpace(response));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watcherRequestGetSpaces() {
  yield takeLatest(REQUEST_GET_SPACE, workerRequestGetSpaces);
}
