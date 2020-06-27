import React from "react";
import { getUser } from "../store/selectors";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../components/landing-sections/header";
import Feature from "../components/landing-sections/feature";
import Demo from "../components/landing-sections/demo";
import Footer from "../components/landing-sections/footer";

function LandingPage({ user }) {
  return user.id !== null ? (
    <Redirect to="/dashboard" />
  ) : (
    <>
      <Header />
      <Feature />
      <Demo />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps)(LandingPage);
