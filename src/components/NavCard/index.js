import React from "react";
import { Close, Container, TitleLink, TitleText } from "./styles";

const NavCard = props => {
  const { title, titleLink, goBack } = props;

  return (
    <Container>
      {titleLink ? (
        <TitleLink href={titleLink}>{title}</TitleLink>
      ) : (
        <TitleText>{title}</TitleText>
      )}
      <Close onClick={goBack} />
    </Container>
  );
};

export default NavCard;
