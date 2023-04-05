import React from "react";
import { useAuth } from "../store/AuthenticationProvider";
import { Navigate } from "react-router";
import baseUrl from "../consts/RouteBaseUrl";

const PrivateRoute = (props) => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return props.children;
  }

  return <Navigate to={baseUrl.signIn} />;
};

export default PrivateRoute;
