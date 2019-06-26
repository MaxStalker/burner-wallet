import React from "react";
import i18n from "../../../i18n";
import {
  FailContainer,
  IconContainer,
  TryAgain,
  ScanFail
} from "./styles";
import { AwesomeIcon } from "../../General";

const FailMessage = props => {
  const { scanFail } = props;
  return (
    <FailContainer>
      <IconContainer>
        <AwesomeIcon icon={"ban"} />
      </IconContainer>
      <TryAgain>{i18n.t("send_by_scan.try_again")}</TryAgain>
      <ScanFail>{scanFail}</ScanFail>
    </FailContainer>
  );
};
export default FailMessage;
