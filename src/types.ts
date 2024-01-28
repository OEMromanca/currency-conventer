import { ReactNode } from "react";
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

//Error
  export interface ErrorBoundaryProps {
    children: ReactNode;
  }

//Header
export interface AppHeaderProps {
  handleDrawerToggle: () => void;
}
//Conversion
export type UseCurrencyConversionProps = {
  bankData: IBankDetailsState;
};

//CurrencyDataTable
export interface Column {
  id: string;
  label: string;
  minWidth: number;
  align?: "left";
}
export interface Data {
  [key: string]: string | number;
}
export interface Props {
  columns: Column[];
  data: Data[];
}

//Layout
export interface ILayoutProps {
  window?: () => Window;
}
//dispatch and state 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;