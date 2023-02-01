import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import "./Recommendations.css";

const Recommendations = (props) => {
  const [user, token] = useAuth();
  const [income, setIncome] = useState(0);
  useEffect(() => {
    fetchIncome();
  }, []);

  async function fetchIncome() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/income/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setIncome(response["data"][0]);
    } catch (error) {
      console.log(error.response);
      <div></div>
    }
  }

  return (
    <div>
      <div className="recommendationscontainer">
        <p className="header">Recommendations</p>
        <p className="header">
          Based upon your monthly income of <p className="income"> (${parseInt(income.value)})</p>, you
          should:
        </p>
        <div className="recs">
        <li>
          Spend a maximum of ${parseInt(0.36 * income.value)} on monthly
          rent/mortgage expenses.
        </li>
        <li>
          Invest ${parseInt(0.2 * income.value)}/month for your retirement funds
          and/or any other investment accounts that you have.
        </li>
        <li>
          Allocate ${parseInt(0.3 * income.value)}/month for discretionary
          expenses, like entertainment and or traveling.
        </li>
        <li>
          Allocate ${parseInt(0.14 * income.value)}/month for other essentials
          like food, health care, transportation, etc.
        </li>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
