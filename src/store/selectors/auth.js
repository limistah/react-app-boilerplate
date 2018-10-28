// import { createSelector } from "reselect";
const authSelector = state => state.get("auth");

export default state => {
  return {
    isAuthenticated: authSelector(state).get("isAuthenticated")
  };
};
