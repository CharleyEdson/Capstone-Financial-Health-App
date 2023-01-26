import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./EditPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import InputAssets from "../../components/InputAssets/InputAssets";
import InputLiabilities from "../../components/InputLiabilities/InputLiabilities";
import Budget from "../Budget/Budget";
import FactFinder from "../../components/FactFinder/FactFinder";
import MonthlyInfo from "../../components/MonthlyInfo/MonthlyInfo";

const EditPage = (props) => {

  const [editButtons, setEditButons] = useState(true);
  const [monthlyInfo, setMonthlyInfo] = useState(false);
  const [assetsLiabilities, setAssetsLiabilities] = useState(false);
  const [updateBudget, setUpdateBudget] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

function handleEditButtons() {
    setEditButons(true);
    setMonthlyInfo(false);
    setAssetsLiabilities(false);
    setUpdateBudget(false);
    setUserInfo(false);
} 
function handleMonthlyInfoSubmit() {
    setEditButons(false);
    setMonthlyInfo(true);
    setAssetsLiabilities(false);
    setUpdateBudget(false);
    setUserInfo(false);
} 
function handleALSubmit() {
    setEditButons(false);
    setMonthlyInfo(false);
    setAssetsLiabilities(true);
    setUpdateBudget(false);
    setUserInfo(false);
} 
function handleBudgetSubmit() {
    setEditButons(false);
    setMonthlyInfo(false);
    setAssetsLiabilities(false);
    setUpdateBudget(true);
    setUserInfo(false);
} 
function handleUserInfoSubmit() {
    setEditButons(false);
    setMonthlyInfo(false);
    setAssetsLiabilities(false);
    setUpdateBudget(false);
    setUserInfo(true);
} 


  return (
    <>
      <div>{<UserNavBar />}</div>
      <div className="background">
        {editButtons === true ? (
            <div>
            <div class="buttons">
              <button onClick={handleMonthlyInfoSubmit}>
                Input Monthly Info
              </button>
              <button onClick={handleALSubmit}>Update or Add Assets & Liabilities</button>
              <button onClick={handleBudgetSubmit}>Budget</button>
              <button onClick={handleUserInfoSubmit}>User Info</button>
            </div>
          </div>
        ) : (
            <></>
        )}
        {monthlyInfo === true ? (
          <div>
            <h1>Please enter updated information here </h1>
            <MonthlyInfo />
            <br></br>
            <button onClick={handleEditButtons}>Complete</button>
          </div>
        ) : (
          <>
          </>
        )}
        {assetsLiabilities === true ? (
          <div>
            <h1>Please enter updated assets/liabilities here, or new ones </h1>
            <InputAssets />
            <InputLiabilities />
            <br></br>
            <button onClick={handleEditButtons}>Complete</button>
          </div>
        ) : (
          <>
          </>
        )}
        {updateBudget === true ? (
          <div>
            <h1>Please enter your new Budget </h1>
            <Budget />
            <button onClick={handleEditButtons}>Complete</button>
            <br></br>
          </div>
        ) : (
          <>
          </>
        )}
        {/*  Make userInfo a new component and only make it a patch/put request. 
        Don't let them create a brand new one.*/}
        {userInfo === true ? (
          <div>
            <h1>Please Update your user Info </h1>
            <FactFinder />
            <button onClick={handleEditButtons}>Complete</button>
            <br></br>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </>
  );
};

export default EditPage;


