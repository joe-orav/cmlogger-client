import React from "react";
import { useState } from "react";
import DeleteModal from "./delete-modal";
import CarFormModal from "./car-form-modal";
import plusSymbol from "../img/plus.svg";
import { connect } from "react-redux";
import { modifyCarData } from "../store/actions/car-actions";
import { getCars, getUserId, getCarsDataLoading } from "../store/selectors";
import LoadingIcon from "../components/loading";
import CarItem from "../components/carItem";
import AddServiceRecordModal from "./service-record-modal";
import { modifyServiceHistory } from "../store/actions/service-history-actions";

const AddCar = (props) => {
    return (
        <div className="col mt-3 mt-lg-3">
            <div className="add-car-card" data-toggle="modal" data-target="#car-form-modal" onClick={() => props.selectForEdit(-1)}>
                <p className="h3 text-primary mt-3">Add New Car</p>
                <div className="plus-img-ctr mb-3">
                    <img className="img-fluid" src={plusSymbol} alt="Add New Car" />
                </div>
            </div>
        </div>
    )
}

const CarGrid = (props) => {
    const [editItemIndex, setEditItemIndex] = useState(-1);
    const [deleteItemIndex, setDeleteItemIndex] = useState(-1);
    const [addRecordIndex, setAddRecordIndex] = useState(-1);
    const [serviceFormKey, setServiceFormKey] = useState(Date.now());

    return (
        props.carsDataLoading ? <LoadingIcon /> :
            <div className="container-fluid">
                <div className="car-grid-items">
                    {props.cars.map((c, i) =>
                        <CarItem key={c.id} carIndex={i} car={c} />
                    )}
                    {!props.readOnly && <AddCar selectForEdit={() => setEditItemIndex(-1)} />}
                </div>
                {!props.readOnly &&
                    <CarFormModal
                        keyValue={editItemIndex === -1 ? Date.now() : props.cars[editItemIndex].id}
                        formValues={editItemIndex === -1 ? { id: editItemIndex } : props.cars[editItemIndex]}
                        user_id={props.user_id}
                        title={editItemIndex === -1 ? "Add New Car" : ("Edit Car: " + props.cars[editItemIndex].fullname)}
                        modifyCarData={(data) => props.modifyCarData(data)}
                    />
                }
                {!props.readOnly &&
                    <DeleteModal
                        title={deleteItemIndex === -1 ? "Delete Car" : "Delete Car: " + props.cars[deleteItemIndex].fullname}
                        message="Are you sure you want to delete this car? All records for this car will also be deleted!"
                        deleteAction={() => {
                            setDeleteItemIndex(-1);
                            setEditItemIndex(-1);
                            props.modifyCarData({ id: props.cars[deleteItemIndex].id });
                        }}
                    />
                }
                {!props.readOnly && 
                    <AddServiceRecordModal 
                        title={"Add Service Record"}
                        keyValue={serviceFormKey}
                        car={props.cars[addRecordIndex]}
                        modifyServiceHistory={props.modifyServiceHistory}
                        carSelectDisabled 
                    />
                }
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cars: getCars(state),
        user_id: getUserId(state),
        carsDataLoading: getCarsDataLoading(state)
    }
}

const mapDispatchToProps = { modifyCarData, modifyServiceHistory }

export default connect(mapStateToProps, mapDispatchToProps)(CarGrid);