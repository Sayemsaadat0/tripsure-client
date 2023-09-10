import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyConvert from "./CurrencyConvert";

const Currency = () => {
  const BASE_API =
    "http://data.fixer.io/api/latest?access_key=e6d22b35d8834afb01391701d2301fff";

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("BDT");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get(BASE_API).then((data) => setRates(data.data.rates));
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  // tofixed function
  const format = (number) => {
    return number.toFixed(4);
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };
  const handleAmount2Change = (newAmount2) => {
    setAmount1(format((newAmount2 * rates[currency1]) / rates[currency2]));
    setAmount2(newAmount2);
  };
  

  const handleCurrency2Change = (currency2) => {
    setAmount2(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <div className="grid gap-2 ">
      <CurrencyConvert
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />

      <CurrencyConvert
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
};

export default Currency;
