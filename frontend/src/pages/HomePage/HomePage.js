import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";

import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import FactFinder from "../../components/FactFinder/FactFinder";

const HomePage = (props) => {
    const [user, token] = useAuth();
    

useEffect(() => {
    let mounted = true;
    if (mounted) {
        fetchUserInfo();
    }
    return () => (mounted = false);
    }, [user]
);


 const fetchUserInfo = async () => {
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/userinfo/${id}/`)
    }
 };

  return (
    <div>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <br></br>
        <h2 className="welcome">Welcome Back, {user.first_name}</h2>
        <br></br>
        <h3 className="networth_cash">Net Worth </h3>
        <div>*insert net worth chart here</div>
        <br></br>
        <h3 className="networth_cash">Net Cash Flow </h3>
        <div>*insert net cash flow chart here</div>
        <br></br>
        <h3 className="networth_cash">Recommendations </h3>
        <div>*insert Recommendations here</div>
        <br></br>
        <FactFinder />
        {console.log(user.email)}
      </div>

      <div></div>
    </div>
  );
};

export default HomePage;
