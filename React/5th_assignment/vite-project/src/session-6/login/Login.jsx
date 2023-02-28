import React, { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const navigate = useNavigate();
  const [logInDetail, setLogInDetail] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    setLogInDetail((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "rememberMe" ? !prev.rememberMe : e.target.value,
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
      console.log("hello", logInDetail);
      const userDataResponse = await axios.get(
        `https://react-project-7da67-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?orderBy="email"&equalTo="${logInDetail.email}"&orderBy="password"&equalTo="${logInDetail.password}"`
      );
      const userData = userDataResponse.data;
      if (Object.keys(userData).length === 0) {
        toast.error("LogIn error");
      } else {
        toast.success("Log in successful");
        navigate("/dashboard");
      }
    }
  };
  return (
    <>
      <div className="login">
        <div className="login_container">
          <figure>
            <img src="logo.png" alt="company_logo" />
          </figure>
          <p className="login_title">Dashboard Kit</p>
          <p className="login_text">Log In to Dashboard Kit</p>
          <p className="login_value">Enter your email and password</p>
          <div className="form">
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
                value={logInDetail.email}
                onChange={handleInputChange}
              />
              <br />
              <div style={{ marginTop: "2.4rem" }}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type={PasswordInputType}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={logInDetail.password}
                  onChange={handleInputChange}
                />
              </div>
              <span className="forgot-password">Forgot Password?</span>
              <span className="password-toggle-icon">{ToggleIcon}</span>
              <div style={{ marginBottom: "2.4rem" }}>
                <input type="checkbox" id="remember" name="remember" />
                <span style={{ marginLeft: "1.2rem", marginBottom: "0.3rem" }}>
                  <label htmlFor="remember">Remember Me</label>
                </span>
              </div>
              <input type="submit" value="Log in" />
            </form>
            <p>
              Don't have an account?{" "}
              <span className="sign-up">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
