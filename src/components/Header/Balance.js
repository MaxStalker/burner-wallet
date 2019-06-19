import React from "react";

const Balance = props => {
  const { total, network } = props;
  let moneyDisplay;
  if (typeof total == "undefined" || Number.isNaN(total)) {
    moneyDisplay = (
      <div style={{ opacity: 0.1, fontSize: 28, paddingTop: 15 }}>
        connecting...
      </div>
    );
  } else {
    moneyDisplay = (
      <div style={{ opacity: 0.4, fontSize: 22, paddingTop: 18 }}>
        {network}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        right: 28,
        top: -4,
        zIndex: 1,
        fontSize: 46,
        opacity: 0.9
      }}
    >
      {moneyDisplay}
    </div>
  );
};

export default Balance;
