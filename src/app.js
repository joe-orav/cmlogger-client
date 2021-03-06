import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/login"
import LandingPage from "./pages/landing"
import Dashboard from "./pages/dashboard"
import Cars from "./pages/cars"
import ServiceHistory from "./pages/service-history"
import Settings from "./pages/settings"
import AddCar from "./pages/add-car"
import AddRecord from "./pages/add-record"
import NotFoundPage from "./pages/404"
import PrivacyPolicy from "./pages/privacy-policy"
import Terms from "./pages/terms"
import Contact from "./pages/contact"
import About from "./pages/about"
import AlertContainer from "./components/alerts"
import PrivateRoute from "./components/privateRoute"
import ProfilePageLayout from "./components/layouts/profilePageLayout"
import ProfilePageNoLayout from "./components/layouts/profilePageNoLayout"
import SitePageLayout from "./components/layouts/sitePageLayout"
import ScrollToTop from "./components/scrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route
          path="/privacy-policy"
          render={() => (
            <SitePageLayout>
              <PrivacyPolicy />
            </SitePageLayout>
          )}
        />
        <Route
          path="/terms"
          render={() => (
            <SitePageLayout>
              <Terms />
            </SitePageLayout>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <SitePageLayout>
              <Contact />
            </SitePageLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <ProfilePageNoLayout>
              <Login />
            </ProfilePageNoLayout>
          )}
        />
        <PrivateRoute
          path="/cars"
          render={
            <ProfilePageLayout>
              <Cars />
            </ProfilePageLayout>
          }
        />
        <PrivateRoute
          path="/service-history"
          render={
            <ProfilePageLayout>
              <ServiceHistory />
            </ProfilePageLayout>
          }
        />
        <PrivateRoute
          path="/settings"
          render={
            <ProfilePageLayout>
              <Settings />
            </ProfilePageLayout>
          }
        />
        <PrivateRoute
          path="/about"
          render={
            <ProfilePageLayout>
              <About />
            </ProfilePageLayout>
          }
        />
        <PrivateRoute
          path="/dashboard"
          render={
            <ProfilePageLayout>
              <Dashboard />
            </ProfilePageLayout>
          }
        />
        <PrivateRoute
          path="/add-car"
          render={
            <ProfilePageNoLayout>
              <AddCar />
            </ProfilePageNoLayout>
          }
        />
        <PrivateRoute
          path="/add-record"
          render={
            <ProfilePageNoLayout>
              <AddRecord />
            </ProfilePageNoLayout>
          }
        />
        <Route
          path="/"
          render={() => (
            <ProfilePageNoLayout>
              <LandingPage />
            </ProfilePageNoLayout>
          )}
        />
        <PrivateRoute
          path="*"
          render={
            <ProfilePageNoLayout>
              <NotFoundPage />
            </ProfilePageNoLayout>
          }
        />
      </Switch>
      <AlertContainer />
    </Router>
  )
}

export default App
