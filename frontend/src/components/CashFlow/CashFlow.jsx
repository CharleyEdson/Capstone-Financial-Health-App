import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import UpdateBudgetModal from "../UpdateBudgetModal/UpdateBudgetModal";
import './CashFlow.css'

const CashFlow = ({cashFlow}) => {
  const [user, token] = useAuth();
   

  // useEffect(() => {
  //   fetchCashFlow();
  // }, []);

  // const fetchCashFlow = async () => {
  //   try {
  //     let response = await axios.get(
  //       "http://127.0.0.1:8000/api/cashflow/historicalnetcashflow/",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     ).then(response => {setCashFlow(response["data"]);});
  //   } catch (error) {
  //     console.log(error.response);
  //     <div></div>
  //   }
  // };
// https://developers.google.com/chart/interactive/docs/gallery/linechart
// to style charts
  const options = {
    title: "Cash Flow",
    titleColor: "#334A51",
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
    console.log("test")
    

  return (
    <div>
      {console.log(cashFlow)}
      {cashFlow ? <div className="networthcontainer">
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
    </div> :
    <div> test</div>
    }
      
    </div>
  );
  }
export default CashFlow;
