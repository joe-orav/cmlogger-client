import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAccounts } from "../../store/selectors";

const Wrapper = styled.div`
  padding: 5px 5px 0 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProviderName = styled.p`
  font-weight: 500;
`;

const Item = ({ account }) => {
  return (
    <ItemContainer>
      <ProviderName>{account.providerName}</ProviderName>
      <p className={`text-${account.connected ? "success" : "danger"}`}>
        {account.connected ? "Connected" : "Not Connected"}
      </p>
    </ItemContainer>
  );
};

const AccountList = () => {
  const accountList = useSelector(getAccounts);
  return (
    <Wrapper>
      {accountList.map((account, i) => (
        <Item key={i} account={account} />
      ))}
    </Wrapper>
  );
};

export default AccountList;
