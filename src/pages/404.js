import React from "react";
import { Link } from "react-router-dom";
import mapIcon from "../img/map.png";

function NotFoundPage() {
    return (
        <div className="row h-100 align-items-center">
            <div className="col-12">
                <div className="not-found-page-img-ctr">
                    <img src={mapIcon} className="img-fluid mx-auto d-block h-100" alt="Map" />
                </div>
                <div className="text-center">
                    <h1 className="h3 font-weight-bold">GPS SIGNAL LOST</h1>
                    <p className="h4">You'll need to <Link to="/" className="default-link">reroute</Link>!</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;