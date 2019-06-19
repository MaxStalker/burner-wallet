import styled from 'styled-components';
import { Card, Flex } from 'rimble-ui'

export const MainContainer = styled(Flex).attrs(()=>({
  pt: 3
}))`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#292929, #191919);
  background-color: #191919;
`;

export const InnerContainer = styled(Flex).attrs(()=>({
  m: '0 auto',
}))`
  width: 100%;
  flex-direction: column;
  max-width: 740px;
  text-align: left;
`;

export const Content = styled(Card).attrs(()=>({
  mb: 3,
  br: 1,
  p: [3,4,4]
}))``;
