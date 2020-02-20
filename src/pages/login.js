import React from "react";
import logo from "../img/logo.png";
import googleLogo from "../img/google-logo.svg"
import facebookLogo from "../img/facebook-logo.svg";

function Login() {
    return (
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
    )
}

export default Login;