import React from "react";
import { useState } from "react";
import DeleteModal from "./delete-modal";
import CarFormModal from "./car-form-modal";
import plusSymbol from "../img/plus.svg";
import sedanImg from "../img/sedan.svg";
import { connect } from "react-redux";
import { modifyCarData } from "../store/actions/car-actions";
import { getCars, getUserId, getCarsDataLoading } from "../store/selectors";
import LoadingIcon from "../comps/loading";

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

const CarCard = ({carIndex, car, readOnly, selectForEdit, selectForDeletion}) => {
    return (
        <div className="col mt-3 mt-lg-3">
            <div className="car-card card h-100">
                <img src={sedanImg} className="card-img-top" alt={car.type} />
                <div className="card-body bg-primary text-light">
                    <p className="card-title h5">{car.fullname}</p>
                    <p className="card-text">{`VIN: ${car.vin}`}</p>
                </div>
                {!readOnly && <div className="car-card-footer">
                    <a href="/#" data-toggle="modal" data-target="#car-form-modal" className="default-link"
                        onClick={() => selectForEdit(carIndex)}>Edit</a>
                    <a href="/#" className="default-link" data-toggle="modal" data-target="#delete-modal"
                        onClick={() => selectForDeletion(carIndex)}>Delete</a>
                </div>}
            </div>
        </div>
    )
}

const CarGrid = (props) => {
    const [editItemIndex, setEditItemIndex] = useState(-1);
    const [deleteItemIndex, setDeleteItemIndex] = useState(-1);
    
    return (
        props.carsDataLoading ? <LoadingIcon /> :
        <div className="container-fluid">
            <div className="car-grid-items">
                {props.cars.map((c, i) =>
                    <CarCard key={c.id} carIndex={i} car={c} readOnly={props.readOnly} selectForEdit={(index) => setEditItemIndex(index)} selectForDeletion={(index) => setDeleteItemIndex(index)} />
                )}
                {!props.readOnly && <AddCar selectForEdit={() => setEditItemIndex(-1)} />}
            </div>
            {!props.readOnly &&
                <CarFormModal
                    keyValue = {editItemIndex === -1 ? Date.now() : props.cars[editItemIndex].id}
                    formValues={editItemIndex === -1 ? {id: editItemIndex} : props.cars[editItemIndex]}
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
                        props.modifyCarData({id: props.cars[deleteItemIndex].id});
                    }}
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

const mapDispatchToProps = { modifyCarData }

export default connect(mapStateToProps, mapDispatchToProps)(CarGrid);