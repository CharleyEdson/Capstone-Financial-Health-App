import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import FactFinder from "../../components/FactFinder/FactFinder";
import NetWorth from "../../components/NetWorth/NetWorth";

const HomePage = (props) => {
  const [user, token] = useAuth();
  const [userInfo, setUserInfo] = useState([""]);
  const [userAssets, setUserAssets] = useState([""]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchUserInfo();
      fetchUserAssets();
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
      
      console.log(response["data"]);
      setUserAssets(response["data"]);

    } catch (error) {
      console.log(error.response);
    }
  };




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
              <h3 className="networth_cash">Net Worth </h3>
              <div>
                {userAssets[0]['asset_type'] !== null ? (
                  <div>
                    <Link to="/monthlyinfo">
                      not null Add your Asset/Liability info here
                      {/* {userAssets[2]['asset_type']} */}
                    </Link>
                    <div>
                  </div>
                  </div>
                ) : (
                  <Link to="/monthlyinfo">
                    Add your Asset/Liability info here
                  </Link>
                )}
              </div>
                    <NetWorth userAssets={userAssets} />
              <br></br>
              <h3 className="networth_cash">Net Cash Flow </h3>
              <div>*insert net cash flow chart here</div>
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
