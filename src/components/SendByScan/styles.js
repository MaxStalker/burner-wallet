import React from "react";
import styled from "styled-components";
import { Image, Flex } from "rimble-ui";
import { AwesomeIcon } from "../General";

export const Container = styled(Flex)`
  position: fixed;
  background: #000000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const CloseContainer = styled(Flex)`
  position: absolute;
  z-index: 256;
  top: 20px;
  right: 20px;
  font-size: 80px;
  color: white;
  cursor: pointer;
`;

export const Close = ({ onClick }) => (
  <CloseContainer onClick={onClick}>
    <AwesomeIcon icon="times" aria-hidden="true" />
  </CloseContainer>
);

export const DisplayImage = styled(Image).attrs(() => ({}))`
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100%;
  opacity: 0.7;
`;

export const NavigatorInfo = styled(Flex).attrs(() => ({
  color: "white",
  fontSize: 1
}))`
  position: absolute;
  z-index: 11;
  left: 20px;
  bottom: 20px;
  opacity: 0.3;
`;
