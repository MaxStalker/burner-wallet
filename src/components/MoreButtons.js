import React from "react";
import i18n from "../i18n";
import {
  Flex,
  Box
} from "rimble-ui";
import { ShallowButton } from "./General";

export default ({
  isVendor,
  ERC20TOKEN,
  address,
  balance,
  changeAlert,
  changeView,
  dollarDisplay,
  subBalanceDisplay
}) => {
  let exchangeButton;

  if (!isVendor) {
    exchangeButton = (
      <ShallowButton icon={'Shuffle'} width={1} onClick={() => {changeView("exchange");}}>
        {i18n.t("more_buttons.exchange")}
      </ShallowButton>
    );
  } else {
    exchangeButton = (
      <ShallowButton icon={'CreditCard'} width={1} onClick={() => {changeView("cash_out");}}>
        {"Cash Out"}
      </ShallowButton>
    );
  }

  return (
    <Flex>
      <Box width={1/2} mr={3}>
        <ShallowButton icon={'AttachMoney'} width={1} onClick={() => {changeView("request_funds");}}>
          {i18n.t("more_buttons.request")}
        </ShallowButton>
      </Box>
      <Box width={1/2}>
        {exchangeButton}
      </Box>
    </Flex>
  );
};
