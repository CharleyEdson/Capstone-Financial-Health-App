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
        <p className="title">Financial Fitness...</p>
        <p className="title">Starts Here</p>
        <br></br>
        <button className="signup" onClick={() => navigate("/register")}>
          Sign Up Here
        </button>
        <br></br>
        <div className="box">
          <h2 className="localtitle">Features:</h2>
          <p>Display your finances</p>
          <p>Visualize your assets</p>
          <p>Helps you stick to a budget</p>
        </div>
        <br></br>
        <button className="signup" onClick={() => navigate("/register")}>
          Sign Up Here
        </button>
      </div>
    </div>
  );
};

export default MainPage;
