import { createStore, applyMiddleware, compose } from "redux";
// We are using immutable js
import {
  connectRouter,
  routerMiddleware
} from "connected-react-router/immutable";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createBrowserHistory, createMemoryHistory } from "history";

import { isServer } from "./../factory/utils";

import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

// Reducers, actions and initial app state
import rootReducer from "./reducers";
import state from "./state";

function createHistory(url = "/") {
  // Create a history depending on the environment
  return isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();
}

function buildStoreEnhancers() {
  const enhancers = [];
  // Dev tools are helpful
  if (process.env.NODE_ENV === "development" && !isServer) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  return enhancers;
}

function composeEnhancers(enhancers, middleware) {
  return compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
}

function manipulateState() {
  // Do we have preloaded state available? Great, save it.
  const initialState = !isServer ? window.__PRELOADED_STATE__ : state;

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }
  return initialState;
}

// Exports store creator and history
export default (url = "/") => {
  // Create a history depending on the environment
  const history = createHistory(url);

  const enhancers = buildStoreEnhancers();

  const storageReducer = storage.reducer(rootReducer);
  const engine = createEngine(process.env.REACT_APP_LOCALSTORAGE_NAMESPACE);
  const storeMiddleware = storage.createMiddleware(engine);

  const middlewares = [
    thunk,
    routerMiddleware(history),
    storeMiddleware,
    logger
  ];
  const composedEnhancers = composeEnhancers(enhancers, middlewares);

  // Generates state for either server or browser
  let initialState = manipulateState();

  // Create the store
  const store = createStore(
    connectRouter(history)(storageReducer),
    initialState,
    composedEnhancers
  );

  return {
    store, // Actual store object with its details
    history // history, browser history || memory history
  };
};
