import "./FactFindingPage.css"
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
const FactFindingPage = (props) => {
    return ( 
    <div>
        <div>{<UserNavBar />}</div>
        <div className="background">

        </div>
    </div> 
    );
}
 
export default FactFindingPage;