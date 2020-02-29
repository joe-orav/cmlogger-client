import React from "react";
import Layouts from "./comps/layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import NotFoundPage from "./pages/404";
import AlertContainer from "./comps/alerts";
import PrivateRoute from "./comps/private-route";

function App() {
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
        <PrivateRoute path="*" render={<Layouts.NoNavLayout><NotFoundPage /></Layouts.NoNavLayout>} />
      </Switch>
      <AlertContainer />
    </Router>
  );
}

export default App;
