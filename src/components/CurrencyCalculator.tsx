import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBankData } from "../redux/slices/bankDataSlices";
import { currencyOptions } from "../utils/mocks";
import {
  selectCurrencyConverter,
  setFirstAmount,
  setFirstSelectValue,
  setSecondSelectValue,
} from "../redux/slices/currencyConverterSlice";
import { Box } from "@mui/system";
import useCurrencyConversion from "../hooks/useCurrencyConversion";
import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { formatNumberWithDecimals } from "../utils/utils";

const StyledInpuBase = styled(InputBase)(() => ({
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "0",
  borderTopRightRadius: "0",
  border: "1px solid #ced4da",
  paddingLeft: 5,
}));

const StyledMainBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledFirstSelect = styled(Select)(() => ({
  border: "1px solid #ced4da",
  borderLeft: "none",
  paddingLeft: 5,
}));

const StyledSecondSelect = styled(Select)(() => ({
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "4px",
  borderTopRightRadius: "4px",
  border: "1px solid #ced4da",
  borderLeft: "none",
  paddingLeft: 5,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginX: 1,
}));

const CurrencyCalculator: React.FC = () => {
  const dispatch = useDispatch();
  const bankData = useSelector(selectBankData);
  const { firstSelectValue, secondSelectValue, firstAmount, secondAmount } =
    useSelector(selectCurrencyConverter);

  const { calculateCurrencyConversion } = useCurrencyConversion({
    bankData,
  });

  React.useEffect(() => {
    calculateCurrencyConversion(
      Number(firstAmount),
      firstSelectValue,
      secondSelectValue
    );
  }, [
    firstAmount,
    firstSelectValue,
    secondSelectValue,
    calculateCurrencyConversion,
  ]);

  return (
    <StyledMainBox>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FormControl variant="standard">
          <StyledInpuBase
            type="text"
            value={formatNumberWithDecimals(firstAmount, 3)}
            onChange={(event) => {
              const inputValue = event.target.value;
              const maxLength = 10;
              const parsedValue = Number(inputValue);

              if (!isNaN(parsedValue) && inputValue.length <= maxLength) {
                dispatch(setFirstAmount(parsedValue));
                calculateCurrencyConversion(
                  parsedValue,
                  firstSelectValue,
                  secondSelectValue
                );
              }
            }}
          />
        </FormControl>
        <FormControl variant="standard">
          <StyledFirstSelect
            value={firstSelectValue}
            onChange={(event) => {
              const selectedValue = event.target.value;
              dispatch(setFirstSelectValue(selectedValue as string));
            }}
            input={<InputBase />}
          >
            {currencyOptions.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {`${currency.code}`}
              </MenuItem>
            ))}
          </StyledFirstSelect>
        </FormControl>
        <FormControl variant="standard">
          <StyledSecondSelect
            value={secondSelectValue}
            onChange={(event) => {
              const selectedValue = event.target.value;
              dispatch(setSecondSelectValue(selectedValue as string));
            }}
            input={<InputBase />}
          >
            {currencyOptions.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {`${currency.code}`}
              </MenuItem>
            ))}
          </StyledSecondSelect>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1,
        }}
      >
        <StyledTypography variant="h6">
          {firstAmount}&nbsp;{firstSelectValue}
        </StyledTypography>

        <Typography>equals</Typography>

        <StyledTypography variant="h5">
          {formatNumberWithDecimals(secondAmount, 3)}&nbsp;
          {secondSelectValue}
        </StyledTypography>
      </Box>
    </StyledMainBox>
  );
};

export default CurrencyCalculator;
