import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={matchProps =>
        !localStorage.getItem("token") ? (
          <Component {...matchProps} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default PrivateRoute;
