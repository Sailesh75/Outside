import React from "react";
import "./_dashboard.scss";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
