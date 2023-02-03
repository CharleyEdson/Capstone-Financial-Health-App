import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Budget.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";

import { Chart } from "react-google-charts";
import UpdateBudgetModal from "../../components/UpdateBudgetModal/UpdateBudgetModal";

const Budget = (props) => {
  const [user, token] = useAuth();
  const [currentBudget, setCurrentBudget] = useState([
    { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  ]);
  const [budgets, setBudgets] = useState([
    { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  ]);
  const [showModal, setShowModal] = useState(false)
  const [expenses, setExpenses] = useState([
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
    fetchUserBudget();
    fetchUserExpenses();
  }, []);

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

  let newdate = formatDate();

  const fetchUserBudget = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/budget/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCurrentBudget(response["data"][0]);
      setBudgets(response["data"]);
    } catch (error) {
      console.log(error.response);
    }
  };

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
      setExpenses(response["data"]);
    } catch (error) {
      console.log(error.response);
    }
  };

  
  const options = {
    chart: {
      title: "Budget",
      subtitle: "Months",
      legend: 'none',
    },
  };

  let headers = [["Month", "Over/Under Budget", { role: "style" }],];
  let data = expenses.map((el) => Object.values(el).splice(5, 6))
  let calcbudget = data.map((el) => [el[0],el[1]-currentBudget.budget_value].concat('color: #89D1E6')).reverse()
  let final_data = headers.concat(calcbudget)

  return (
    <div>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <div className="container">
        <h2>Budget Page</h2>
        <div>
          <p>Current Budget: ${currentBudget.budget_value}</p>
        </div>
        <div>
          <p onClick={() => setShowModal(true)}>Need to update your budget? <h3>Click Here</h3></p>
          </div>
        </div>
        <div>
            <UpdateBudgetModal open={showModal} onClose={()=>setShowModal(false)} user={user} token={token}/>
        </div>
        <br></br>
        <div>
          <h3>Over/Under Budget</h3>
          <div>
          <Chart
        chartType="Bar"
        width="80%"
        height="400px"
        data={final_data}
        options={options}
        />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
