import React from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelector } from "./../../../store/selectors/index";

const UnauthenticatedContainer = ({ component: Component, ...rest }) => {
  let query = queryString.parse(rest.location.search);

  return (
    <Route
      // Pass the rest of the props to the route
      {...rest}
      render={props =>
        !rest.isAuthenticated ? ( // isAuthenticated is false
          <Component {...props} /> // Render this component with the props
        ) : (
          // isAuthenticated is true
          // Redirect to the set redirect path in the query, else use the dashboard
          <Redirect to={query.redirect || "/dashboard"} />
        )
      }
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
)(UnauthenticatedContainer);
