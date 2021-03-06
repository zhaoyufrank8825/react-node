import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../service/AuthService";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getToken() ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={{ pathname: "/content" }} />
        );
      }}
    ></Route>
  );
};

export default PublicRoute;
