import types from "../actionTypes";

export const _t = types.app;

export const setAppInitialized = flag => {
  return {
    payload: flag,
    type: _t.APP_INITIALIZED
  };
};

export const updateAppLocale = locale => {
  return {
    payload: locale,
    type: _t.UPDATE_APP_LOCALE
  };
};

export default {
  setAppInitialized,
  updateAppLocale
};
