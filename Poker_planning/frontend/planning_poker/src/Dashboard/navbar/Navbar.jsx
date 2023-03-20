import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./_navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    // const userId = localStorage.getItem("user_id");
    localStorage.removeItem("user_id");
    localStorage.removeItem("session_id");
    localStorage.removeItem("session_code");
    navigate("/");
    // localStorage.setItem("user_id", null);
  };
  return (
    <nav className="navbar">
      <Link to="/dashboard">Planning Poker</Link>
      <div className="user-info">
        <p>
          Welcome, <span className="username"> </span>
        </p>
        <Link onClick={handleLogOut}>Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
