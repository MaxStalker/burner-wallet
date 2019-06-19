import React from "react";
import styled from "styled-components";
import { Text, Link, Icon, Flex } from "rimble-ui";

export const Container = styled(Flex).attrs(() => ({
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: 1,
  borderColor: "moon-gray",
  height: "3rem",
  mb: 3,
  pb: 3
}))``;

const IconContainer = styled(Flex).attrs(() => ({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  color: "moon-gray",
  size: "3rem",
  right: "-0.5rem"
}))``;

export const Close = ({ onClick }) => (
  <IconContainer onClick={onClick}>
    <Icon name={"Close"} />
  </IconContainer>
);

const config = { textAlign: "center", fontSize: 3 };

export const TitleLink = styled(Link).attrs(() => ({
  ...config,
  target: "_blank"
}))``;

export const TitleText = styled(Text).attrs(() => ({
  ...config
}))``;
