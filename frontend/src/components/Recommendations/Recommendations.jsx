import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import "./Recommendations.css";

const Recommendations = ({income}) => {
  const [user, token] = useAuth();

  // async function fetchIncome() {
  //   try {
  //     let response = await axios.get("http://127.0.0.1:8000/api/income/", {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     setIncome(response["data"][0]);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  return (
    <div>
      <div className="recommendationscontainer">
        <p className="header">Recommendations</p>
        <p className="header">
          Based upon your monthly income of <p className="income"> (${parseInt(income.value)}):</p>
        </p>
        <div className="recs">
        <li>
          Spend a maximum on monthly
          rent/mortgage expenses of: ${parseInt(0.36 * income.value)}
        </li>
        <li>
          Invest monthly the following total in retirement and regular accounts: ${parseInt(0.2 * income.value)}/month
        </li>
        <li>
          Allocate the following monthly amount for discretionary
          expenses, like entertainment and or traveling: ${parseInt(0.3 * income.value)}
        </li>
        <li>
          Allocate the following monthly amount for other essentials
          like food, health care, transportation: ${parseInt(0.14 * income.value)}
        </li>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
