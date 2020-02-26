import React from "react";
import Layouts from "./comps/layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import { connect } from "react-redux";
import { getUser } from "./store/selectors";

function App(props) {

  let isAuthenticated = props.user.id;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Layouts.NoNavLayout><Login /></Layouts.NoNavLayout>
        </Route>
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
        <PrivateRoute exact path="/" authStatus={isAuthenticated} >
          <Redirect to="/overview" />
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
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(App);
