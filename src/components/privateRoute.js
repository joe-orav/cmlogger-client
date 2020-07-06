import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserId } from "../store/selectors";

function PrivateRoute({ path, render, ...rest }) {
  const userId = useSelector(getUserId);
  return (
    <Route
      {...rest}
      path={path}
      render={() => (userId != null ? render : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
