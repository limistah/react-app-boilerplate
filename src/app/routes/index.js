import React from "react";
import { Switch } from "react-router-dom";

import { GenericContainer } from "./../containers";

import { HomeScreen, NotFoundScreen } from "./routeDefinitions";

export default props => (
  <Switch>
    <GenericContainer exact path="/" component={HomeScreen} />
    <GenericContainer component={NotFoundScreen} />
  </Switch>
);
