import React from "react";
import Layouts from "./layouts";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Overview from "./pages/overview";

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
          <Layouts.NavLayout user={{}}><ServiceHistory /></Layouts.NavLayout>
        </Route>
        <Route path="/settings">
          <Layouts.NavLayout user={{}}><Settings /></Layouts.NavLayout>
        </Route>
      </Switch>
    </Router>
  );
}

// function Overview() {
//   return <p>Overview</p>
// }

function Cars() {
  return <p>Cars</p>
}

function ServiceHistory() {
  return <p>Service History</p>
}

function Settings() {
  return <p>Settings</p>
}


export default App;
