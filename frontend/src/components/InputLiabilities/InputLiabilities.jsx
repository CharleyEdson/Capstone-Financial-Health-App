import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const InputLiabilities = (props) => {
  const [type_of_liability, setType_of_liability] = useState("Mortgage");
  const [value, setValue] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [date, setDate] = useState("");
  const [user, token] = useAuth();

  async function addUserLiabilities(userLiabilities) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/liabilities/",
      userLiabilities,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      console.log("user liabilities posted.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userLiabilities = {
      type_of_liability: type_of_liability,
      value: value,
      monthly_payment: monthlyPayment,
      date: date,
    };
    addUserLiabilities(userLiabilities);
  }

  return (
    <div>   
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>
              Please select which liability you'd like to input:
              <div>
                <select
                  value={type_of_liability}
                  onChange={(event) => setType_of_liability(event.target.value)}
                >
                  <option value="Mortgage">Mortgage</option>
                  <option value="Auto Loan">Auto Loan</option>
                  <option value="Student Loan">Student Loan</option>
                  <option value="Credit Card Loan">Credit Card Loan</option>
                  <option value="Misc">Miscellaneous Loans</option>
                </select>
              </div>
            </label>
          </div>
          <div>
            <label>Please input the value of the Liability:</label>
          </div>
          <input
            type="number"
            value={value}
            onChange={(event) => setValue(parseInt(event.target.value))}
          ></input>
          <div>
            <label>Please input the monthly Payment:</label>
          </div>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(event) => setMonthlyPayment(parseInt(event.target.value))}
          ></input>
          <div> 
            <label>Please input the Date of value for the asset:</label>
          </div>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Submit Info</button>
        </div>
      </form>
    </div>
  )
  
 
};

export default InputLiabilities;
