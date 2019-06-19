import React from "react";
import styled from "styled-components";
import { Box, Flex, Text, Link, Image } from "rimble-ui";
import burnerLoading from "../../burnerloader.gif";

export const HeaderContainer = ({ children }) => {
  return (
    <Box>
      <Flex>{children}</Flex>
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
export const AddressContent = styled(Flex).attrs(()=>({
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
export const BlockieContainer = styled(Box).attrs(()=>({
  mr: 2
}))`
  width: ${BLOCKIE_SIZE};
  height: ${BLOCKIE_SIZE};
`;

export const LoadingBlockie = styled(Image).attrs(()=>({
  alt: "Loading...",
  src: burnerLoading
}))`
  width: ${BLOCKIE_SIZE};
  height: ${BLOCKIE_SIZE};
  object-fit: cover;
  opacity: 0.25;
`;
