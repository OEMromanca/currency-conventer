import store from "./redux/store/store";

export interface BankDetails {
  den: string;
  denc: string;
  banka: string;
  url: string;
  kurzy: Record<string, {
    jednotka: number;
    dev_stred: number;
    dev_nakup: number;
    dev_prodej: number;
    val_stred: number | null;
    val_nakup: number | null;
    val_prodej: number | null;
    nazev: string;
    url: string;
  }>;
}


  export interface IBankDetailsState {
    currencyList: BankDetails;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
  }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;