import types from "../actionTypes";
import { fromJS } from "immutable";

const authTypes = types.auth;

const initialState = fromJS({ isAuthenticated: false });

export default function app(state = initialState, action) {
  switch (action.type) {
    case authTypes.IS_AUTHENTICATED:
      return state.setIn(["isAuthenticated"], action.payload);
    default:
      return state;
  }
}
