import React from "react";
import Layouts from "./layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Overview from "./pages/overview";
import Cars from "./pages/cars";
import ServiceHistory from "./pages/service-history";
import Settings from "./pages/settings";

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/overview" />
        </Route>
        <Route path="/overview">
          <Layouts.NavLayout user={{}}><Overview serviceHistory={{}} /></Layouts.NavLayout>
        </Route>
        <Route path="/cars">
          <Layouts.NavLayout user={{}}><Cars /></Layouts.NavLayout>
        </Route>
        <Route path="/service-history">
          <Layouts.NavLayout user={{}}><ServiceHistory cars={{}} serviceHistory={{}} /></Layouts.NavLayout>
        </Route>
        <Route path="/settings">
          <Layouts.NavLayout user={{}}><Settings orphanedServices={[]} orphanedLocations={[]} /></Layouts.NavLayout>
        </Route>
        <Route path="/login">
          <Layouts.NoNavLayout user={{}}><Login /></Layouts.NoNavLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
