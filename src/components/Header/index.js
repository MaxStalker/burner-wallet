import React from 'react';
import Address from './Address'
import Scan from './Scan'
import Network from './Network'
import { HeaderContainer } from "./styles";

const Header = props => {
  const { total } = props;
  let isLoading = typeof total == "undefined" || Number.isNaN(total);
  return (
    <HeaderContainer>
      <Address {...props} isLoading={isLoading}/>
      <Network {...props} isLoading={isLoading}/>
      <Scan {...props}/>
    </HeaderContainer>
  )
};

export default Header;
