import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import checkIcon from "../img/connect-check.svg";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProviderName = styled.p`
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 18px;
`;

const CLinkContainer = styled.p`
  margin-bottom: 0;
`;

const CLink = styled.a`
  color: #007bff;
  &:hover {
    color: #003e80;
  }
`;

const ConnectionContainer = styled.div`
  display: flex;

  > * {
    margin-right: 5px;
  }
`;

const ConnectedIcon = () => {
  return (
    <ImageContainer>
      <Image src={checkIcon} fluid />
    </ImageContainer>
  );
};

const ConnectLink = ({ text, providerName, onClick }) => {
  return (
    <CLinkContainer>
      (
      <CLink
        href={onClick ? "#/" : `/auth/${providerName.toLowerCase()}`}
        onClick={onClick}
      >
        {text}
      </CLink>
      )
    </CLinkContainer>
  );
};

const ConnectionStatus = ({ connected, enableDisconnect, providerName }) => {
  return (
    <ConnectionContainer>
      {connected && <ConnectedIcon />}
      {connected && enableDisconnect && (
        <ConnectLink text="Disconnect" providerName={providerName} onClick={() => {}} />
      )}
      {!connected && <ConnectLink text="Connect" providerName={providerName} />}
    </ConnectionContainer>
  );
};

const AccountProviderItem = ({ account, enableDisconnect }) => {
  return (
    <ItemContainer>
      <ProviderName>{account.providerName}</ProviderName>
      <ConnectionStatus
        connected={account.connected}
        enableDisconnect={enableDisconnect}
        providerName={account.providerName}
      />
    </ItemContainer>
  );
};

const LinkedAccounts = ({ accountList }) => {
  let hasMultipleAccounts =
    accountList.filter((acc) => acc.connected).length > 1;

  return (
    <div>
      {accountList.map((acc, i) => (
        <AccountProviderItem
          key={i}
          account={acc}
          enableDisconnect={hasMultipleAccounts}
        />
      ))}
    </div>
  );
};

export default LinkedAccounts;
