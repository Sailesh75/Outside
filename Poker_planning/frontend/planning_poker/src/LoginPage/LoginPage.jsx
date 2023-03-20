import React, { useState, useContext } from "react";
import "./_LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import PasswordToggle from "../Components/PasswordToggle";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedInContext } from "../App";

const LoginPage = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const navigate = useNavigate();
  const [logInDetail, setLogInDetail] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLogInDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter the value in";
    if (logInDetail.email == null || logInDetail.email == "") {
      isProceed = false;
      errormessage += " Email";
    }
    if (logInDetail.password == null || logInDetail.password == "") {
      isProceed = false;
      errormessage += " Password";
    }
    if (!isProceed) {
      toast.warning(errormessage);
    }

    return isProceed;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isValidate()) {
      try {
        const response = await axios.post(
          "http://localhost/poker_planning/api/login.php",
          {
            email: logInDetail.email,
            password: logInDetail.password,
          }
        );
        if (response.data["success"]) {
          const userId = response.data["user_id"];
          localStorage.setItem("user_id", userId);
          // setIsLoggedIn(true);
          navigate("/dashboard");
        } else {
          toast.warning("Invalid email or password");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="login-page-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={logInDetail.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type={PasswordInputType}
          id="password"
          name="password"
          value={logInDetail.password}
          onChange={handleInputChange}
        />
        <span className="password-toggle-icon">{ToggleIcon}</span>
        <button className="signIn-button" type="submit">
          Submit
        </button>
      </form>
      <p className="signUp_info">
        Don't have an account?{" "}
        <span className="signUp_info--link">
          <Link to="/signup">Sign up</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
