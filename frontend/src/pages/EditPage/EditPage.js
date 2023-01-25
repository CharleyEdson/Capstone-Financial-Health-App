import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./EditPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";

const EditPage = (props) => {
  return (
    <>
      <div>{<UserNavBar />}</div>
      <div className="background">
        <div class="buttons">
          <button>Input Monthly Info</button>
          <button>Assets / Liabilities</button>
          <button>Budget</button>
          <button>User Info</button>
        </div>
      </div>
    </>
  );
};

export default EditPage;
