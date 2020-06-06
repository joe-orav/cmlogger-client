import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/selectors";

function PrivateRoute1({ user, path, render, ...rest }) {
    return (
        <Route {...rest} path={path} render={() => user.id ? render : <Redirect to="/login" />} />
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
}

export default connect(mapStateToProps)(PrivateRoute1);