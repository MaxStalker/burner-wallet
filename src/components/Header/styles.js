import React from "react";
import styled from "styled-components";
import { Button, Box, Flex, Image, Icon, Link, Text } from "rimble-ui";
import burnerLoading from "../../burnerloader.gif";

const HeaderFlex = styled(Flex).attrs(() => ({
  mb: 3,
  alignItems: "center",
  justifyContent: "space-between"
}))``;

export const HeaderContainer = ({ children }) => {
  return (
    <Box pr={[3,0]} pl={[3,0]}>
      <HeaderFlex>{children}</HeaderFlex>
    </Box>
  );
};

// Address Block
export const AddressContainer = ({ children }) => {
  return (
    <Box>
      <AddressContent>{children}</AddressContent>
    </Box>
  );
};
export const AddressContent = styled(Flex).attrs(() => ({
  alignItems: "center"
}))`
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
export const AddressLink = styled(Link).attrs(() => ({
  color: "#ffffff",
  target: "_blank"
}))``;
export const AccountName = ({ name }) => <Text fontSize={2}>{name}</Text>;

// Blockie
const BLOCKIE_SIZE = "48px";
export const BlockieContainer = styled(Box).attrs(() => ({
  mr: 2
}))`
  width: ${BLOCKIE_SIZE};
  height: ${BLOCKIE_SIZE};
`;

export const LoadingBlockie = styled(Image).attrs(() => ({
  alt: "Loading...",
  src: burnerLoading
}))`
  width: ${BLOCKIE_SIZE};
  height: ${BLOCKIE_SIZE};
  object-fit: cover;
  opacity: 0.25;
`;

// Balance
export const BalanceContainer = styled(Text).attrs(() => ({
  fontSize: 3
}))``;

// Scan Button
export const FloatingContainer = styled(Box).attrs(({ theme }) => {
  const { space } = theme;
  const offset = space ? space[3] : '1em';
  return {
    zIndex: 5,
    bottom: offset,
    right: offset,
    position: "fixed"
  };
})`
  cursor: pointer;
`;

export const FloatingButton = styled(Button).attrs(() => ({
  p: 0,
  m: 0
}))`
  height: auto;
  border-radius: 50%;
`;

export const CameraIcon = styled(Icon).attrs(() => ({
  name: "CenterFocusWeak",
  size: 90,
  p: 3
}))``;
