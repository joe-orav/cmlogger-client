import React from "react"
import Form from "react-bootstrap/Form"
import { getLocations } from "../../store/selectors"
import { useSelector } from "react-redux"
import SavedLocationsField from "./location-fields/savedLocationsField"
import LocationNameField from "./location-fields/locationNameField"
import AddressField from "./location-fields/addressField"
import CityField from "./location-fields/cityField"
import StatesField from "./location-fields/stateField"
import PostalCodeField from "./location-fields/postalCodeField"
import OtherField from "./location-fields/otherField"

export default ({ values, setValues }) => {
  const locationsList = useSelector(getLocations)

  function handleLocationSelection(e) {
    e.preventDefault()
    let locationID = parseInt(e.target.value)
    let location

    if (locationID > 0) {
      location = locationsList.filter((loc) => loc.id === locationID)[0]

      setValues.setLocName(location.name)
      setValues.setLocAddress(location.address)
      setValues.setLocCity(location.city)
      setValues.setLocState(location.state)
      setValues.setLocZIP(location.zip_code)
      setValues.setLocOther(location.other || "")
    } else {
      setValues.setLocName("")
      setValues.setLocAddress("")
      setValues.setLocCity("")
      setValues.setLocState("")
      setValues.setLocZIP("")
      setValues.setLocOther("")
    }

    setValues.setSavedLocValue(locationID)
  }

  return (
    <>
      <SavedLocationsField
        value={values.savedLocValue}
        onChange={handleLocationSelection}
        list={locationsList}
      />
      <LocationNameField
        value={values.locName}
        disabled={!!values.savedLocValue}
        onChange={(e) => setValues.setLocName(e.target.value)}
        required={values.savedLocValue === 0}
      />
      <Form.Group className="col-12" controlId="fullAddress">
        <Form.Row>
          <AddressField
            value={values.locAddress}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocAddress(e.target.value)}
            required={values.savedLocValue === 0}
          />
          <CityField
            value={values.locCity}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocCity(e.target.value)}
            required={values.savedLocValue === 0}
          />
          <StatesField
            value={values.locState}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocState(e.target.value)}
            required={values.savedLocValue === 0}
          />
          <PostalCodeField
            value={values.locZIP}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocZIP(e.target.value)}
            required={values.savedLocValue === 0}
          />
          <OtherField
            value={values.locOther}
            disabled={!!values.savedLocValue}
            onChange={(e) => setValues.setLocOther(e.target.value)}
          />
        </Form.Row>
      </Form.Group>
    </>
  )
}
