import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";

import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import FactFinder from "../../components/FactFinder/FactFinder";

const HomePage = (props) => {
  const [user, token] = useAuth();
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
      </div>

      <div></div>
    </div>
  );
};

export default HomePage;
