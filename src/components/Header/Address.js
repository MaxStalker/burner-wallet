import React from 'react'
import Blockie from './Blockie'

const Address = (props) => {
  const { address, changeView, ens, view, total } = props;
  let name = ens;
  if(!name){
    name = address.substring(2,8)
  }

  const rootStyle = {
    position:"absolute",
    left:16,top:4,
    zIndex:1,
    cursor:"pointer"
  };

  const blockieStyle = {
    position:"absolute",
    left:60,
    top:15,
    fontSize:14
  };
  const renderBlockie = <Blockie total={total} address={address}/>;
  if(view === "main" || view === "exchange"){
    return (
      <div style={rootStyle}  >
        <a href={"https://blockscout.com/poa/dai/address/"+address+"/transactions"} target="_blank" style={{color:"#FFFFFF"}}>
          {renderBlockie}
          <div style={blockieStyle}>{name}</div>
        </a>
      </div>
    )
  }
  else{
    return(
      <div style={rootStyle} onClick={() => changeView('main')} >
        {renderBlockie}
        <div style={blockieStyle}>{name}</div>
      </div>
    )
  }
};

export default Address;
