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

const HomePage = (props) => {
  const [user, token] = useAuth();
  const [userInfo, setUserInfo] = useState([""]);
  const [userAssets, setUserAssets] = useState([""]);
  const [netWorth, setNetWorth] = useState([""]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchUserInfo();
    //   fetchUserAssets();
      fetchNetWorth();
    }
    return () => (mounted = false);
  }, [user]);

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

  const fetchNetWorth = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/networth/historicalnetworth/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then(response=>setNetWorth(response["data"]));

    } catch (error) {
      console.log(error.response);
    }
  };
console.log(netWorth)

  return (
    <div>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <br></br>
        <div>
          {userInfo ? (
            <div>
              <h2 className="welcome">Welcome Back, {user.first_name}</h2>
              <br></br>
              <NetWorth networth={netWorth} />                  
              <br></br>
              <CashFlow />
              <br></br>
              <h3 className="networth_cash">Recommendations </h3>
              <div>*insert Recommendations here</div>
              <br></br>
            </div>
          ) : (
            <FactFinder />
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default HomePage;
