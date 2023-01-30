import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";

const Recommendations = (props) => {
    const [user, token] = useAuth();
    const [income, setIncome] = useState(0)
    useEffect(() => {
        fetchIncome();
      }, []);
    

    async function fetchIncome() {
        try {
            let response = await axios.get(
                "http://127.0.0.1:8000/api/income/",
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            );
            setIncome(response["data"][0]);
          } catch (error) {
            console.log(error.response);
          }
        };
    
    return ( 
        <div>
            <h1>Based upon your monthly income of ${parseInt(income.value)}, you should:</h1>
            <li>
                Spend a maximum of ${parseInt(.36 * income.value)} on monthly rent/mortgage expenses.
            </li>
            <li>
                Invest ${parseInt(.2 * income.value)}/month for your retirement funds and/or any other investment accounts that you have.
            </li>
            <li>
                Allocate ${parseInt(.3 * income.value)}/month for discretionary expenses, like entertainment and or traveling. 
            </li>
            <li>
                Allocate ${parseInt(.14 * income.value)}/month for other essentials like food, health care, transportation, etc.
            </li>
            

        </div>
     );
}
 
export default Recommendations;