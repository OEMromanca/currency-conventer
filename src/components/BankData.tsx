import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../types";
import { useParams } from "react-router-dom";
import { fetchBankData } from "../redux/actions/bankDataActions";
import { selectBankData } from "../redux/slices/bankDataSlices";

const BankData: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bankData = useSelector(selectBankData);
  const { id } = useParams();
  const bankNumber = id ? parseInt(id) : undefined;

  React.useEffect(() => {
    dispatch(fetchBankData(bankNumber || 1));
  }, [dispatch, bankNumber]);

  const currencies = React.useMemo(() => {
    return bankData.currencyList?.kurzy
      ? Object.values(bankData.currencyList.kurzy).map((data) => ({
          name: data.nazev,
          code: data.jednotka,
          dev_stred: data.dev_stred,
          dev_nakup: data.dev_nakup,
          dev_prodej: data.dev_prodej,
        }))
      : [];
  }, [bankData]);

  return (
    <div>
      <h2>Currencies</h2>
      {currencies.length > 0 ? (
        <ul>
          {currencies.map((currency, index) => (
            <li key={index}>
              <strong>{currency.name}</strong> ({currency.code}): Dev Stred:{" "}
              {currency.dev_stred}, Dev Nakup: {currency.dev_nakup}, Dev Prodej:{" "}
              {currency.dev_prodej}
            </li>
          ))}
        </ul>
      ) : (
        <p>No currencies available.</p>
      )}
    </div>
  );
};

export default BankData;
