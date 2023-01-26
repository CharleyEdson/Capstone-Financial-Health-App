import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const InputIncExp = ({currentMonth, currentYear, currentDate}) => {
  const [user, token] = useAuth();
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(0);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [date, setDate] = useState(currentDate);

  async function postIncExp(currents) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/currentincexp/createcurrents/",
      currents,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      console.log("user current inc & exps posted.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let currents = {
      current_income: monthlyIncome,
      current_expense: monthlyExpense,
      year: year,
      month: month,
      date: date,
    };
    postIncExp(currents);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Please enter your total Income/cash flow for the previous month:
          </label>
        </div>
        <input type="number"
        value={monthlyIncome}
        onChange={(event) => setMonthlyIncome(event.target.value)}>
        </input>
        <div>
          <label>
            Please enter your total Expenses for the previous month:
          </label>
        </div>
        <input type="number"
        value={monthlyExpense}
        onChange={(event) => setMonthlyExpense(event.target.value)}>
        </input>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputIncExp;
