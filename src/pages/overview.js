import React, { useEffect } from "react";
import CarGrid from "../comps/car-grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getExpandedServiceHistory, getCarCount, getCarsDataLoading, getServiceHistoryDataLoading } from "../store/selectors";
import NoDataComponent from "../comps/no-data-comp";
import LoadingIcon from "../comps/loading";
import setPageTitle from "./pagetitle";

const ServiceHistoryTable = ({ history }) => {

    function serviceHistoryList() {
        let itemRows = [];

        let limit = history.length < 5 ? history.length : 5;

        for (let i = 0; i < limit; i++) {
            itemRows.push(
                <tr key={history[i].id}>
                    <td>{history[i].dateString}</td>
                    <td>{history[i].car.fullname}</td>
                    <td>{history[i].services.map(s => s.sname).join(", ")}</td>
                </tr>
            )
        }

        return itemRows
    }

    return (
        <table className="table table-striped table-bordered mt-4 text-center">
            <thead>
                <tr>
                    <th>Date of Service</th>
                    <th>Car</th>
                    <th>Services Provided</th>
                </tr>
            </thead>
            <tbody>{serviceHistoryList()}</tbody>
        </table>
    )
}

function Overview({ carCount, serviceHistory, carsDataLoading, serviceHistoryDataLoading }) {
    useEffect(() => {
        setPageTitle("Overview");
    })

    return (
        <div className="row mt-3 pb-4">
            <div className="col-12 mb-4">
                <p className="h3">Overview</p>
            </div>
            <div className="col-12 mb-5">
                <p className="h4">My Cars</p>
                {
                    (carsDataLoading && <LoadingIcon />) ||
                    (carCount && <CarGrid readOnly />) ||
                    <NoDataComponent title="No Cars Found" noIcon>
                        Go to <Link to="/cars" className="default-link">My Cars</Link> to add a new car
                    </NoDataComponent>
                }
            </div>
            <div className="col-12">
                <p className="h4">Service History</p>
                {
                    (serviceHistoryDataLoading && <LoadingIcon />) ||
                    (serviceHistory.length && <ServiceHistoryTable history={serviceHistory} />) ||
                    <NoDataComponent title="No Service Records Found" noIcon>
                        Go to <Link to="/service-history" className="default-link">Service History</Link> to add a new record
                    </NoDataComponent>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carCount: getCarCount(state),
        serviceHistory: getExpandedServiceHistory(state),
        carsDataLoading: getCarsDataLoading(state),
        serviceHistoryDataLoading: getServiceHistoryDataLoading(state)
    }
}

export default connect(mapStateToProps)(Overview);