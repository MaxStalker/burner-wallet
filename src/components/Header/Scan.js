import React from "react";
import { Button, Icon } from "rimble-ui";

const Scan = props => {
  const { view, openScanner } = props;
  let sendButtonOpacity = 1.0;
  if (view === "receive" || view === "send_badge") {
    sendButtonOpacity = 0;
  }

  let scanButtonStyle = {
    opacity: sendButtonOpacity,
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 2,
    cursor: "pointer"
  };

  if (view === "send_to_address") {
    scanButtonStyle.position = "absolute";
    scanButtonStyle.right = -3;
    scanButtonStyle.top = 217;
    delete scanButtonStyle.bottom;
  }
  return (
    <div style={scanButtonStyle}>
      <Button
        onClick={() => {
          openScanner({ view: "send_to_address" });
        }}
        borderRadius={"50%"}
        height={"auto"}
        width={"auto"}
        p={0}
        m={0}
        position={"absolute"}
        bottom={3}
        right={3}
      >
        <Icon name="CenterFocusWeak" size={90} p={3} />
      </Button>
    </div>
  );
};

export default Scan;
