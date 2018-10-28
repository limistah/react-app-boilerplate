import { combineReducers } from "redux-immutable";

import app from "./app";
import auth from "./auth";

export default combineReducers({ app, auth });
