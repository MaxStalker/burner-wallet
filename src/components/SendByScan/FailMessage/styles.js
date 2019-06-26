import styled from "styled-components";
import { Flex } from 'rimble-ui'

export const FailContainer = styled(Flex).attrs(() => ({
  fontSize: 4,
  color: "error",
  bg: "errorBackground",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}))`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  font-weight: bold;
`;
export const IconContainer = styled(Flex).attrs(() => ({
  mb: 3,
  fontSize: 7
}))``;

export const TryAgain = styled(Flex).attrs(()=>({
  alignItems: 'center',
  mb: 1,
}))``;

export const ScanFail = styled(Flex).attrs(()=>({
  fontSize: 2
}))``;
