import React, { useEffect } from 'react';
import logo from "../img/logo.png"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";

const NoNavLayout = (props) => {
    return (
        <div className="container-fluid h-100">
            {props.children}
        </div>
    )
}

const ProfileDropdown = (props) => {
    return (
        <div className="profile-dropdown profile-info dropdown">
            <a className="profile-icon-ctr res dropdown-toggle" href="/" role="button" id="profile-icon-dropdown-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="profile-icon" src={props.imgSrc} alt="Profile Icon" />
            </a>
            <div className="dropdown-menu" aria-labelledby="profile-icon-dropdown-link">
                <h5 className="dropdown-header">{props.name}</h5>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout">Sign out</a>
            </div>
        </div>
    )
}

const ProfileSection = (props) => {
    return (
        <div className="profile-full-display profile-info">
            <div className="profile-icon-ctr" title={props.name}>
                <img className="profile-icon" src={props.imgSrc} alt="Profile Icon" />
            </div>
            <div className="profile-links">
                <Link to="/settings" className="profile-link" title="Settings"><i className="fas fa-cog"></i></Link>
                <a className="profile-link" href="/logout" title="Sign out"><i className="fas fa-sign-out-alt"></i></a>
            </div>
        </div>
    )
}

const NavLayout = ({ user, children }) => {
    useEffect(() => {
        document.getElementById("cm-navbar-toggler").classList.remove("show");
    })
    
    return (
        <div className="d-flex min-vh-100">
            <nav className="cm-navbar">
                <Link to="/" className="navbar-logo mr-0"><img className="img-fluid" src={logo} alt="CMLogger Logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#cm-navbar-toggler" aria-controls="cm-navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="cm-navbar-toggler">
                    <div className="cl-nav-items">
                        <Link to="/overview" className="nav-item nav-link"><i class="fas fa-home"></i> Overview</Link>
                        <Link to="/cars" className="nav-item nav-link"><i class="fas fa-car"></i> My Cars</Link>
                        <Link to="/service-history" className="nav-item nav-link"><i class="fas fa-wrench"></i> Service History</Link>
                    </div>
                </div>
            </nav>
            <ProfileDropdown name={user.name} imgSrc={user.default_pic} />
            <ProfileSection name={user.name} imgSrc={user.default_pic} />
            <div className="content-ctr">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
}

export default { NoNavLayout, NavLayout: connect(mapStateToProps)(NavLayout) }