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
          <p className="login_text">Sign up to Dashboard Kit</p>
          <div className="form">
            <form action="#">
              <div>
                <label htmlFor="email">Fullname</label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  required
                />
              </div>
              <div style={{ marginTop: "1.2rem" }}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div style={{ marginTop: "1.2rem" }}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type={PasswordInputType}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span className="password-toggle-icon">{ToggleIcon}</span>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <label htmlFor="password">CONFIRM PASSWORD</label>
                <br />
                <input
                  type={PasswordInputType}
                  name="confirm password"
                  placeholder="Confirm Password"
                  required
                />
                <span className="password-toggle-icon">{ToggleIcon}</span>
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
