import React from "react";
import { getUserId } from "../store/selectors";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../components/landing-sections/header";
import Feature from "../components/landing-sections/feature";
import Demo from "../components/landing-sections/demo";
import Footer from "../components/footer";
import CookieConsent from "../components/landing-sections/cookie";

function LandingPage() {
  const userId = useSelector(getUserId);

  return userId !== null ? (
    <Redirect to="/dashboard" />
  ) : (
    <>
      <Header />
      <Feature />
      <Demo />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default LandingPage;
