import React, { useState } from "react";
import "./_SignupPage.scss";
import { Link, useNavigate } from "react-router-dom";
import PasswordToggle from "../Components/PasswordToggle";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter the value in";
    if (signUpDetails.name == null || signUpDetails.name == "") {
      isProceed = false;
      errormessage += " name";
    }
    if (signUpDetails.email == null || signUpDetails.email == "") {
      isProceed = false;
      errormessage += " Email";
    }
    if (signUpDetails.password == null || signUpDetails.password == "") {
      isProceed = false;
      errormessage += " Password";
    }
    if (
      signUpDetails.confirmPassword == null ||
      signUpDetails.confirmPassword == ""
    ) {
      isProceed = false;
      errormessage += " confirmPassword";
    }

    if (!isProceed) {
      toast.warning(errormessage);
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          signUpDetails.email
        )
      ) {
        isProceed = true;
        if (signUpDetails.password != signUpDetails.confirmPassword) {
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

  const handleInputChange = (e) => {
    setSignUpDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidate()) {
      try {
        const response = await axios.post(
          `http://localhost/poker_planning/api/register.php`,
          signUpDetails
        );
        if (response.data["success"]) {
          toast.success("Registered Successfully!!");
          // localStorage.setItem('user_id', user_id);
          navigate("/");
        } else {
          toast.warning("Email already exists!!");
        }
      } catch (error) {
        console.log("Error occurred", error);
      }
    }
  };

  return (
    <div className="signup-page-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={signUpDetails.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={signUpDetails.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type={PasswordInputType}
          id="password"
          name="password"
          value={signUpDetails.password}
          onChange={handleInputChange}
        />
        <span className="password-toggle-icon2">{ToggleIcon}</span>
        <label htmlFor="password">Confirm Password</label>
        <input
          type={PasswordInputType}
          id="confirmPassword"
          name="confirmPassword"
          value={signUpDetails.confirmPassword}
          onChange={handleInputChange}
        />
        <span className="password-toggle-icon2">{ToggleIcon}</span>
        <button className="signUp-button" type="submit">
          Submit
        </button>
        <p className="login_info">
          Already have account?{" "}
          <span className="login_info--link">
            <Link to="/">Log in</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
