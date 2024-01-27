import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBankData } from "../redux/slices/bankDataSlices";
import { fetchBankData } from "../redux/actions/bankDataActions";
import { AppDispatch } from "../types";

const AppHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bankData = useSelector(selectBankData);
  console.log(bankData);

  React.useEffect(() => {
    dispatch(fetchBankData(2));
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>{bankData.currencyList?.denc}</div>
        <div>{bankData.currencyList?.banka}</div>
      </div>
    </div>
  );
};

export default AppHeader;
