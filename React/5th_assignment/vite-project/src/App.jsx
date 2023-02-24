import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./session-4/dashboard/sidebar/Sidebar";
import Screen from "./session-4/dashboard/screen/Screen";
import Login from "./session-4/login/Login";
import Signup from "./session-4/signup/Signup";
import Dashboard from "./session-4/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "./icon/variables.scss";

function App() {
  return (
    <div>
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="tickets" element={<Screen />} />
          <Route path="*" element={<h1>Error:Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
