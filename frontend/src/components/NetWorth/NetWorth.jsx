import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

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
    corsshair: { trigger: "focus" },
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
    <div>
      <div>
        <h3 className="networth_cash">
          Net Worth ${netWorth[0]["netWorth"]} ({changeInNetWorth})
        </h3>
        <div>
          <Chart
            chartType="LineChart"
            width="80%"
            height="200px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default NetWorth;
