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
import FactFinderUpdate from "../../components/FactFinder/FactFinderUpdate";
import MonthlyInfo from "../../components/MonthlyInfo/MonthlyInfo";
import ProjectedIncome from "../../components/ProjectedIncome/ProjectedIncome";

const EditPage = (props) => {

  const [editButtons, setEditButons] = useState(true);
  const [monthlyInfo, setMonthlyInfo] = useState(false);
  const [assetsLiabilities, setAssetsLiabilities] = useState(false);
  const [updateBudget, setUpdateBudget] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [projectedIncome, setProjectedIncome] = useState(false)
  const [user, token] = useAuth();

  const [userInfoObject, setUserInfoObject] = useState({});
  // const [currentBudget, setCurrentBudget] = useState([
  //   { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  // ]);
  // const [budgets, setBudgets] = useState([
  //   { id: 1, budget_value: 8100, date: "2023-01-23", user_id: 2 },
  // ]);
  // const [expenses, setExpenses] = useState([
  //   {
  //     current_income: 11000,
  //     date: "2023-02-01",
  //     id: 3,
  //     current_expense: 8000,
  //     month: "February",
  //     user_id: 2,
  //     year: "2023",
  //   },
  //   {
  //     current_expense: 8000,
  //     current_income: 11000,
  //     date: "2023-02-01",
  //     id: 3,
  //     month: "February",
  //     user_id: 2,
  //     year: "2023",
  //   },
  // ]);

  useEffect(() => {
    fetchUserInfo();
    // fetchUserBudget();
    // fetchUserExpenses();
  }, []);


  async function fetchUserInfo() {
    try {
        let response = await axios.get(
            "http://127.0.0.1:8000/api/userinfo/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setUserInfoObject(response["data"][0]);
      } catch (error) {
        console.log(error.response);
      }
    };

function handleEditButtons() {
    setEditButons(true);
    setMonthlyInfo(false);
    setAssetsLiabilities(false);
    setUpdateBudget(false);
    setUserInfo(false);
    setProjectedIncome(false);
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
function handleProjectedIncomeSubmit() {
    setEditButons(false);
    setMonthlyInfo(false);
    setAssetsLiabilities(false);
    setUpdateBudget(false);
    setUserInfo(false);
    setProjectedIncome(true);
} 

// const fetchUserBudget = async () => {
//   try {
//     let response = await axios.get(`http://127.0.0.1:8000/api/budget/`, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     setCurrentBudget(response["data"][0]);
//     setBudgets(response["data"]);
//   } catch (error) {
//     console.log(error.response);
//   }
// };

// const fetchUserExpenses = async () => {
//   try {
//     let response = await axios.get(
//       `http://127.0.0.1:8000/api/currentincexp/historicalcurrents/`,
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     setExpenses(response["data"]);
//   } catch (error) {
//     console.log(error.response);
//   }
// };


  return (
    <>
      <UserNavBar />
      <br></br>
      <div className="background">
        <br></br>
        {editButtons === true ? (
            <div>
            <div className="buttons">
              <button onClick={handleMonthlyInfoSubmit}>
                Input Monthly Info
              </button>
              <button onClick={handleALSubmit}>Update or Add Assets & Liabilities</button>
              <button onClick={handleBudgetSubmit}>Budget</button>
              <button onClick={handleUserInfoSubmit}>User Info</button>
              <button onClick={handleProjectedIncomeSubmit}>Projected Income</button>
            </div>
          </div>
        ) : (
            <></>
        )}
        {monthlyInfo === true ? (
          <div className="container">
            <br></br>
            <h1 className="container">Please enter updated information here </h1>
            <MonthlyInfo />
            <br></br>
            <button onClick={handleEditButtons} className="container">Complete</button>
          </div>
        ) : (
          <>
          </>
        )}
        {assetsLiabilities === true ? (
          <div className="container">
            <h1>Please enter updated assets/liabilities here, or new ones:</h1>
            <InputAssets />
            <InputLiabilities />
            <br></br>
            <button onClick={handleEditButtons} className="container">Complete</button>
          </div>
        ) : (
          <>
          </>
        )}
        {updateBudget === true ? (
          <div>
            <h1 className="container">Please enter your new Budget </h1>
            <Budget />
            <button onClick={handleEditButtons}>Complete</button>
            <br></br>
          </div>
        ) : (
          <>
          </>
        )}
        {userInfo === true ? (
          <div className="container">
            <h1>Please Update your user Info </h1>
            <FactFinderUpdate userInfo={userInfoObject} />
            <br></br>
            <button onClick={handleEditButtons}>Complete</button>
            <br></br>
          </div>
        ) : (
          <>
          </>
        )}
        {projectedIncome === true ? (
          <div className="container">
            <br></br>
            <h1>What is your Projected Income for the year? </h1>
            <ProjectedIncome />
            <br></br>
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


