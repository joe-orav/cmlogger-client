import React, { useEffect } from "react";
import Layouts from "./comps/layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import { connect } from "react-redux";
import { getUser } from "./store/selectors";
import FetchActions from "./store/fetch-actions";
import AlertContainer from "./comps/alerts";

function App({ user, fetchCarData, fetchLocationData, fetchServicesData, fetchServiceHistoryData }) {

  let isAuthenticated = user.id;

  useEffect(() => {
    fetchCarData()
    fetchLocationData()
    fetchServicesData()
    fetchServiceHistoryData()
  }, [fetchCarData, fetchLocationData, fetchServicesData, fetchServiceHistoryData])

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
      <AlertContainer />
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

const mapDispatchToProps = { ...FetchActions }

export default connect(mapStateToProps, mapDispatchToProps)(App);
