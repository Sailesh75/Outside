import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Dashboard;
