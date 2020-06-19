import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";
import AddCar from "./pages/add-car";
import AddRecord from "./pages/add-record";
import NotFoundPage from "./pages/404";
import PrivacyPolicy from "./pages/privacy-policy";
import AlertContainer from "./comps/alerts";
import PrivateRoute from "./components/privateRoute";
import SiteLayout from "./components/layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <SiteLayout hideNavBar><Login /></SiteLayout>} />
        <PrivateRoute path="/cars" render={<SiteLayout><Cars /></SiteLayout>} />
        <PrivateRoute path="/service-history" render={<SiteLayout><ServiceHistory /></SiteLayout>} />
        <PrivateRoute path="/settings" render={<SiteLayout><Settings /></SiteLayout>} />
        <PrivateRoute path="/dashboard" render={<SiteLayout><Dashboard /></SiteLayout>} />
        <PrivateRoute path="/add-car" render={<SiteLayout hideNavBar><AddCar /></SiteLayout>} />
        <Route path="/privacy-policy" render={() => <SiteLayout hideNavBar><PrivacyPolicy /></SiteLayout>} />
        <PrivateRoute path="/add-record" render={<SiteLayout hideNavBar><AddRecord /></SiteLayout>} />
        <PrivateRoute exact path="/" render={<Redirect to="/dashboard" />} />
        <PrivateRoute path="*" render={<SiteLayout hideNavBar><NotFoundPage /></SiteLayout>} />
      </Switch>
      <AlertContainer />
    </Router>
  );
}

export default App;
