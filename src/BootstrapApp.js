import React from "react";

import { Frontload } from "react-frontload";

import createStore from "./store";
import { Provider } from "react-redux";

import "./assets/css/global.css";
import App from "./app/App";

// Initializes the store
const { store, history } = createStore();

export default () => (
  <Provider store={store}>
    <Frontload noServerRender={true}>
      <App history={history} />
    </Frontload>
  </Provider>
);
