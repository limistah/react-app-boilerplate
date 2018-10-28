import types from "../actionTypes";

export const _t = types.auth;

export const updateAuthenticated = flag => {
  return {
    payload: flag,
    type: _t.IS_AUTHENTICATED
  };
};

export default {
  updateAuthenticated
};
