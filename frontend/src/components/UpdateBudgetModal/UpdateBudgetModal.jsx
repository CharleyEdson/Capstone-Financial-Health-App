import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Slider, Box } from "@material-ui/core";

const UpdateBudgetModal = ({open, onClose, user, token}) => {
    const [value, setValue] = useState(20);
    const [income, setIncome] = useState(0)
    useEffect(() => {
        fetchIncome();
      }, []);
    if (!open) return null;

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
      <div>
        <div>
            
          <p>Please use the slider to pick your monthly budget.</p>
          <p>
            Based upon your inputted information, below are the recommended
            values for expenses to help you determine your budget.
          </p>
          <p> Mortgage/Rent: ${parseInt(.36 * income.value)}/month</p>
          <p> Other Essentials(ie: food, health care, transportation): ${parseInt(.14 * income.value)}/month</p>
          <p> Investing: ${parseInt(.2 * income.value)}</p>
          <p> Discretionary/fun expendiures: ${parseInt(.3 * income.value)}/month</p>
          <p> For a total of: {parseInt(income.value)}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Box display="Flex" flexdirection="column m={10}">
            <Slider
              value={value}
              onChange={changeValue}
              style={{ width: 300 }}
              min={0}
              max={income.value * 1.3}
              defaultValue={20}
              step={50}
              getAriaValueText={getText}
              valueLabelDisplay="auto"
            />
          </Box>
          <button type="submit">Submit</button>
          <p onClick={onClose}> Close </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateBudgetModal;
