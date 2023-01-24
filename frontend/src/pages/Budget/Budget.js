import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Budget.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import { Slider } from '@material-ui/core';

const Budget = (props) => {
  const [user, token] = useAuth();
  const [budget, setBudget] = useState([
    { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  ]);

  useEffect(() => {
    fetchUserBudget();
  }, []);

  const fetchUserBudget = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/budget/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setBudget(response["data"][0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <h2>Budget Page</h2>
        <div>
          <p>Current Budget: {budget.budget_value}</p>
        </div>
        <div>
          <p>Need to update your budget? Click here.</p>
        </div>
        {/* If user clicks udpate budget, then it will pop up the below modal. */}
        <div>
          <p>Please use the slider to pick your monthly budget.</p>
          <p>Based upon your inputted information, below are the recommended values for expenses to help you determine your budget.</p>
        <p> Mortgage/Rent: $4,000/month</p>
        <p> Food: $1,000/month</p>
        <p> Investing: $1,000/month</p>
        <p> Discretionary/fun expendiures: $2,000/month</p>
        </div>
        <Slider></Slider>
        {/* This ends the modal pop up */}
      </div>
    </div>
  );
};

export default Budget;
