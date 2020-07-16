import { call, takeLatest, put } from "redux-saga/effects";
import { setUserSession, parseJwt } from "../Utils/Common";
import { REQUEST_SIGN_IN } from "../ActionsTypes/authActionsTypes";
import { signIn } from "../Api/authApi";
import { receiveSignIn, loginError, serverError } from "../Actions/authActions";

export function* workerSingIn(action) {
  try {
    const response = yield call(signIn, action.payload);
    if (response.code === 200) {
      setUserSession(response.auth_token);
      const { uid } = parseJwt(response.auth_token);
      yield put(receiveSignIn({ response, uid }));
    } else {
      yield put(loginError(response.message));
    }
  } catch (e) {
    yield put(serverError("Sorry, something went wrong."));
  }
}

export function* watcherSingIn() {
  yield takeLatest(REQUEST_SIGN_IN, workerSingIn);
}
