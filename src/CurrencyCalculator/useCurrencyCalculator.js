import { useMemo } from "react";

const EURO_RATE = 1.78;
const RUB_RATE = 0.56;
const BYN_RATE = 1.21;

export const useCurrencyCalculator = ({ value }) => {
  return useMemo(() => {
    const euroValue = (value * EURO_RATE).toFixed(2);
    const rubValue = (value * RUB_RATE).toFixed(2);
    const bynValue = (value * BYN_RATE).toFixed(2);

    return {
      euroValue,
      rubValue,
      bynValue,
    };
  }, [value]);
};
