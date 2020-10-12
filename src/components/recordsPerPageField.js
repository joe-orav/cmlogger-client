import React from "react"
import Form from "react-bootstrap/Form"
import styled from "styled-components"
import useLocalStorage from "../hooks/useLocalStorage"

const FieldForm = styled(Form)`
  max-width: 80px;
`

export default () => {
  const [itemsPerPage, setItemsPerPage] = useLocalStorage(
    "serviceItemsPerPage",
    10
  )

  function handleValueChange(e) {
    let value = parseInt(e.target.value)

    if (value >= 1 && value <= 100) {
      setItemsPerPage(e.target.value)
    }
  }

  return (
    <FieldForm>
      <Form.Control
        type="number"
        min="1"
        max="100"
        value={itemsPerPage}
        onChange={handleValueChange}
      />
    </FieldForm>
  )
}
