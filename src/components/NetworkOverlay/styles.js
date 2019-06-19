import styled from 'styled-components'
import { Image, Input, Flex } from 'rimble-ui'
import rpcHint from "../../customRPCHint.png";

export const Container = styled(Flex).attrs(()=>({
}))`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
`;

export const BackgroundImage = styled(Image).attrs(()=>({
  src: rpcHint
}))`
  width: auto;
  height: 370px;
`;

export const UrlInput = styled(Input).attrs(()=>({}))`
  position: absolute;
  width: 194px;
  left: 24px;
  top: 180px;
`;
