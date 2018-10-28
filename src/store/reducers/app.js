import types from "../actionTypes";
import state from "../state";

const appTypes = types.app;

const initialState = state.get("app");
console.log(state.get("app"));
export default function app(state = initialState, action) {
  switch (action.type) {
    case appTypes.APP_INITIALIZED:
      return state.setIn(["initialized"], action.payload);
    case appTypes.UPDATE_APP_LOCALE: // Language file to use!!!
      return state.setIn(["locale"], action.payload);
    default:
      return state;
  }
}
