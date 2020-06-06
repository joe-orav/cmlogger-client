import DeleteModal from "../comps/delete-modal";
import NotFound from "../components/notFound";
import AddServiceRecordModal from "../comps/service-record-modal";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getExpandedServiceHistory, getCars, getServiceHistoryDataLoading } from "../store/selectors";
import { modifyServiceHistory } from "../store/actions/service-history-actions";
import LoadingIcon from "../components/loading";
import setPageTitle from "./pagetitle";
import RecordItem from "../components/recordItem";

function ServiceHistory({ cars, serviceHistory, modifyServiceHistory, serviceHistoryDataLoading }) {

    const [editItemIndex, setEditItemIndex] = useState(-1);
    const [deleteItemIndex, setDeleteItemIndex] = useState(-1);

    useEffect(() => {
        setPageTitle("Service History");
    })

    return (
        <div id="service-history-pg" className="row mt-3 pb-4">
            <div className="col-12 mb-4">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="h3">Service History</p>
                    </div>
                    <div className="add-service-btn-ctr">
                        <button type="button" className="add-service-btn" data-toggle="modal" data-target="#add-service-modal" onClick={() => setEditItemIndex(-1)} disabled={!cars.length}>
                            Add Service Record
                </button>
                    </div>
                </div>
            </div>
            <div className="col-12 mb-4">
                <div className="container-fluid">
                    <div className="service-record-header">
                        <div className="col"><p className="font-weight-bold">Date of Service</p></div>
                        <div className="col"><p className="font-weight-bold">Car</p></div>
                        <div className="col"><p className="font-weight-bold">Service Provided</p></div>
                    </div>
                    <div className="row border-bottom d-sm-none d-block"></div>
                    {
                        (serviceHistoryDataLoading && <LoadingIcon />) ||
                        (serviceHistory.length && serviceHistory.map((sItem, i) =>
                            <RecordItem key={sItem.id} index={i} record={sItem} />)
                        ) ||
                        <NotFound title="No records found" noDivider noIcon>Click "Add Service Record" to add a new service record</NotFound>
                    }
                </div>
            </div>
            <AddServiceRecordModal 
                title={(editItemIndex === -1 ? "Add" : "Edit") + " Service Record"} 
                keyValue={editItemIndex === -1 ? Date.now() : editItemIndex} 
                {...serviceHistory[editItemIndex]} 
                modifyServiceHistory={modifyServiceHistory} 
            />
            <DeleteModal
                title="Delete Service Record"
                message="Are you sure you want to delete this service record?"
                deleteAction={() => {
                    setDeleteItemIndex(-1);
                    modifyServiceHistory({ id: serviceHistory[deleteItemIndex].id });
                }} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cars: getCars(state),
        serviceHistory: getExpandedServiceHistory(state),
        serviceHistoryDataLoading: getServiceHistoryDataLoading(state)
    }
}

const mapDispatchToProps = { modifyServiceHistory }

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHistory);
