import React, { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [fullname, fullnameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [confirmpassword, confirmpasswordChange] = useState("");
  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter the value in";
    if (fullname == null || fullname == "") {
      isProceed = false;
      errormessage += " Fullname";
    }
    if (email == null || email == "") {
      isProceed = false;
      errormessage += " Email";
    }
    if (password == null || password == "") {
      isProceed = false;
      errormessage += " Password";
    }
    if (confirmpassword == null || confirmpassword == "") {
      isProceed = false;
      errormessage += " ConfirmPassword";
    }

    if (!isProceed) {
      toast.warning(errormessage);
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        isProceed = true;
        if (password != confirmpassword) {
          isProceed = false;
        toast.warning("Passwords doesn't match");

        }
      } else {
        isProceed = false;
        toast.warning("Please enter valid email");
      }
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { fullname, email, password, confirmpassword };
    if (isValidate()) {
      fetch("http://localhost:8000/Users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered Succcessfully!!");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Registration failed");
        });
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signup_container">
          <figure>
            <img src="logo.png" alt="company_logo" />
          </figure>
          <p className="signup_title">Dashboard Kit</p>
          <p className="signup_text">Sign up to Dashboard Kit</p>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Fullname</label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => fullnameChange(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "1.2rem" }}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
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
                  value={password}
                  onChange={(e) => passwordChange(e.target.value)}
                />
                <span className="password-toggle-icon2">{ToggleIcon}</span>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <label htmlFor="password">CONFIRM PASSWORD</label>
                <br />
                <input
                  type={PasswordInputType}
                  name="confirm password"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => confirmpasswordChange(e.target.value)}
                />
                <span className="password-toggle-icon2">{ToggleIcon}</span>
              </div>
              <input type="submit" value="Log in" />
            </form>
            <p>
              Already have account?{" "}
              <span className="sign-up">
                <Link to="/">Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
