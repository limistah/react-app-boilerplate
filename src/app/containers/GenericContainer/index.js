import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { authSelector } from "./../../../store/selectors/index";

const GenericContainer = ({ component: Component, ...rest }) => {
  return (
    <Route
      // Pass the rest of the props to the route
      {...rest}
      // Renders the component directly
      component={Component}
    />
  );
};

const mapStateToProps = state => {
  return {
    ...authSelector(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(GenericContainer);
