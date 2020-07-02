import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getMergedServiceRecords,
  getServiceHistoryDataLoading,
} from "../../store/selectors";
import NoData from "./noData";
import LoadingIcon from "../loading";
import { SDRouteLink } from "../defaultLink";

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const ItemServices = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const ItemDetailsWrapper = styled.div`
  margin-bottom: 5px;
`;

const ItemCar = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
`;

const ItemDateWrapper = styled.div`
  flex-grow: 1;
`;

const ItemDate = styled.p`
  text-align: right;
  color: #787878;
  font-size: 0.85rem;
`;

const LinkContainer = styled.div`
  padding: 10px 0;
`;

const Item = ({ services, car, date }) => {
  return (
    <ItemWrapper>
      <ItemDetailsWrapper>
        <ItemServices>{services}</ItemServices>
        <ItemCar>{car}</ItemCar>
      </ItemDetailsWrapper>
      <ItemDateWrapper>
        <ItemDate>{date}</ItemDate>
      </ItemDateWrapper>
    </ItemWrapper>
  );
};

const RecordList = ({ serviceHistory, serviceHistoryDataLoading }) => {
  return serviceHistoryDataLoading ? (
    <LoadingIcon />
  ) : serviceHistory.length === 0 ? (
    <NoData />
  ) : (
    <div>
      <div>
        {serviceHistory.map((record) => (
          <Item
            key={record.id}
            services={record.services.map((s) => s.sname).join(", ")}
            car={record.car.fullname}
            date={record.dateString}
          />
        ))}
      </div>
      <LinkContainer>
        <SDRouteLink to="/service-history">View Service History</SDRouteLink>
      </LinkContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceHistory: getMergedServiceRecords(state),
    serviceHistoryDataLoading: getServiceHistoryDataLoading(state),
  };
};

export default connect(mapStateToProps)(RecordList);
