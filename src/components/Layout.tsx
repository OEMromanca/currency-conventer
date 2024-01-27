import React from "react";
import AppHeader from "./AppHeader";
import { Route, Routes } from "react-router";
import BankData from "./BankData";

export default function Layout() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/:to/:id" element={<BankData />} />
      </Routes>
    </div>
  );
}
