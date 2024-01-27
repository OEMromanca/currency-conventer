import { createSlice } from '@reduxjs/toolkit';
import { IBankDetailsState, RootState } from '../../types';
import { fetchBankData } from '../actions/bankDataActions';

const initialState: IBankDetailsState = {
    currencyList: {
      den: '',
      denc: '',
      banka: '',
      url: '',
      kurzy: {},
    },
    loading: 'idle',
    error: null,
  };

const bankDataSlice = createSlice({
  name: 'bankData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBankData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchBankData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.currencyList = action.payload
      })
      .addCase(fetchBankData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const { reducer, actions } = bankDataSlice;
export const selectBankData = (state: RootState) => state.bankData;
export default reducer;
