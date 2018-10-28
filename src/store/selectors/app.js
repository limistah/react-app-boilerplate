// import { createSelector } from "reselect";
const authSelector = state => state.get("app");

export default state => {
  return {
    locale: authSelector(state).get("locale")
  };
};
