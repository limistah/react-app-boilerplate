import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelector } from "./../../../store/selectors/index";

const AuthenticatedContainer = ({ component: Component, ...rest }) => (
  <Route
    {...rest} // Pass the rest of the props to this route
    render={props =>
      rest.isAuthenticated ? ( // If this is authenticated
        <Component {...props} /> // Render the component with props
      ) : (
        // Redirect to the login page if isAuthenticated is false
        <Redirect to={`/login?redirect=${props.location.pathname}`} />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    ...authSelector(state)
  };
};

export default connect(mapStateToProps)(AuthenticatedContainer);
