import { React } from "react";
import PasswordToggle from "./PasswordToggle";
import { useState } from "react";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <div style={{ marginTop: "2.4rem" }}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type={PasswordInputType}
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
