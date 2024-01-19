import CurrencyConverter from "@/components/CurrencyConvert";
import Navbar from "@/components/Nav";
import React from "react";

const currency = () => {
  return (
    <div>
      <Navbar />
      <CurrencyConverter />
    </div>
  );
};

export default currency;
