import React from "react";
import styled from "styled-components";
import {
  getSavedServices,
  getServiceHistoryDataLoading,
} from "../../store/selectors";
import NoData from "./noData";
import LoadingIcon from "../loading";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const FreqServTable = styled(Table)`
  margin-bottom: 0;

  thead {
    text-align: center;
  }

  th {
    font-weight: normal;
    font-size: 0.9rem;
  }

  td {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const Item = ({ service }) => {
  return (
    <tr>
      <td>{service.name}</td>
      <td>{service.date}</td>
      <td>{service.count}</td>
    </tr>
  );
};

const FrequentServicesList = () => {
  const savedServices = useSelector(getSavedServices);
  const serviceHistoryDataLoading = useSelector(getServiceHistoryDataLoading);

  return serviceHistoryDataLoading ? (
    <LoadingIcon />
  ) : savedServices.length === 0 ? (
    <NoData />
  ) : (
    <FreqServTable bordered size="sm">
      <thead>
        <tr>
          <th title="Service">
            <i className="fas fa-wrench"></i> Name
          </th>
          <th title="Date Last Provided">
            <i className="fas fa-calendar-alt"></i> Last Provided
          </th>
          <th title="# of Times Provided">
            <i className="fas fa-hashtag"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        {savedServices.slice(0, 5).map((val, i) => (
          <Item key={i} service={val} />
        ))}
      </tbody>
    </FreqServTable>
  );
};

export default FrequentServicesList;
