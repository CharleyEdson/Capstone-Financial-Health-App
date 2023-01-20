import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

const CashFlow = ({ cashflow }) => {
  const [user, token] = useAuth();

  const options = {
    chart: {
      title: "Cash Flow",
      subtitle: "Cash FLow",
    },
  };

  let data = [["Month", "Net Cash Flow"]];

//   data = data.concat(
//     cashflow.map((el) => Object.values(el).splice(0, 2).reverse())
//   );

  return (
    <div>
      <h3 className="networth_cash">Net Cash Flow </h3>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default CashFlow;
