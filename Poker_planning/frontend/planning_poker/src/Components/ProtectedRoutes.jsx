import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  //   const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const userId = localStorage.getItem("user_id");
  return userId ? <Outlet /> : navigate("/");
};

export default ProtectedRoutes;
