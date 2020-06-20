import React from "react";
import Form from "react-bootstrap/Form";
import { getLocations } from "../../store/selectors";
import { connect } from "react-redux";
import usStates from "../../utils/states";

const mapStateToProps = (state) => {
  return {
    locationsList: getLocations(state),
  };
};

export default connect(mapStateToProps)(
  ({ locationsList, values, setValues }) => {
    function handleLocationSelection(e) {
      e.preventDefault();
      let locationID = parseInt(e.target.value);
      let location;

      if (locationID > 0) {
        location = locationsList.filter((loc) => loc.id === locationID)[0];

        setValues.setLocName(location.name);
        setValues.setLocAddress(location.address);
        setValues.setLocCity(location.city);
        setValues.setLocState(location.state);
        setValues.setLocZIP(location.zip_code);
      } else {
        setValues.setLocName("");
        setValues.setLocAddress("");
        setValues.setLocCity("");
        setValues.setLocState("");
        setValues.setLocZIP("");
      }

      setValues.setSavedLocValue(locationID);
    }

    return (
      <>
        <Form.Group className="col-12" controlId="savedLocations">
          <Form.Label>Saved Locations</Form.Label>
          <Form.Control
            as="select"
            value={values.savedLocValue}
            onChange={handleLocationSelection}
          >
            <option value={-1}>--- Don't include location ---</option>
            <option value={0}>--- Enter a new location ---</option>
            {locationsList.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-12" controlId="location">
          <Form.Label>Location Name</Form.Label>
          <Form.Control
            type="text"
            value={values.locName}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocName(e.target.value)}
            required={values.savedLocValue === 0}
          />
          <Form.Control.Feedback type="invalid">
            Please enter the location name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-12" controlId="fullAddress">
          <Form.Row>
            <Form.Group className="col-12" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={values.locAddress}
                disabled={!!values.savedLocValue}
                onChange={(e) => setValues.setLocAddress(e.target.value)}
                required={values.savedLocValue === 0}
              />
              <Form.Control.Feedback type="invalid">
                Please enter the address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-5" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={values.locCity}
                disabled={!!values.savedLocValue}
                onChange={(e) => setValues.setLocCity(e.target.value)}
                required={values.savedLocValue === 0}
              />
              <Form.Control.Feedback type="invalid">
                Please enter the city
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                value={values.locState}
                disabled={!!values.savedLocValue}
                onChange={(e) => setValues.setLocState(e.target.value)}
                required={values.savedLocValue === 0}
              >
                {usStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select the state
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-4" controlId="zipCode">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                value={values.locZIP}
                disabled={!!values.savedLocValue}
                onChange={(e) => setValues.setLocZIP(e.target.value)}
                required={values.savedLocValue === 0}
              />
              <Form.Control.Feedback type="invalid">
                Please enter the zip code
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </Form.Group>
      </>
    );
  }
);
