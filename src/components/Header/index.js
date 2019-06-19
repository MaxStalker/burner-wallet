import React from 'react';
import Address from './Address'
import Scan from './Scan'
import Balance from './Balance'
import { HeaderContainer } from "./styles";

const Header = props => {
  return (
    <HeaderContainer>
      <Address {...props}/>
      <Balance {...props}/>
      <Scan {...props}/>
    </HeaderContainer>
  )
};

export default Header;
