import React from "react";

const DeleteModal = (props) => {
    return (
        <div id="delete-modal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title h5">{props.title}</p>
                    </div>
                    <div className="modal-body">
                        <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#delete-modal" onClick={props.deleteAction}>Delete</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;