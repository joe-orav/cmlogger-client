import React, { useState, useEffect } from "react";
import flatpickr from "flatpickr";
import $ from "jquery";
import { connect } from "react-redux";
import { getCars, getLocations, getServices, getUserId } from "../store/selectors";

const usStates = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const DateField = ({ defaultValue }) => {
    useEffect(() => {
        flatpickr("#date-input", {
            defaultDate: defaultValue || new Date(),
            altInput: true,
            altFormat: "M d, Y",
            dateFormat: "Y-m-d",
            appendTo: document.querySelector(".include-flatpickr")
        });
    })

    return (
        <div className="form-group col-6">
            <label htmlFor="date-input">Date of Service</label>
            <input id="date-input" name="date" type="text" className="form-control" />
        </div>
    )
}

const CarServicedField = (props) => {
    return (
        <div className="form-group col-6">
            <label htmlFor="car-select">Car Serviced</label>
            <select id="car-select" name="car_id" className="custom-select" defaultValue={props.id} required>
                {!props.carSelectDisabled && <>
                    <option></option>
                    {props.availableCars.map(car => <option key={car.id} value={car.id}>{car.fullname}</option>)}
                </>}
                {props.carSelectDisabled && <option value={props.id}>{props.fullname}</option>}
            </select>
            <div className="invalid-feedback">Please select a car</div>
        </div>
    )
}

const SavedLocationsField = ({ savedLocations, selectedLocationId, onSelect }) => {
    return (
        <div className="form-group col-12">
            <label htmlFor="location-select">Saved Locations</label>
            <select id="location-select" name="location_id" className="custom-select" defaultValue={selectedLocationId}
                onChange={(e) => onSelect(e.target.value)}>
                <option value={-1}>--- Enter a new location ---</option>
                {savedLocations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
        </div>
    )
}

const LocationField = ({ defaultValue, selectedLocationId }) => {
    return (
        <div className="form-group col-12">
            <label htmlFor="location-input">Location Name</label>
            <input id="location-input" type="text" name="location_name" className="form-control" defaultValue={defaultValue} disabled={selectedLocationId !== -1} required />
            <div className="invalid-feedback">Please enter the location name</div>
        </div>
    )
}

const AddressFormSection = ({ address, city, state, zipCode, selectedLocationId }) => {
    return (
        <div className="form-group col-12">
            <div className="form-row">
                <div className="form-group col-12">
                    <label htmlFor="address-input">Address</label>
                    <input id="address-input" type="text" name="address" className="form-control" defaultValue={address} disabled={selectedLocationId !== -1} required />
                    <div className="invalid-feedback">Please enter the location address</div>
                </div>
                <div className="col-5">
                    <label htmlFor="city-input">City</label>
                    <input id="city-input" type="text" name="city" className="form-control" defaultValue={city} disabled={selectedLocationId !== -1} required />
                    <div className="invalid-feedback">Please enter a city</div>
                </div>
                <div className="col-4">
                    <label htmlFor="state-input">State</label>
                    <select id="state-select" name="state" className="custom-select" defaultValue={state} disabled={selectedLocationId !== -1} required>
                        <option></option>
                        {usStates.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                    <div className="invalid-feedback">Please select a state</div>
                </div>
                <div className="col-3">
                    <label htmlFor="zip-input">ZIP Code</label>
                    <input id="zip-input" type="text" name="zip_code" className="form-control" defaultValue={zipCode} disabled={selectedLocationId !== -1} required />
                    <div className="invalid-feedback">Please enter a zip code</div>
                </div>
            </div>
        </div>
    )
}

const LocationsSection = (props) => {
    const [selectedLocationId, setSelectedLocationId] = useState(props.id || -1);
    const [currentLocation, setCurrentLocation] =
        useState({ name: props.name, address: props.address, city: props.city, state: props.state, zipCode: props.zip_code })

    function handleLocationChange(id) {
        setSelectedLocationId(id);

        let matchedLocation = {};

        if (id !== -1) {
            let filteredLocation = props.savedLocations.filter(loc => loc.id === parseInt(id))[0];

            matchedLocation = {
                name: filteredLocation.name,
                address: filteredLocation.address,
                city: filteredLocation.city,
                state: filteredLocation.state,
                zipCode: filteredLocation.zip_code
            }
        }

        setCurrentLocation(matchedLocation);
    }

    return (
        <>
            <SavedLocationsField
                savedLocations={props.savedLocations}
                selectedLocationId={selectedLocationId}
                onSelect={(i) => handleLocationChange(i)} />
            <React.Fragment key={selectedLocationId}>
                <LocationField
                    defaultValue={currentLocation.name}
                    selectedLocationId={selectedLocationId} />
                <AddressFormSection
                    address={currentLocation.address}
                    city={currentLocation.city}
                    state={currentLocation.state}
                    zipCode={currentLocation.zipCode}
                    selectedLocationId={selectedLocationId} />
            </React.Fragment>
        </>
    )
}

const ServiceField = (props) => {
    return (
        <div className="input-group mb-2">
            <input type="text" defaultValue={props.defaultValue} name="service" list="service-list" className="form-control" required />
            <div className="input-group-append">
                {props.removable && <button className="service-minus-btn" type="button" onClick={() => props.remove(props.index)} />}
                {props.last && <button className="service-plus-btn" type="button" onClick={props.add} />}
            </div>
            <div className="invalid-feedback">Please enter or select a service</div>
        </div>
    )
}

const ServicesFieldList = ({ defaultServices, availableServices }) => {

    function setServiceFieldKeyState() {
        if (defaultServices) {
            return defaultServices.map((service, i) => { return { key: `${i}${Date.now()}`, defaultValue: service.sname } })
        } else {
            return [{ key: `0${Date.now()}` }]
        }
    }

    const [serviceFieldKeys, setServiceFieldKeys] = useState(setServiceFieldKeyState());

    function handleServiceKeyAddtion() {
        setServiceFieldKeys(skList => [...skList, { key: `${skList.length}${Date.now()}` }])
    }

    function handleServiceKeyRemoval(index) {
        let modifiedServFieldKeysList = serviceFieldKeys.filter((fieldItem, i) => i !== index);
        setServiceFieldKeys(modifiedServFieldKeysList);
    }

    return (
        <div className="form-group col-12">
            <label>Services</label>
            {serviceFieldKeys.map((fieldItem, i) => {
                return <ServiceField
                    key={fieldItem.key}
                    defaultValue={fieldItem.defaultValue}
                    index={i} removable={i !== 0} last={i === serviceFieldKeys.length - 1}
                    add={handleServiceKeyAddtion} remove={(index) => handleServiceKeyRemoval(index)} />
            })}
            <datalist id="service-list">
                {availableServices.map(serviceItem => <option key={serviceItem.id} value={serviceItem.sname}></option>)}
            </datalist>
        </div>
    )
}

const CostField = ({ defaultValue }) => {
    const [inputValue, setInputValue] = useState(defaultValue || "");

    function handleInputValidation(e) {
        let value = e.target.value.trim();

        if (isNaN(value) || value < 0) {
            value = inputValue;
        }

        setInputValue(value);
    }

    return (
        <div className="form-group col-12">
            <label htmlFor="cost-input">Total Cost of Service</label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="dollar-symbol">$</span>
                </div>
                <input id="cost-input" type="text" name="cost" className="form-control" placeholder="0.00" value={inputValue} onChange={handleInputValidation} required />
                <div className="invalid-feedback">Please enter the cost</div>
            </div>
        </div>
    )
}

const AddServiceRecordForm = (props) => {

    const [wasValidated, setWasValidated] = useState(false);

    function handleFormSubmission(ev) {
        ev.preventDefault();
        const form = ev.target;

        let formValidity = form.checkValidity();

        setWasValidated(!formValidity);

        if (formValidity) {
            const formData = new FormData(form);

            const formObj = { id: props.id ? props.id : -1, user_id: props.user_id ? props.user_id : props.user_id_from_state };

            for (let [key, value] of formData) {
                let fieldEntry = value;

                if (key === "cost") {
                    fieldEntry = parseFloat(fieldEntry);
                } else if (!isNaN(fieldEntry) && fieldEntry.length !== 0 && key !== "zip_code") {
                    fieldEntry = parseInt(fieldEntry);
                }

                if (key === "service") {
                    let serviceItem;
                    let objectKey;
                    let filteredServiceList = props.servicesList.filter((sItem) => sItem.sname === fieldEntry);

                    if (filteredServiceList.length === 0) {
                        serviceItem = { id: -1, sname: fieldEntry };
                        objectKey = "new_service";
                    } else {
                        serviceItem = { id: filteredServiceList[0].id, sname: fieldEntry }
                        objectKey = "service";
                    }

                    if (!(objectKey in formObj)) {
                        formObj[objectKey] = [serviceItem]
                    } else {
                        formObj[objectKey].push(serviceItem)
                    }

                } else {
                    formObj[key] = fieldEntry;
                }

            }

            props.modifyServiceHistory(formObj);

            $('#add-service-modal').modal('hide')
        }
    }

    return (
        <form id="add-service-form" className={wasValidated ? "was-validated" : ""} onSubmit={handleFormSubmission} noValidate>
            <div className="form-row">
                <DateField defaultValue={props.parsedDate} />
                <CarServicedField {...props.car} availableCars={props.carsList} carSelectDisabled={props.carSelectDisabled} />
                <LocationsSection {...props.location} savedLocations={props.locationsList} />
                <ServicesFieldList defaultServices={props.services} availableServices={props.servicesList} />
                <CostField defaultValue={props.cost} />
                <div className="form-group col-12">
                    <label htmlFor="notes-input">Notes</label>
                    <textarea id="notes-input" name="notes" rows="3" className="form-control" defaultValue={props.notes}></textarea>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        carsList: getCars(state),
        locationsList: getLocations(state),
        servicesList: getServices(state),
        user_id_from_state: getUserId(state)
    }
}

export default connect(mapStateToProps)(AddServiceRecordForm);