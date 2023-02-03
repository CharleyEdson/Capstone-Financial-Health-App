import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const InputAssets = (props) => {
  const [assetType, setAssetType] = useState("Cash");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [user, token] = useAuth();

  async function addUserAssets(userAssets) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/assets/",
      userAssets,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      console.log("user Assets posted.");
    }
  }

  async function updateNetWorth() {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/networth/onceaday/",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let userAssets = {
      asset_type: assetType,
      value: value,
      date: date,
    };
    await addUserAssets(userAssets).then(response => updateNetWorth());
  };




  return (
    <div className="container">
      <br></br>
      <div className="container">
      <ul >For Cash accounts: Think bank accounts, CD's, etc</ul>
      <ul>For Brokerage accounts: Think of any non-retirement investment accounts that you have, ie-robinhood, crypto, etc.</ul>
      <ul>For Retirement accounts: Think of any company retirement plan, ie 401(k), IRA, Roth IRA, etc.</ul>
      <ul>For Real Estate: Think of any homes, or rental properties</ul>
      <ul>For Misc: Think of any other asset you have that keeps it's value.</ul>
      </div>
      <br></br>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div>
          <div className="container">
            <label className="container">
              Please select which asset you'd like to input:
              <div>
                <select
                  value={assetType}
                  onChange={(event) => setAssetType(event.target.value)}>
                  <option value="Cash">Cash Accounts</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Brokerage">Brokerage Accounts</option>
                  <option value="Retirement">Retirement Accounts</option>
                  <option value="Misc">Miscellaneous Assets</option>
                </select>
              </div>
            </label>
          </div>
          <div>
            <label>Please input the value of the asset:</label>
          </div>
          <input
            type="number"
            value={value}
            onChange={(event) => setValue(parseInt(event.target.value))}
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
  );
};

export default InputAssets;
