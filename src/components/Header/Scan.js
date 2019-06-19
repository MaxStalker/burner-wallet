import React from "react";
import { FloatingContainer, FloatingButton, CameraIcon } from "./styles";

const Scan = props => {
  const { view, openScanner } = props;
  const isHidden = view === "receive" || view === "send_badge";
  const opacity = isHidden ? 0 : 1;

  // TODO: check "send to address" screen on master and align positions
  return (
    <FloatingContainer opacity={opacity}>
      <FloatingButton
        onClick={() => {
          openScanner({ view: "send_to_address" });
        }}
      >
        <CameraIcon />
      </FloatingButton>
    </FloatingContainer>
  );
};

export default Scan;
