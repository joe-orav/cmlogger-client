import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import flatpickr from "flatpickr";

export default ({ value, setValue }) => {
  useEffect(() => {
    flatpickr("#serviceDate", {
      defaultDate: value,
      altInput: true,
      altFormat: "M d, Y",
      dateFormat: "Y-m-d",
      appendTo: document.querySelector("#add-record-form"),
      onReady: (selectedDates, dateStr, instance) => setValue(dateStr),
      onChange: (selectedDates, dateStr, instance) => setValue(dateStr),
    });
  });

  return (
    <Form.Group className="col-6" controlId="serviceDate">
      <Form.Label>Date of Service</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  );
};
