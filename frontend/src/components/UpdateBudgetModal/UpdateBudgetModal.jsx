import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Slider, Box } from "@material-ui/core";

const UpdateBudgetModal = ({open, onClose, user, token}) => {
    const [value, setValue] = useState(20);
    if (!open) return null;


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
          <p onClick={onClose}> Close </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateBudgetModal;
