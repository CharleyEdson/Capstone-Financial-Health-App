import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import "./NetWorth.css";

const NetWorth = () => {
  const [user, token] = useAuth();
  const [netWorth, setNetWorth] = useState([
    { date: "2023-01-19", netWorth: 4160000, id: 5, user_id: 2 },
    { date: "2023-01-19", netWorth: 4260000, id: 6, user_id: 2 },
  ]);

  useEffect(() => {
    fetchNetWorth();
  }, []);

  const options = {
    title: "Net Worth",
    legend: "none",
    is3d: true,
    lineWidth: 1,
    curveType: 'function',
    colors:['darkblue'],
    crosshair: { trigger: "focus" },
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
    
  };
  const fetchNetWorth = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/networth/historicalnetworth/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setNetWorth(response["data"]);
    } catch (error) {
      console.log(error.response);
    }
  };

  let data = [["Date", "NetWorth"]];
  let changeInNetWorth = netWorth[0]["netWorth"] - netWorth[1]["netWorth"];
  data = data.concat(
    netWorth.map((el) => Object.values(el).splice(0, 2)).reverse()
  );
  return (
    <>
      <div className="networthcontainer">
        <div className="nameheaders">
        <p className="networth_cash">
          Net Worth ${netWorth[0]["netWorth"]}</p><p> </p><p className={changeInNetWorth >0 ? "up" : "down"}> (${changeInNetWorth})</p>
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
