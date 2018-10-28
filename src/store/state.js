import { fromJS } from "immutable";
import { isServer } from "../factory/utils";
// const store = createStore();

let oldState = {};

if (!isServer && window && "localStorage" in window) {
  const storage = window.localStorage;
  oldState = storage.getItem(process.env.REACT_APP_LOCALSTORAGE_NAMESPACE);
  oldState = JSON.parse(oldState);
}

// Makes sure that app is not always initialized
oldState = {
  ...oldState,
  app: {
    locale: oldState ? oldState.app.locale : "en",
    initialized: false
  }
};

export default fromJS(oldState);
