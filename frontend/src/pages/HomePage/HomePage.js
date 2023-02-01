import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import FactFinder from "../../components/FactFinder/FactFinder";
import NetWorth from "../../components/NetWorth/NetWorth";
import CashFlow from "../../components/CashFlow/CashFlow";
import Recommendations from "../../components/Recommendations/Recommendations";
import Navbar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = (props) => {
  const [user, token] = useAuth();
  const [userInfo, setUserInfo] = useState([
    {
      phone_number: "9999999999",
      age: 30,
      gender: "male",
      occupation: "test",
      risk_level: 6,
      state_living_in: "CA",
      relationship_status: "Single",
      verified_facts: false,
    },
  ]);
  const [userAssets, setUserAssets] = useState([""]);
  const [netWorth, setNetWorth] = useState([""]);
  const [cashFlow, setcashFlow] = useState([""]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/userinfo/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserInfo(response["data"][0]);
    } catch (error) {
      console.log(error.response);
      setUserInfo({
        phone_number: "9999999999",
        age: 30,
        gender: "male",
        occupation: "test",
        risk_level: 6,
        state_living_in: "CA",
        relationship_status: "Single",
        verified_facts: false,
      });
      console.log(userInfo);
    }
  };

  const fetchUserAssets = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/assets/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserAssets(response["data"]);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <UserNavBar />
      <div className={`content ${isOpen ? "push" : ""}`}>
        <div className="background">
          <br></br>
          <div>
            {console.log(userInfo)}
            {userInfo.verified_facts === true ? (
              <div>
                <br></br>
                <br></br>
                <h2 className="welcome">Welcome Back, {user.first_name}</h2>
                <div className="center-component">
                  <NetWorth className="component" />
                </div>
                <br></br>
                <div className="center-component">
                  <CashFlow className="component" />
                </div>
                <br></br>

                <div className="center-component">
                  <Recommendations className="component" />
                </div>
                <br></br>
              </div>
            ) : (
              <FactFinder />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
