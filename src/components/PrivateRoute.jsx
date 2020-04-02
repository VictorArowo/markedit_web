import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, history, ...props }) => {
  return (
    <Route
      {...props}
      render={matchProps =>
        localStorage.getItem("token") ? (
          <Component {...matchProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
