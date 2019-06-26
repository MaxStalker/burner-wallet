import styled from "styled-components";
import { Flex, Card, Image, Text, Button } from "rimble-ui";
import { AwesomeIcon } from "../../General";


export const Container = styled(Flex).attrs(() => ({
  color: "white"
}))`
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImageContainer = styled(Flex).attrs(() => ({
  alignItems: "center"
}))``;

export const QRImage = styled(Image)`
  position: absolute;
  left: 36%;
  top: 25%;
  padding: 4px;
  border: 1px solid #888888;
  opacity: 0.25;
  max-width: 30%;
  max-height: 30%;
`;

export const CameraIcon = styled(AwesomeIcon).attrs(() => ({
  icon: "camera"
}))`
  margin-bottom: ${({mb = 0}) => mb};
`;

export const Instructions = styled(Text).attrs(() => ({
  fontSize: 4
}))``;

// TODO: FINAL TOUCH HERE
// Should be 'btn btn-large w-100'
export const ActionButton = styled(Button).attrs(()=>({
  bg: 'primary'
}))``;

// "content ops row"
export const ButtonRow = styled(Flex)`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 10px;
`;
export const CardContainer = styled(Flex)``;

// main-card card w-100
export const MainCard = styled(Card).attrs(()=>({
  bg: 'black'
}))``;


export const CardHeader = styled(Text)``;
