import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../types";
import { useParams } from "react-router-dom";
import { fetchBankData } from "../redux/actions/bankDataActions";
import { selectBankData } from "../redux/slices/bankDataSlices";
import CurrencyDataTable from "./CurrencyDataTable";

const BankData: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bankData = useSelector(selectBankData);
  const { id } = useParams();
  const bankNumber = id ? parseInt(id) : undefined;

  React.useEffect(() => {
    dispatch(fetchBankData(bankNumber || 1));
    const intervalId = setInterval(() => {
      dispatch(fetchBankData(bankNumber || 1));
    }, 300000);
    return () => clearInterval(intervalId);
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

  const bankDataColumns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Code", minWidth: 170 },
    { id: "dev_stred", label: "Mid price", minWidth: 170 },
    { id: "dev_nakup", label: "Buy", minWidth: 170 },
    { id: "dev_prodej", label: "Sell", minWidth: 170 },
  ];

  return <CurrencyDataTable columns={bankDataColumns} data={currencies} />;
};

export default BankData;
