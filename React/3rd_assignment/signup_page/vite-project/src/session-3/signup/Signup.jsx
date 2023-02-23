import { React } from "react";
import PasswordToggle from "./PasswordToggle";
import { useState } from "react";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [fullName, fullNameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [confirmPassword, confirmPasswordChange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full name: ", fullName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
    fullNameChange("");
    emailChange("");
    passwordChange("");
    confirmPasswordChange("");
  };

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
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">FullName</label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  required
                  value={fullName}
                  onChange={(e) => fullNameChange(e.target.value)}
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
                  value={email}
                  onChange={(e) => emailChange(e.target.value)}
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
                  value={password}
                  onChange={(e) => passwordChange(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => confirmPasswordChange(e.target.value)}
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
