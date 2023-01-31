import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/NavBar/NavBar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
    }
    return () => (mounted = false);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="background">
      <div>
        <Navbar />
      </div>
      <div className="contentcontainer">
        <p>Financial Literacy...</p>
        <p>Starts Here</p>
        <br></br>
        <button className="signup" onClick={() => navigate("/register")}>
          Sign Up Here
        </button>
        <br></br>
        <p>FinFitness will help</p>
        <p>get your finances in shape!</p>
        <br></br>
        <p>View your finances like never before</p>
        <br></br>
        <p>One app does it all:</p>
        <br></br>
        <p>Displays your finances</p>
        <p>Visualizes your assets</p>
        <p>And helps you stick to a budget</p>
        <br></br>
        <button className="signup" onClick={() => navigate("/register")}>
          Sign Up Here
        </button>
      </div>
    </div>
  );
};

export default MainPage;
