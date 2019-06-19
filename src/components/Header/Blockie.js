import React from "react";
import { Blockie } from "dapparatus";
import { BlockieContainer, LoadingBlockie } from "./styles";

const BlockieDisplay = props => {
  const { isLoading, address } = props;
  const config = { address, config: { size: 6 } };
  return (
    <BlockieContainer>
      {isLoading ? <LoadingBlockie /> : <Blockie {...config} />}
    </BlockieContainer>
  );
};

export default BlockieDisplay;
