import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import UpdateBudgetModal from "../UpdateBudgetModal/UpdateBudgetModal";
import './CashFlow.css'

const CashFlow = () => {
  const [user, token] = useAuth();
  const [cashFlow, setCashFlow] = useState([
    {
      date: "2023-01-19",
      id: 1,
      month: "1",
      user_id: 2,
      year: "2023",
      net_cash_flow: 3000,
    },
  ]);

  useEffect(() => {
    fetchCashFlow();
  }, []);

  const fetchCashFlow = async () => {
    try {
      let response = await axios.get(
        "http://127.0.0.1:8000/api/cashflow/historicalnetcashflow/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setCashFlow(response["data"]);
    } catch (error) {
      console.log(error.response);
      <div></div>
    }
  };
// https://developers.google.com/chart/interactive/docs/gallery/linechart
// to style charts
  const options = {
    title: "Cash Flow",
    legend: "none",
    is3d: true,
    lineWidth: 1,
    corsshair: { trigger: "focus" },
    chartArea: {
      backgroundColor: {
        fill: 'rgb(48, 130, 167)',
        fillOpacity: 0.1
      },
    },
    backgroundColor: {
      fill: 'rgb(48, 130, 167)',
      fillOpacity: 0.1
    },
    bars: "vertical",
    opacity: 0.2,
  };

  let data = [["Month", "Net Cash Flow", {role: 'style'}]];

  data = data.concat(cashFlow.map((el) => Object.values(el).slice(2, 4).concat('color: grey; opacity: 0.4; stroke-color: black; stroke-width: 2;')));

  return (
    <div>
      <div className="networthcontainer">
      <div className="nameheaders">
      <p className="networth_cash">Net Cash Flow </p>
      </div>
      <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
      </div>
    </div>
    </div>
  );
};

export default CashFlow;
