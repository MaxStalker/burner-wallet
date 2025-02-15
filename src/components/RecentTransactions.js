import React from 'react';
import { Blockie } from "dapparatus";
import { Scaler } from "dapparatus";

export default ({dollarDisplay, view, max, buttonStyle, vendorName, address, recentTxs, block, changeView}) => {
  let txns = []
  let count=0
  if(!max) max=9999
  for(let r in recentTxs){
    let thisValue = parseFloat(recentTxs[r].value)
    if(thisValue>0.0){

      let dollarView = (
          <span>
            <span style={{opacity:0.33}}>-</span>{dollarDisplay(recentTxs[r].value)}<span style={{opacity:0.33}}>-></span>
          </span>
        )

      let toBlockie = (
        <Blockie
          address={recentTxs[r].to}
          config={{size:4}}
        />
      )
      if(recentTxs[r].to===address && recentTxs[r].data) {
        let message = recentTxs[r].data
        let limit = 18
        if(message.length>limit){
          message = message.substring(0,limit-3)+"..."
        }
        toBlockie = (
          <span style={{fontSize:14}}>
            {message}
          </span>
        )
      }

      if(count++<max){
        //if(txns.length>0){
          txns.push(
            <hr key={"ruler"+recentTxs[r].hash} style={{ "color": "#DFDFDF",marginTop:0,marginBottom:7 }}/>
          )
        //}

        let blockAge = block-recentTxs[r].blockNumber

        if(blockAge<=1&&recentTxs[r].to===address){
          txns.push(
            <div style={{position:'relative',cursor:'pointer',paddingTop:10,paddingBottom:10}} key={recentTxs[r].hash} className="content bridge row" onClick={()=>{
              if(recentTxs[r].from===address){
                changeView("account_"+recentTxs[r].to)
              }else{
                changeView("account_"+recentTxs[r].from)
              }
            }}>
              <div className="col-3" style={{textAlign:'center'}}>
                <i className="fas fa-check-circle" style={{color:"#39e917",fontSize:70,opacity:.7}}></i>
              </div>
              <div className="col-3" style={{textAlign:'center',paddingTop:6}}>
                <Blockie
                  address={recentTxs[r].from}
                  config={{size:7}}
                />
              </div>
              <div className="col-3" style={{textAlign:'center',paddingTop:15,whiteSpace:"nowrap",letterSpacing:-1}}>
                <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
                  {dollarView}
                </Scaler>
              </div>
              <div className="col-3" style={{textAlign:'center',paddingTop:15,whiteSpace:"nowrap",letterSpacing:-1}}>
                {toBlockie}
              </div>
            </div>
          )
        }else{
          txns.push(
            <div style={{position:'relative',cursor:'pointer'}} key={recentTxs[r].hash} className="content bridge row" onClick={()=>{
              if(recentTxs[r].from===address){
                changeView("account_"+recentTxs[r].to)
              }else{
                changeView("account_"+recentTxs[r].from)
              }
            }}>
              <div className="col-3 p-1" style={{textAlign:'center'}}>
                <Blockie
                  address={recentTxs[r].from}
                  config={{size:4}}
                />
              </div>
              <div className="col-3 p-1" style={{textAlign:'center',whiteSpace:"nowrap",letterSpacing:-1}}>
                <Scaler config={{startZoomAt:600,origin:"25% 50%",adjustedZoom:1}}>
                  {dollarView}
                </Scaler>
              </div>
              <div className="col-3 p-1" style={{textAlign:'center',whiteSpace:"nowrap",letterSpacing:-1}}>
                {toBlockie}
              </div>
              <div className="col-2 p-1" style={{textAlign:'center',whiteSpace:"nowrap",letterSpacing:-1}}>
                <Scaler config={{startZoomAt:600,origin:"25% 50%",adjustedZoom:1}}>
                <span style={{marginLeft:5,marginTop:-5,opacity:0.4,fontSize:12}}>{cleanTime((blockAge)*5)} ago</span>
                </Scaler>
              </div>

            </div>
          )
        }


      }

    }
  }
  if(txns.length>0){
    return (
      <div style={{marginTop:30}}>
        {txns}
      </div>
    )
  }else{
    return (
      <span></span>
    )
  }
}

let cleanTime = (s)=>{
  if(s<60){
    return s+"s"
  }else if(s/60<60){
    return Math.round(s/6)/10+"m"
  }else {
    return Math.round((s/60/6)/24)/10+"d"
  }
}
