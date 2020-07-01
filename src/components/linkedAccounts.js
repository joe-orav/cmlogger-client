import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import checkIcon from "../img/connect-check.svg";
import { SDLink } from "./defaultLink";
import { getAccounts, getUserId } from "../store/selectors";
import { disconnectAccount } from "../store/actions/user-actions";
import { connect } from "react-redux";

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
      <SDLink
        href={onClick ? "#/" : `/auth/${providerName.toLowerCase()}`}
        onClick={onClick}
      >
        {text}
      </SDLink>
      )
    </CLinkContainer>
  );
};

const ConnectionStatus = ({
  connected,
  enableDisconnect,
  providerName,
  disconnectAction,
}) => {
  return (
    <ConnectionContainer>
      {connected && <ConnectedIcon />}
      {connected && enableDisconnect && (
        <ConnectLink
          text="Disconnect"
          providerName={providerName}
          onClick={disconnectAction}
        />
      )}
      {!connected && <ConnectLink text="Connect" providerName={providerName} />}
    </ConnectionContainer>
  );
};

const AccountProviderItem = ({
  account,
  enableDisconnect,
  disconnectAction,
}) => {
  return (
    <ItemContainer>
      <ProviderName>{account.providerName}</ProviderName>
      <ConnectionStatus
        connected={account.connected}
        enableDisconnect={enableDisconnect}
        providerName={account.providerName}
        disconnectAction={disconnectAction}
      />
    </ItemContainer>
  );
};

const LinkedAccounts = ({
  accountList,
  userId,
  disconnectAccount,
  connectionAttempt,
}) => {
  let hasMultipleAccounts =
    accountList.filter((acc) => acc.connected).length > 1;

  return (
    <div>
      {accountList.map((acc, i) => (
        <AccountProviderItem
          key={i}
          account={acc}
          enableDisconnect={hasMultipleAccounts}
          disconnectAction={() =>
            disconnectAccount({
              userId: userId,
              providerName: acc.providerName.toLowerCase(),
            })
          }
        />
      ))}
      {connectionAttempt === "error" && (
        <p className="text-danger">
          Error: There is already a profile associated with the account you want
          to connect
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accountList: getAccounts(state),
    userId: getUserId(state),
  };
};

const mapDispatchToProps = { disconnectAccount };

export default connect(mapStateToProps, mapDispatchToProps)(LinkedAccounts);
