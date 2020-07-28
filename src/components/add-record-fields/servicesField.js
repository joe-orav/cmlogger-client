import React from "react";
import Form from "react-bootstrap/Form";
import { getServices } from "../../store/selectors";
import { useSelector } from "react-redux";

export default ({ value, setValue, required }) => {
  const servicesList = useSelector(getServices);
  servicesList.sort((s1, s2) => {
    return s1.sname.localeCompare(s2.sname)
  })

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
      <Form.Label>Services (Saved)</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={handleItemSelection}
        multiple
        required={required && servicesList.length > 0}
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
};
