import React from "react";
import Blockie from "./Blockie";
import { AddressContainer, AccountName, AddressLink } from "./styles";

const Address = props => {
  const { address, changeView, ens, view, isLoading } = props;
  const name = ens || address.substring(2, 8);
  const txLink = `https://blockscout.com/poa/dai/address/${address}/transactions`;
  if (view === "main" || view === "exchange") {
    return (
      <AddressLink href={txLink}>
        <AddressContainer>
          <Blockie isLoading={isLoading} address={address} />
          <AccountName name={name} />
        </AddressContainer>
      </AddressLink>
    );
  } else {
    return (
      <AddressContainer onClick={() => changeView("main")}>
        <Blockie isLoading={isLoading} address={address} />
        <AccountName name={name} />
      </AddressContainer>
    );
  }
};

export default Address;
