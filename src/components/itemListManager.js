import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ItemSelect = styled(Form.Control)`
  width: auto;
  display: block;
  min-width: 200px;
`;

const ItemListManager = () => {
  return (
    <div>
      <ItemSelect
        className="custom-select"
        as="select"
        multiple
        custom
      ></ItemSelect>
      <Button variant="danger" className="mt-2">
        Remove
      </Button>
      <Button variant="primary" className="ml-2 mt-2">
        Save
      </Button>
    </div>
  );
};

export default ItemListManager;
