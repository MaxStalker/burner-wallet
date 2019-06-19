import React from "react";
import { BalanceContainer } from "./styles";

const Network = props => {
  const { network, isLoading } = props;
  let opacity = isLoading ? 0.1 : 0.9;

  return (
    <BalanceContainer opacity={opacity}>
      {isLoading ? "Connecting..." : network}
    </BalanceContainer>
  );
};

export default Network;
