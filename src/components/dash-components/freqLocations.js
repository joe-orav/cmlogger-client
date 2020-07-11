import React from "react";
import styled from "styled-components";
import {
  getSavedLocations,
  getServiceHistoryDataLoading,
} from "../../store/selectors";
import NoData from "./noData";
import LoadingIcon from "../loading";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const FreqLocationsTable = styled(Table)`
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

const Item = ({ location }) => {
  return (
    <tr>
      <td>{location.name}</td>
      <td>{location.date}</td>
    </tr>
  );
};

const FrequentLocationsList = () => {
  const savedLocations = useSelector(getSavedLocations);
  const serviceHistoryDataLoading = useSelector(getServiceHistoryDataLoading);

  return serviceHistoryDataLoading ? (
    <LoadingIcon />
  ) : savedLocations.length === 0 ? (
    <NoData />
  ) : (
    <FreqLocationsTable bordered size="sm">
      <thead>
        <tr>
          <th title="Name">
            <i className="fas fa-map-marker-alt"></i> Name
          </th>
          <th title="Last Visited">
            <i className="fas fa-calendar-alt"></i> Last Visited
          </th>
        </tr>
      </thead>
      <tbody>
        {savedLocations.slice(0, 5).map((val, i) => (
          <Item key={i} location={val} />
        ))}
      </tbody>
    </FreqLocationsTable>
  );
};

export default FrequentLocationsList;
