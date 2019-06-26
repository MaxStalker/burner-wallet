import React from "react";
import styled from "styled-components";
import { Image, Flex } from "rimble-ui";

const Container = styled(Flex)``;
const LoaderImage = styled(Image)`
  max-width: 25%;
`;
const Progress = styled(Flex)``;
const Fill = styled(Flex)``;

const LoaderDisplay = ({ image, loaded }) => {
  const width = `${loaded}%`;
  return(
    <Container>
      <LoaderImage src={image}/>
      <Progress>
        <Fill w={width}/>
      </Progress>
    </Container>
  )
};

export default LoaderDisplay;
