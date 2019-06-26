import React, { Component } from "react";
import QrCode from 'qrcode-reader';
import RNMessageChannel from 'react-native-webview-messaging';
import Jimp from "jimp";

import FailMessage from './FailMessage';
import DisplayReader from "./DisplayReader";
import { DisplayImage, NavigatorInfo, Close, Container } from './styles';

class SendByScan extends Component {
  constructor(props){
    super(props)
    let defaultToLegacyMode = false
    if(!navigator||!navigator.mediaDevices){
      defaultToLegacyMode = true
    }
    this.state = {
      delay: 400,
      browser: "",
      legacyMode: defaultToLegacyMode,
      scanFail: false,
      isLoading: false,
      percent: 5,
    };
    this.handleScan = this.handleScan.bind(this)
    this.legacyHandleChange = this.legacyHandleChange.bind(this)

    if(RNMessageChannel&&typeof RNMessageChannel.send == "function"){
      try{
        RNMessageChannel.send("qr")
      }catch(e){}
    }
  }
  stopRecording = () => this.setState({ delay: false });
  onImageLoad = data => {
    console.log("IMAGE LOAD",data)
    console.log(data)
  }
  handleScan = data => {
    console.log("DATA")
    console.log(data)

    //detect and respect status deep links...
    if(data && data.indexOf("get.status.im")>=0){
      let paymentLocation = data.indexOf("payment/")
      let paymentParts = data.substring(paymentLocation)
      let paymentPartsArray = paymentParts.split("/")
      console.log("Status Deep Link paymentParts",paymentParts,paymentPartsArray)

      if(paymentPartsArray.length>=4){
        let toAddress = paymentPartsArray[1]
        let amount = paymentPartsArray[2]
        let orderId = paymentPartsArray[3]
        this.props.returnToState({toAddress,amount,daiposOrderId:orderId,message:"Ching Order: "+orderId})
      }
    }else{
      let dataAfterColon
      if(data){
        dataAfterColon = data
        let colonAt = dataAfterColon.lastIndexOf(":")
        if(colonAt>=0) dataAfterColon = dataAfterColon.substring(colonAt+1)
        if(!dataAfterColon){
          dataAfterColon = data
        }
        let slashAt = dataAfterColon.lastIndexOf("/")
        if(slashAt>=0) dataAfterColon = dataAfterColon.substring(slashAt+1)
        if(!dataAfterColon){
          dataAfterColon = data
        }
        console.log("SCAN",data)
        if(data.indexOf("/pk")>=0){
          //don't mess with it
        }else{
          dataAfterColon=dataAfterColon.replace("#","")//had to pull this to get PKs to load in right
        }

      }
      console.log("dataAfterColon:",dataAfterColon)
      if (dataAfterColon) {
        this.stopRecording();
        console.log("RETURN STATE:",this.props.returnState)
        if(this.props.returnState && this.props.returnState.view!="send_to_address"){
          let returnState = this.props.parseAndCleanPath(dataAfterColon)
          this.props.returnToState(returnState)
          console.log("return state",returnState)
        }else{
          this.props.changeView('reader')
          setTimeout(()=>{
            //maybe they just scanned an address?
            window.location = "/"+dataAfterColon
          },100)
        }
      }
    }
  };
  chooseDeviceId = (a,b) => {
    console.log("chooseDeviceId ",a,b)
    console.log("choose",a,b)
  }
  handleError = error => {
    console.log("SCAN ERROR")
    console.error(error);
    this.setState({legacyMode:true})
    this.props.onError(error);
  };
  onClose = () => {
    console.log("SCAN CLOSE")
    this.stopRecording();
    this.props.goBack();
  };
  componentDidMount(){
    this.interval = setInterval(this.loadMore.bind(this),750)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
    this.stopRecording();
  }
  loadMore(){
    let newPercent = this.state.percent+3
    if(newPercent>100) newPercent=5
    this.setState({percent:newPercent})
  }
  legacyHandleChange(e, results){
    //this.props.changeView('reader')
    results.forEach(result => {
      const [e, file] = result;
      let reader = new FileReader();
      reader.onload = (e) => {
      //  this.props.changeView('send_by_scan',()=>{
          console.log("")
          this.setState({imageData:e.target.result})
          Jimp.read(Buffer.from(e.target.result.replace(/^data:image\/png;base64,/, "").replace(/^data:image\/jpeg;base64,/, ""), 'base64'),(err, image) => {
              if (err) {
                  alert("ERR1")
                  console.error("ERR1",err);
                  this.setState({scanFail:err.toString()})
              }
              var qr = new QrCode();
              qr.callback = (err, value) => {
                  this.setState({isLoading:false})
                  if (err) {
                    setTimeout(()=>{
                      console.log("FAILED TO SCAN!!!")
                      this.setState({scanFail:err.toString()})
                      setTimeout(()=>{
                        this.setState({imageData:false})
                      },1500)
                      setTimeout(()=>{
                        this.setState({scanFail:false})
                      },3500)
                    },1500)
                  }else if(value&&value.result){
                    this.handleScan(value.result)
                  }
              };
              if(!image||!image.bitmap){
                //this.setState({extraFail:JSON.stringify(e.target.result)})
              }else{
                qr.decode(image.bitmap);
              }

          })
      //  })
      };
      reader.readAsDataURL(file);
    })
  }
  render() {
    const { imageData, legacyMode, delay, isLoading, percent } = this.state
    const { scanFail } = this.state
    const { loaderImage } = this.props
    const startLoading = () => this.setState({isLoading: true})
    return (
      <Container>
        <Close onClick={this.onClose} />
        <DisplayReader
          delay={delay}
          percent={percent}
          startLoading={startLoading}
          legacyMode={legacyMode}
          legacyHandleChange={this.legacyHandleChange}
          isLoading={isLoading}
          loaderImage={loaderImage}
          handleScan={this.handleScan}
          handleError={this.handleError}
          onImageLoad={this.onImageLoad}
          onError={this.handleError}
        />
        <NavigatorInfo>
          {navigator.userAgent} - {JSON.stringify(navigator.mediaDevices)}
        </NavigatorInfo>
        {imageData && <DisplayImage src={imageData}/>}
        {scanFail && <FailMessage scanFail={scanFail}/>}
      </Container>
    );
  }
}

export default SendByScan;
