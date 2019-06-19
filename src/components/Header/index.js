import React from 'react';
import Address from './Address'
import Scan from './Scan'
import Balance from './Balance'
import { HeaderContainer } from "./styles";

const Header = props => {
  const { total } = props;
  let isLoading = typeof total == "undefined" || Number.isNaN(total);
  return (
    <HeaderContainer>
      <Address {...props} isLoading={isLoading}/>
      <Balance {...props} isLoading={isLoading}/>
      <Scan {...props}/>
    </HeaderContainer>
  )
};

export default Header;
