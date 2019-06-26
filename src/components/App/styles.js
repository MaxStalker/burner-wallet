import styled from 'styled-components';
import { Card, Flex } from 'rimble-ui'

export const MainContainer = styled(Flex).attrs(()=>({
  pt: 3
}))`
  width: 100%;
  min-height: 100vh;
  background-image: ${({theme}) => {
    console.log(theme);
    return `linear-gradient(${theme.background.top}, ${theme.background.bottom})`
  }};
  background-color: ${({theme}) => theme.background.bottom };
  `;

export const InnerContainer = styled(Flex).attrs(()=>({
  m: '0 auto',
  borderRadius: 2,
}))`
  width: 100%;
  flex-direction: column;
  max-width: 740px;
  text-align: left;
`;

export const Content = styled(Card).attrs(()=>({
  mb: 3,
  p: [3,4,4],
  borderRadius: [0, 1]
}))``;
