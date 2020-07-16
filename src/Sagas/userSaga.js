import { call, takeLatest, put } from "redux-saga/effects";
import { getUsers, getUserById, getUserUpdate } from "../Api/userApi";
import {
  REQUEST_GET_USERS,
  REQUEST_USER_BY_ID,
  REQUEST_UPDATE_PROFILE,
} from "../ActionsTypes/userActionsTypes";
import { serverError } from "../Actions/authActions";
import {
  receiveGetUsers,
  receiveUserById,
  receiveUpdateProfile,
} from "../Actions/userActions";
import { getToken, parseJwt } from "../Utils/Common";

export function* workerRequestGetUsers() {
  try {
    const response = yield call(getUsers);
    if (response) {
      yield put(receiveGetUsers(response));
    }
  } catch (e) {
    yield put(serverError("Sorry, something went wrong."));
  }
}

export function* watcherRequestGetUsers() {
  yield takeLatest(REQUEST_GET_USERS, workerRequestGetUsers);
}

export function* workerRequestUserById() {
  try {
    const { uid } = parseJwt(getToken());
    const userByIdResponse = yield call(getUserById, uid);
    yield put(receiveUserById(userByIdResponse));
  } catch (e) {
    console.log(e);
  }
}

export function* watcherRequestUserById() {
  yield takeLatest(REQUEST_USER_BY_ID, workerRequestUserById);
}

export function* workerRequestUpdateProfile(action) {
  try {
    const { uid } = parseJwt(getToken());
    const userUpdateResponse = yield call(getUserUpdate, uid, action.payload);
    if (userUpdateResponse.id) {
      yield put(receiveUpdateProfile(true));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watcherRequestUpdateProfile() {
  yield takeLatest(REQUEST_UPDATE_PROFILE, workerRequestUpdateProfile);
}
