import React from "react";
import { Provider } from "react-redux";
import Modal from "react-modal";
import { store } from "./Store/store";

import { ConnectedNavMenu } from "./Containers/ConnectedNavMenu";

Modal.setAppElement("#root");
function App() {
  return (
    <Provider store={store}>
      <ConnectedNavMenu />
    </Provider>
  );
}

export default App;
