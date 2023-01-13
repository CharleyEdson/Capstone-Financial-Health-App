import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import "./FactFinder.css";
import useAuth from "../../hooks/useAuth";

const FactFinder = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");
  const [occupation, setOccupation] = useState("");
  const [stateLivedIn, setStateLivedIn] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [riskAppetite, setRiskAppetite] = useState(0);
  const [budget, setBudget] = useState(0);
  const [budgetTimeframe, setBudgetTimeframe] = useState("");
  const [verified, setVerified] = useState(false);
  const [user, token] = useAuth();

  async function addUserInfo(newUserInfo) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/userinfo/",
      newUserInfo,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      console.log("user info created.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let newUserInfo = {
      phone_number: phoneNumber,
      age: age,
      gender: gender,
      occupation: occupation,
      risk_level: riskAppetite,
      state_living_in: stateLivedIn,
      relationship_status: relationshipStatus,
      budget_value: budget,
      budget_timeframe: budgetTimeframe,
      verified_facts: verified,
    };
    addUserInfo(newUserInfo);
    console.log(newUserInfo.phoneNumber);
  }

  return (
    <div>
      <div>
        <p>Fact Finder</p>
      </div>
      <p>To Effectively use this app...</p>
      <p>We need to learn more about you.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number</label>
        </div>
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        ></input>
        
        <div>
          <label>Age</label>
        </div>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(parseInt(event.target.value))}
        ></input>
        <div>
        <label>
          Gender
          <div>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
          </div>
        </label>
        </div>
        <div>
          <label>Occupation</label>
        </div>
        <input
          type="text"
          value={occupation}
          onChange={(event) => setOccupation(event.target.value)}
        ></input>
        <div>
          <label>State Living In</label>
        </div>
        <input
          type="text"
          value={stateLivedIn}
          onChange={(event) => setStateLivedIn(event.target.value)}
        ></input>
        <div>
          <label>Relationship Status</label>
        </div>
        <input
          type="text"
          value={relationshipStatus}
          onChange={(event) => setRelationshipStatus(event.target.value)}
        ></input>
        <div>
          <label>Risk Appetite</label>
          <p className="riskexplanation">
            (Number 1-10. 1 being least risky, 10 being most risky)
          </p>
        </div>
        <input
          type="number"
          value={riskAppetite}
          onChange={(event) => setRiskAppetite(parseInt(event.target.value))}
        ></input>
        <div>
          <label>
            Do you want a weekly or monthly budget?
            <div>
              <select
                value={budgetTimeframe}
                onChange={(event) => setBudgetTimeframe(event.target.value)}
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </label>
        </div>
        <div>
          <label>
            How much do you want to spend based on the time frame you picked
            above? This can be changed later.
          </label>
        </div>
        <input
          type="number"
          value={budget}
          onChange={(event) => setBudget(parseInt(event.target.value))}
        ></input>
        <div>
          <label>
            Please click here to verify you've inputed all the data correctly
          </label>
          <div>
            <input
              type="radio"
              value={verified}
              onChange={(event) => setVerified(!verified)}
            />
          </div>
        </div>

        <br></br>
        <div>
          <button type="submit">Submit Info</button>
        </div>
      </form>
    </div>
  );
};

export default FactFinder;
