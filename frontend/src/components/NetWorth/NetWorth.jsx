import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import "./NetWorth.css";

const NetWorth = ({netWorth}) => {
  const [user, token] = useAuth();

  
  const options = {
    title: "Net Worth",
    titleColor: "#334A51",
    legend: "none",
    is3d: true,
    lineWidth: 1,
    curveType: "function",
    colors: ["darkblue"],
    crosshair: { trigger: "focus" },
    chartArea: {
      backgroundColor: {
        fill: "rgb(48, 130, 167)",
        fillOpacity: 0.1,
      },
    },
    backgroundColor: {
      fill: "rgb(48, 130, 167)",
      fillOpacity: 0.1,
    },
  };
  
 
  let data = [["Date", "NetWorth"]];


    data = data.concat(
    netWorth.map((el) => Object.values(el).splice(0, 2)).reverse()
  );

  return (
    <>
      <div className="networthcontainer">
        <div className="nameheaders">
  
          <p className="networth_cash">Net Worth ${netWorth[0]["netWorth"]}</p>
          {/* {netWorth[1] ==! undefined ? (<p className={changeInNetWorth >= 0 ? "up" : "down"}>
            {" "}
            (${changeInNetWorth})
          </p>)
          :null } */}
        </div>
        <div className="border">
          <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default NetWorth;
