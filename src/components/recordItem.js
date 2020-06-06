import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import trashIcon from "../img/trash-icon.png";
import editIcon from "../img/edit-pen-icon.png";

const DetailItem = ({ label, text, width }) => {
  return (
    <Col className="text-center" md={width}>
      <p>
        <span className="font-weight-bold">{`${label}: `}</span>
        {text}
      </p>
    </Col>
  );
};

const SummaryRow = styled(Row)`
  text-align: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: #e9ecef;
  }
`;

const DetailsRow = styled(Row)`
  align-items: center;
  background: #dee2e6;
`;

const ItemControls = styled(Col)`
  display: flex;
  justify-content: center;
`;

const ControlBtn = styled(Button)`
  height: 40px;
  background: no-repeat center center;
  background-size: 100% auto;
  border: none;
  background-image: url(${(props) => props.$btnIcon});

  &:focus, &:hover, &:active {
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

const RecordItem = ({ index, record }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row className="border-bottom">
      <Col>
        <SummaryRow className="pt-3" onClick={() => setIsOpen(!isOpen)}>
          <Col xs="12" sm>
            <p>{record.dateString}</p>
          </Col>
          <Col xs="12" sm>
            <p>{record.car.fullname}</p>
          </Col>
          <Col xs="12" sm>
            <p>{record.services.map((s) => s.sname).join(", ")}</p>
          </Col>
        </SummaryRow>
        <Collapse in={isOpen}>
          <Row id={`record-item-${index}`}>
            <Col>
              <DetailsRow className="py-3">
                <DetailItem
                  label="Location"
                  text={record.location.name}
                  width="4"
                />
                <DetailItem
                  label="Address"
                  text={`${record.location.address}, ${record.location.city}, 
                  ${record.location.state}, ${record.location.zip_code}`}
                  width="4"
                />
                <DetailItem
                  label="Total Cost of Service"
                  text={"$" + record.cost}
                  width="4"
                />
                <DetailItem
                  label="Notes"
                  text={record.notes ? record.notes : "N/A"}
                  width="12"
                />
                <ItemControls>
                  <ControlBtn $btnIcon={editIcon} />
                  <ControlBtn $btnIcon={trashIcon} />
                </ItemControls>
              </DetailsRow>
            </Col>
          </Row>
        </Collapse>
      </Col>
    </Row>
  );
};

export default RecordItem;
