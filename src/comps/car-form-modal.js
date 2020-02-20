import React from "react";
import $ from "jquery";
import { useState } from "react";

const YEAR_MAX = new Date().getFullYear(), YEAR_MIN = YEAR_MAX - 85;
const yearRange = Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (v, i) => YEAR_MAX - i);
const carTypes = { sedan: "Sedan", minivan: "Minivan", suv: "SUV", truck: "Truck", van: "Van" }

const CarFormModal = ({ keyValue, title, formValues, user_id, modifyCarData }) => {
    const [wasValidated, setWasValidated] = useState(false);


    function handleFormSubmission(ev) {

        ev.preventDefault();
        const form = ev.target;

        let formValidity = form.checkValidity();

        setWasValidated(!formValidity);

        if (formValidity) {
            const formData = new FormData(form);
            let formObj = { id: formValues.id, user_id: formValues.user_id ? formValues.user_id : user_id }

            for (let [key, value] of formData) {
                switch (key) {
                    case "type":
                        formObj[key] = value.toLowerCase();
                        break;
                    case "vin":
                        formObj[key] = value.length === 0 ? "Not Provided" : value;
                        break;
                    default:
                        formObj[key] = value;
                }
            }

            modifyCarData(formObj);
            $('#car-form-modal').modal('hide')
        }
    }

    return (
        <div id="car-form-modal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title h5">{title}</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="car-modal-form" key={keyValue} className={wasValidated ? "was-validated" : ""} onSubmit={handleFormSubmission} noValidate>
                            <div className="form-group">
                                <label htmlFor="type-select">Type</label>
                                <select id="type-select" name="type" className="custom-select" defaultValue={carTypes[formValues.type]}>
                                    {Object.keys(carTypes).map((k) =>
                                        <option key={k}>{carTypes[k]}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="year-select">Year</label>
                                <select id="year-select" name="car_year" className="custom-select" defaultValue={formValues.car_year}>
                                    {yearRange.map(y => <option key={y}>{y}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="make-input">Make</label>
                                <input name="make" id="make-input" type="text" className="form-control" defaultValue={formValues.make} required />
                                <div className="invalid-feedback">Please enter your car make</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="model-input">Model</label>
                                <input id="model-input" name="model" type="text" className="form-control" defaultValue={formValues.model} required />
                                <div className="invalid-feedback">Please enter your car model</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vin-input">VIN #</label>
                                <input id="vin-input" name="vin" type="text" className="form-control" defaultValue={formValues.vin === "Not Provided" ? "" : formValues.vin} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" form="car-modal-form" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default CarFormModal