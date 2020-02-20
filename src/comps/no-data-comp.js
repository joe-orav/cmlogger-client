import React from "react";

const NoDataComponent = (props) => (
    <div className="row">
        <div className="col">
            {props.noDivider || <hr />}
            {props.noIcon || <div className="error-img-ctr">
                <img src="/img/error-icon.png" className="img-fluid" alt="error-icon" />
            </div>}
            <div className="not-found-txt-ctr">
                <p className="no-service-found-text font-weight-bold text-uppercase">{props.title}</p>
                <p className="no-service-found-text">{props.children}</p>
            </div>
        </div>
    </div>
)

export default NoDataComponent;