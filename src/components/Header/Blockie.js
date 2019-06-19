import React from "react";
import { Blockie } from "dapparatus";
import { BlockieContainer, LoadingBlockie } from "./styles";

const BlockieDisplay = props => {
  const { total, address } = props;
  const config = { address, config: { size: 6 } };
  const isLoading = typeof total == "undefined" || Number.isNaN(total);
  return (
    <BlockieContainer>
      {isLoading ? <LoadingBlockie /> : <Blockie {...config} />}
    </BlockieContainer>
  );
};

export default BlockieDisplay;
