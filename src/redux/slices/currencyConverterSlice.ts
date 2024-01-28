import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const initialState = {
  firstSelectValue: 'EUR',
  secondSelectValue: 'USD',
  firstAmount: 1,
  secondAmount: 1,
};

const currencyConverterSlice = createSlice({
  name: 'currencyConverter',
  initialState,
  reducers: {
    setFirstSelectValue: (state, action: PayloadAction<string>) => {
      state.firstSelectValue = action.payload;
    },
    setSecondSelectValue: (state, action: PayloadAction<string>) => {
      state.secondSelectValue = action.payload;
    },
    setFirstAmount: (state, action: PayloadAction<number>) => {
      state.firstAmount = action.payload;
    },
    setSecondAmount: (state, action: PayloadAction<number>) => {
      state.secondAmount = action.payload;
    },
  },
});

export const {
  setFirstSelectValue,
  setSecondSelectValue,
  setFirstAmount,
  setSecondAmount,
} = currencyConverterSlice.actions;

export const selectCurrencyConverter = (state: RootState) => state.currencyConverter;

export default currencyConverterSlice.reducer;
