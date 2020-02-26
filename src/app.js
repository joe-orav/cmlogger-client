import React, { useEffect } from "react";
import Layouts from "./comps/layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import { connect } from "react-redux";
import FetchActions from "./store/fetch-actions";
import AlertContainer from "./comps/alerts";
import PrivateRoute from "./comps/private-route";

function App({ fetchCarData, fetchLocationData, fetchServicesData, fetchServiceHistoryData }) {
  useEffect(() => {
    fetchCarData()
    fetchLocationData()
    fetchServicesData()
    fetchServiceHistoryData()
  }, [fetchCarData, fetchLocationData, fetchServicesData, fetchServiceHistoryData])

  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <Layouts.NoNavLayout><Login /></Layouts.NoNavLayout>} />
        <PrivateRoute path="/overview" render={<Layouts.NavLayout><Overview /></Layouts.NavLayout>} />
        <PrivateRoute path="/cars" render={<Layouts.NavLayout><Cars /></Layouts.NavLayout>} />
        <PrivateRoute path="/service-history" render={<Layouts.NavLayout><ServiceHistory /></Layouts.NavLayout>} />
        <PrivateRoute path="/settings" render={<Layouts.NavLayout><Settings /></Layouts.NavLayout>} />
        <PrivateRoute path="/overview" render={<Layouts.NavLayout><Overview /></Layouts.NavLayout>} />
        <PrivateRoute exact path="/" render={<Redirect to="/overview" />} />
      </Switch>
      <AlertContainer />
    </Router>
  );
}

const mapDispatchToProps = { ...FetchActions }

export default connect(null, mapDispatchToProps)(App);
