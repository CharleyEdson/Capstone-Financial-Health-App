import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Budget.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import { Slider, Box } from "@material-ui/core";
import {chart} from "react-google-charts"

const Budget = (props) => {
  const [user, token] = useAuth();
  const [currentBudget, setCurrentBudget] = useState([
    { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  ]);
  const [Budgets, setBudgets] = useState([
    { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  ]);
  const [value, setValue] = useState(20);

  useEffect(() => {
    fetchUserBudget();
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
      let response = await axios.get(
        `http://127.0.0.1:8000/api/budget/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setCurrentBudget(response["data"][0]);
      setBudgets(response["data"])
    } catch (error) {
      console.log(error.response);
    }
  };

  const changeValue = (event, value) => {
    setValue(value);
  };

  async function adduserBudget(userBudget) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/budget/",
      userBudget,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      console.log("user Budget posted.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userBudget = {
      budget_value: value,
      date: newdate,
    };
    console.log(userBudget);
    adduserBudget(userBudget);
  }

  const getText = (value) => `${value}`;
  return (
    <div>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <h2>Budget Page</h2>
        <div>
          <p>Current Budget: {currentBudget.budget_value}</p>
        </div>
        <div>
          <p>Need to update your budget? Click here.</p>
        </div>
        {/* If user clicks udpate budget, then it will pop up the below modal. */}
        <div>
          <div>
            <p>Please use the slider to pick your monthly budget.</p>
            <p>
              Based upon your inputted information, below are the recommended
              values for expenses to help you determine your budget.
            </p>
            <p> Mortgage/Rent: $4,000/month</p>
            <p> Food: $1,000/month</p>
            <p> Investing: $1,000/month</p>
            <p> Discretionary/fun expendiures: $2,000/month</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Box display="Flex" flexdirection="column m={10}">
              <Slider
                value={value}
                onChange={changeValue}
                style={{ width: 300 }}
                min={0}
                max={50000}
                defaultValue={20}
                step={1}
                getAriaValueText={getText}
                valueLabelDisplay="auto"
              />
            </Box>
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* This ends the modal pop up */}
        <br></br>
        <div>

            <h3>Over/Under Budget</h3>
        </div>
      </div>
    </div>
  );
};

export default Budget;
