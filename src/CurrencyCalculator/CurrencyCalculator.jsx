import { useState } from "react";
import { useCurrencyCalculator } from "./useCurrencyCalculator";

export const CurrencyCalculator = () => {
  const [value, setValue] = useState("");

  const result = useCurrencyCalculator({ value });

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        placeholder="Enter amount ($)"
      />

      <ul>
        <li>EUR: {result.euroValue}</li>
        <li>BYN: {result.bynValue}</li>
        <li>RUB: {result.rubValue}</li>
      </ul>
    </div>
  );
};
