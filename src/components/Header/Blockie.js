import React from "react";
import burnerloader from "../../burnerloader.gif";
import { Blockie } from "dapparatus";

const BlockieDisplay = props => {
  const { total, address } = props;
  if (typeof total == "undefined" || Number.isNaN(total)) {
    return (
      <div>
        <img
          src={burnerloader}
          alt={"Loading..."}
          style={{ maxHeight: 50, opacity: 0.25, marginLeft: -20 }}
        />
      </div>
    );
  } else {
    return <Blockie address={address} config={{ size: 6 }} />;
  }
};

export default BlockieDisplay;
