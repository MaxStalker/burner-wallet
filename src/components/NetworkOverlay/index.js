import React from "react";
import { Container, BackgroundImage, UrlInput } from "./styles";

// Displays overlay image that prompts user to change network
const NetworkOverlay = () => {
  return (
    <Container>
      <UrlInput value="https://dai.poa.network" />
      <BackgroundImage/>
    </Container>
  );
};

export default NetworkOverlay;
