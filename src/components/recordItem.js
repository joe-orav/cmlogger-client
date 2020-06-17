import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import trashIcon from "../img/trash-icon.png";
import editIcon from "../img/edit-pen-icon.png";
import { Link } from "react-router-dom";
import DeleteOverlay from "./deleteItem";

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

const ContainerCol = styled(Col)`
  position: relative;
`;

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

  &:focus,
  &:hover,
  &:active {
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

const InlineLabel = styled.span`
  display: inline-block;
  font-weight: bold;
  @media (min-width: 576px) {
    display: none;
  }
`;

const SummaryItem = ({ label, value }) => {
  return (
    <Col xs="12" sm>
      <p>
        <InlineLabel>{`${label}:`}</InlineLabel> {value}
      </p>
    </Col>
  );
};

const RecordItem = ({ index, record }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  return (
    <Row className="border-bottom">
      <ContainerCol>
        <SummaryRow className="pt-3" onClick={() => setIsOpen(!isOpen)}>
          <SummaryItem label="Date" value={record.dateString} />
          <SummaryItem label="Car" value={record.car.fullname} />
          <SummaryItem
            label="Service(s) Provided"
            value={record.services.map((s) => s.sname).join(", ")}
          />
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
                  <ControlBtn
                    forwardedAs={Link}
                    $btnIcon={editIcon}
                    to={`/add-record?id=${record.id}`}
                  />
                  <ControlBtn
                    $btnIcon={trashIcon}
                    onClick={() => setShowDeleteOverlay(true)}
                  />
                </ItemControls>
              </DetailsRow>
            </Col>
          </Row>
        </Collapse>
        <DeleteOverlay
          show={showDeleteOverlay}
          setShow={setShowDeleteOverlay}
          text={"Are you sure you want to delete this record?"}
        />
      </ContainerCol>
    </Row>
  );
};

export default RecordItem;
