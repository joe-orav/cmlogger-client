import React from "react";
import Form from "react-bootstrap/Form";
import { getServices } from "../../store/selectors";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    servicesList: getServices(state),
  };
};

export default connect(mapStateToProps)(({ servicesList, value, setValue }) => {
  function handleItemSelection(e) {
    let optionsList = Object.assign({}, e.target.options);
    let selectedValues = [];

    for (let option in optionsList) {
      if (optionsList[option].selected) {
        selectedValues.push(parseInt(optionsList[option].value));
      }
    }

    setValue(selectedValues);
  }

  return (
    <Form.Group className="col-12" controlId="services">
      <Form.Label>Services</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={handleItemSelection}
        multiple
      >
        {servicesList.map((service) => (
          <option key={service.id} value={service.id}>
            {service.sname}
          </option>
        ))}
      </Form.Control>
      <Form.Text muted>
        Any previously entered services will appear here
      </Form.Text>
    </Form.Group>
  );
});
