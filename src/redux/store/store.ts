import { configureStore } from '@reduxjs/toolkit';
import bankDataReducer from '../slices/bankDataSlices';
import currencyConverterReducer from '../slices/currencyConverterSlice'; 

const store = configureStore({
  reducer: {
    bankData: bankDataReducer,
    currencyConverter: currencyConverterReducer, 
  },
});

export default store;
