import React from "react";
import Layouts from "./comps/layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import { connect } from "react-redux";
import { getUserId } from "./store/selectors";

function App({ userId }) {

  let isAuthenticated = userId != null;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Layouts.NoNavLayout><Login /></Layouts.NoNavLayout>
        </Route>
        <PrivateRoute exact path="/" authStatus={isAuthenticated} >
          <Redirect to="/overview" />
        </PrivateRoute>
        <PrivateRoute path="/overview" authStatus={isAuthenticated} >
          <Layouts.NavLayout><Overview /></Layouts.NavLayout>
        </PrivateRoute>
        <PrivateRoute path="/cars" authStatus={isAuthenticated} >
          <Layouts.NavLayout><Cars /></Layouts.NavLayout>
        </PrivateRoute>
        <PrivateRoute path="/service-history" authStatus={isAuthenticated} >
          <Layouts.NavLayout><ServiceHistory /></Layouts.NavLayout>
        </PrivateRoute>
        <PrivateRoute path="/settings" authStatus={isAuthenticated} >
          <Layouts.NavLayout><Settings /></Layouts.NavLayout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ path, children, authStatus, ...rest }) => {
  return (
    <Route {...rest} path={path}>
      {authStatus ? children : <Redirect to="/login" />}
    </Route>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state)
  }
}

export default connect(mapStateToProps)(App);
