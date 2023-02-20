import React from "react";
import PasswordToggle from "./PasswordToggle";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
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
            <form action="#">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
                required
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
                  required
                />
              </div>
              <span className="forgot-password">Forgot Password?</span>
              <span className="password-toggle-icon">{ToggleIcon}</span>
              <div style={{ marginBottom: "2.4rem" }}>
                <input type="checkbox" id="remember" name="remember" />
                <span style={{ marginLeft: "1.2rem", marginBottom: "0.3rem" }}><label htmlFor="remember">Remember Me</label></span>
              </div>
              <input type="submit" value="Log in" />
            </form>
            <p>
              Don't have an account?{" "}
              <span className="sign-up">
                <a href="#">Sign up</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
