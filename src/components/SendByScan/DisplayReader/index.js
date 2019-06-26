import React from "react";
import i18n from "../../../i18n";
import QrReader from "react-qr-reader";
import FileReaderInput from "react-file-reader-input";
import { Box } from "rimble-ui";
import LoaderDisplay from "../LoaderDisplay";
import qrImage from "../../../qrcode.png";
import {
  Container,
  ImageContainer,
  CameraIcon,
  QRImage,
  CardContainer,
  CardHeader,
  MainCard,
  ButtonRow,
  ActionButton,
  Instructions
} from "./styles";

const DisplayReader = props => {
  const { legacyMode } = props;
  const { isLoading, delay, percent, loaderImage } = props;
  const { startLoading, legacyHandleChange, handleScan, handleError, onImageLoad } = props;
  if (!legacyMode) {
    return (
      <QrReader
        delay={delay}
        onError={handleError}
        onScan={handleScan}
        onImageLoad={onImageLoad}
        style={{ width: "100%" }}
      />
    );
  }
  return (
    <Box onClick={() => {
        console.log("LOADING...");
        startLoading();
      }}
    >
      <FileReaderInput
        as="binary"
        id="my-file-input"
        onChange={legacyHandleChange}
      >
        <Container>
          {isLoading && <LoaderDisplay image={loaderImage} loaded={percent} />}

          <ImageContainer>
            <CameraIcon/>
            <QRImage src={qrImage}/>
          </ImageContainer>

          <CardContainer style={{ textAlign: "center", paddingTop: "35%" }}>
            <CardHeader>{i18n.t("send_by_scan.capture")}</CardHeader>
            <MainCard>
              <ButtonRow>
                <ActionButton>
                  <CameraIcon/>
                  {i18n.t("send_by_scan.take_photo")}
                </ActionButton>
              </ButtonRow>
            </MainCard>
          </CardContainer>
          <Instructions>
            Lay QR flat and take a picture of it from a distance.
          </Instructions>
        </Container>
      </FileReaderInput>
    </Box>
  );
};
export default DisplayReader;
