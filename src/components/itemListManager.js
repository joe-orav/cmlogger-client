import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { getDemoModeState } from "../store/selectors";

const ItemSelect = styled(Form.Control)`
  width: auto;
  display: block;
  min-width: 200px;
`;

const ItemListManager = ({
  dataList,
  dataLoaded,
  removeAction,
  demoModeEnabled,
}) => {
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
    removeAction(selectedItems, demoModeEnabled);
    setRemoveDisabled(true);
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

const mapStateToProps = (state) => {
  return {
    demoModeEnabled: getDemoModeState(state),
  };
};

export default connect(mapStateToProps)(ItemListManager);
