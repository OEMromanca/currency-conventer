import React from "react";
import { useSelector } from "react-redux";
import { selectCurrencyConverter } from "../redux/slices/currencyConverterSlice";
import { formatNumberWithDecimals } from "../utils/utils";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CurrencyInfo: React.FC = () => {
  const [initialValue, setInitialValue] = React.useState(0);
  const { secondAmount, firstAmount, firstSelectValue, secondSelectValue } =
    useSelector(selectCurrencyConverter);

  React.useEffect(() => {
    if (firstAmount === 1) {
      setInitialValue(secondAmount);
    }
  }, [firstAmount, secondAmount]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>1 {firstSelectValue} equals</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {formatNumberWithDecimals(initialValue, 3)}
          {secondSelectValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CurrencyInfo;
