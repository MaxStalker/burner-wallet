export const dollarSymbol = "$";
export const dollarConversion = 1.0;

export const convertFromDollar = amount => {
  return parseFloat(amount) * dollarConversion;
};

export const dollarDisplay = value => {
  const amount = Math.floor(value * 100) / 100;
  return dollarSymbol + convertFromDollar(amount).toFixed(2);
};
