import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Navbar from "../../components/NavBar/NavBar";
import { useNavigate, Link } from "react-router-dom";
import './RegisterPage.css'

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="background">
      <div>
        <Navbar />
      </div>
      {/* If i use className='Container', it centeres content. */}
      <div >
      <form className="form" onSubmit={handleSubmit}>
        <label className="titles">
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="titles">
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button className="registerbutton">Register</button>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        
      </form>
      </div>
    </div>
    
  );
};

export default RegisterPage;
