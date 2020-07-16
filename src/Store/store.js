import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../Reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "../Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const loadToken = () => {
  try {
    const token = sessionStorage.getItem("auth_token");
    if (token === null || token === undefined) {
      return "";
    }
    return token;
  } catch (e) {
    console.log(e);
    return "";
  }
};

const initialState = {
  authReducer: { token: loadToken() },
  userReducer: {},
  layoutReducer: {},
};

const saveToken = (token) => {
  try {
    sessionStorage.setItem("auth_token", token);
  } catch (e) {
    console.log(e);
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
store.subscribe(() => {
  saveToken(store.getState().authReducer.token);
});

sagaMiddleware.run(rootSaga);
