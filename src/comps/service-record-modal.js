import React from "react";
import AddServiceRecordForm from "./add-service-form";

const AddServiceRecordModal = ({ title, keyValue, ...props }) => {
    return (
        <div id="add-service-modal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title h5">{title}</p>
                    </div>
                    <div className="modal-body">
                        <AddServiceRecordForm key={keyValue} {...props} />
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

export default AddServiceRecordModal;