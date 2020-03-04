import React, { useEffect } from "react";
import logo from "../img/logo.png";
import googleLogo from "../img/google-logo.svg"
import facebookLogo from "../img/facebook-logo.svg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";
import setPageTitle from "./pagetitle";

function Login(props) {

    useEffect(() => {
        setPageTitle("Login");
    })

    return props.user.id != null ? <Redirect to="/overview" /> :
        <div className="login-page">
            <div className="col d-flex justify-content-center">
                <div className="login-card">
                    <img src={logo} className="login-card-img" alt="CMLogger - The Car Maintenance Log" />
                    <div className="card-body py-0">
                        <h5 className="login-card-subtitle pb-3">YOUR CAR MAINTENANCE LOG</h5>
                        <a href="/auth/google" id="google-login-btn" className="login-btn">
                            <span className="logo-ctr"><img className="img-fluid" src={googleLogo} alt="Google" /></span> Continue with Google
                        </a>
                        <a href="/auth/fb" id="fb-login-btn" className="login-btn">
                            <span className="logo-ctr"><img className="img-fluid" src={facebookLogo} alt="Facebook" /></span> Continue with Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
}

export default connect(mapStateToProps)(Login);