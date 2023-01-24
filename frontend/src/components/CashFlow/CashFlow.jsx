import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

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
    }
  };

  const options = {
    chart: {
      title: "Cash Flow",
      subtitle: "Months are by numbers",
      legend: 'none',
    },
  };

  let data = [["Month", "Net Cash Flow"]];

  data = data.concat(cashFlow.map((el) => Object.values(el).slice(2, 4)));

  return (
    <div>
      <h3 className="networth_cash">Net Cash Flow </h3>
      <Chart
        chartType="Bar"
        width="80%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default CashFlow;
