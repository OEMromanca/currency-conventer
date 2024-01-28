import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSecondAmount } from "../redux/slices/currencyConverterSlice";
import { BankDetails, UseCurrencyConversionProps } from "../types";

 

const useCurrencyConversion = ({ bankData }: UseCurrencyConversionProps) => {
  const dispatch = useDispatch();

  const calculateCurrencyConversion = useCallback(
    (newAmount: number, fromCurrency: keyof BankDetails["kurzy"], toCurrency: keyof BankDetails["kurzy"]) => {
      if (bankData.currencyList && fromCurrency && toCurrency) {
        const buyRate = bankData.currencyList.kurzy[fromCurrency]?.dev_nakup;
        const sellRate = bankData.currencyList.kurzy[toCurrency]?.dev_prodej;

        if (buyRate && sellRate && buyRate !== 0) {
          const exchangeRate = buyRate / sellRate;
          const result = newAmount * exchangeRate;
          dispatch(setSecondAmount(result));
        }
      }
    },
    [bankData.currencyList, dispatch]
  );

  

  return {
    calculateCurrencyConversion,
  };
};

export default useCurrencyConversion;
