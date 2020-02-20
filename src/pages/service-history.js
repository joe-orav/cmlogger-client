import DeleteModal from "../comps/delete-modal";
import NoDataComponent from "../comps/no-data-comp";
import AddServiceRecordForm from "../comps/add-service-form";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getExpandedServiceHistory, getCars } from "../store/selectors";
import { modifyServiceHistory } from "../store/actions/service-history-actons";

const ServiceRecord = ({ index, historyItem, selectForEdit, selectForDeletion }) => {
    return (
        <div className="row border-bottom">
            <div className="col">
                <div className="service-record-row" data-toggle="collapse" data-target={`#servicedata${index}`}>
                    <div className="col-12 col-sm"><p><span className="sr-header-label-inline">Date: </span>{historyItem.dateString}</p></div>
                    <div className="col-12 col-sm"><p><span className="sr-header-label-inline">Car: </span>{historyItem.car.fullname}</p></div>
                    <div className="col-12 col-sm"><p><span className="sr-header-label-inline">Service(s): </span>{historyItem.services.map(s => s.sname).join(", ")}</p></div>
                </div>
                <div id={`servicedata${index}`} className="row collapse">
                    <div className="col">
                        <div className="service-record-data">
                            <div className="col-md-4 text-center">
                                <p><span className="font-weight-bold">Location: </span>{historyItem.location.name}</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <p><span className="font-weight-bold">Address: </span>{`${historyItem.location.address}, ${historyItem.location.city}, ${historyItem.location.state}, ${historyItem.location.zip_code}`}</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <p><span className="font-weight-bold">Total Cost of Service: </span>{"$" + historyItem.cost}</p>
                            </div>
                            <div className="col-md-12 text-center">
                                <p><span className="font-weight-bold">Notes: </span>{historyItem.notes ? historyItem.notes : "N/A"}</p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button type="button" className="edit-pen-icon" title="Edit" data-toggle="modal" data-target="#add-service-modal" onClick={() => selectForEdit(index)} />
                                <button type="button" className="trash-icon" title="Delete" data-toggle="modal" data-target="#delete-modal" onClick={() => selectForDeletion(index)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddServiceRecordModal = ({ title, children }) => {
    return (
        <div id="add-service-modal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title h5">{title}</p>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="submit" form="add-service-form" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ServiceHistory({ cars, serviceHistory, modifyServiceHistory }) {

    const [editItemIndex, setEditItemIndex] = useState(-1);
    const [deleteItemIndex, setDeleteItemIndex] = useState(-1);

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
                    {(serviceHistory.length && serviceHistory.map((sItem, i) =>
                        <ServiceRecord key={sItem.id} index={i} historyItem={sItem} selectForEdit={(index) => setEditItemIndex(index)} selectForDeletion={(index) => setDeleteItemIndex(index)} />)
                    ) ||
                        <NoDataComponent title="No records found" noDivider noIcon>Click "Add Service Record" to add a new service record</NoDataComponent>
                    }
                </div>
            </div>
            <AddServiceRecordModal title={(editItemIndex === -1 ? "Add" : "Edit") + " Service Record"}>
                <AddServiceRecordForm key={editItemIndex === -1 ? Date.now() : editItemIndex} {...serviceHistory[editItemIndex]} modifyServiceHistory={modifyServiceHistory} />
            </AddServiceRecordModal>
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
        serviceHistory: getExpandedServiceHistory(state)
    }
}

const mapDispatchToProps = { modifyServiceHistory }

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHistory);
