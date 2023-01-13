import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./UserNavBar.css";

const UserNavBar  = (props) => {
    return ( 
        <div className="usernavBar">
            <li className="brand">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <b className="name">FinFitness</b>
          </Link>
        </li>
        </div>
     );
}
 
export default UserNavBar;