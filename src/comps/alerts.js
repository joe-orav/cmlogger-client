import React from "react";
import { connect } from "react-redux";
import { getAlerts } from "../store/selectors";

const AppAlert = ({ alert }) => {

    let alertType;

    switch (alert.type) {
        case "success":
            alertType = "alert-success"
            break;
        case "danger":
            alertType = "alert-danger"
            break;
        default:
            alertType = "alert-primary"
    }

    return (
        <div id="cm-app-alert" className={`app-alert ${alertType}`} role="alert">
            {alert.message}
        </div>
    )
}


const AlertContainer = ({ alerts }) => {
    return (
        <div className="alert-ctr">
            {alerts.map((alert) => <AppAlert key={alert.id} alert={alert} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        alerts: getAlerts(state)
    }
}

export default connect(mapStateToProps)(AlertContainer)