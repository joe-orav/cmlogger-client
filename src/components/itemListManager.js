import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ItemSelect = styled(Form.Control)`
  width: auto;
  display: block;
  min-width: 200px;
`;

const ItemListManager = ({ dataList, dataLoaded }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [removeDisabled, setRemoveDisabled] = useState(true);

  function handleRemovalState(e) {
    setRemoveDisabled(e.target.selectedIndex < 0);
    let optionsList = Object.assign({}, e.target.options);
    let selectedValues = [];
    for (let option in optionsList) {
      if (optionsList[option].selected) {
        selectedValues.push(parseInt(optionsList[option].value));
      }
    }
    setSelectedItems(selectedValues);
  }

  function handleItemRemoval() {
    
  }

  return (
    <div>
      <ItemSelect
        className="custom-select"
        as="select"
        onChange={handleRemovalState}
        multiple
        custom
      >
        {!dataLoaded
          ? null
          : dataList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
      </ItemSelect>
      <Button
        variant="danger"
        className="mt-2"
        onClick={handleItemRemoval}
        disabled={removeDisabled}
      >
        Remove
      </Button>
    </div>
  );
};

export default ItemListManager;
