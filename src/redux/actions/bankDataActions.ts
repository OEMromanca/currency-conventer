
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../api/api';
import { BankDetails } from '../../types';
import { jsonStringMatch } from '../../utils/utils';

export const fetchBankData = createAsyncThunk<BankDetails, number>(
  'bankData/fetchBankData',
  async (bankNumber) => {
    const response = await getDataFromAPI(bankNumber);
    
    const bankCoursesData = jsonStringMatch<BankDetails>(response.data);

    if (!bankCoursesData || !bankCoursesData.kurzy) {
      throw new Error("Invalid or missing 'kurzy' property in API response");
    }

    return bankCoursesData;
  }
);
