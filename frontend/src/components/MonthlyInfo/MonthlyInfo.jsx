import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import InputIncExp from "../InputIncExp/InputIncExp";

const MonthlyInfo = (props) => {
  const [user, token] = useAuth();
  const [historicincexp, setHistoricIncExp] = useState([
    {
      current_income: 11000,
      date: "2023-02-01",
      id: 3,
      current_expense: 8000,
      month: "February",
      user_id: 2,
      year: "2023",
    },
    {
      current_expense: 8000,
      current_income: 11000,
      date: "2023-02-01",
      id: 3,
      month: "February",
      user_id: 2,
      year: "2023",
    },
  ]);
  useEffect(() => {
    fetchUserExpenses();
  }, []);

  function formatMonth() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return month;
  }
  function getMonthName(month) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1];
  }

  let currentMonth = getMonthName(formatMonth());

  function formatYear() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return year;
  }

  let currentYear = formatYear();

  function formatDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  }

  let date = formatDate();

  const fetchUserExpenses = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/currentincexp/historicalcurrents/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setHistoricIncExp(response["data"]);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {historicincexp[0]["month"] === currentMonth ? (
        <div>Please wait until next month to update</div>
      ) : (
        <div>
          <InputIncExp currentYear={currentYear} currentMonth={currentMonth} currentDate={date} />
        </div>
      )}
    </div>
  );
};

export default MonthlyInfo;
