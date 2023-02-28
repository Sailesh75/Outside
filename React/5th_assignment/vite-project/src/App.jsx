import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketPage from "./session-6/dashboard/screen/TicketPage";
import Login from "./session-6/login/Login";
import Signup from "./session-6/signup/Signup";
import OverviewPage from "./session-6/dashboard/screen/OverviewPage";
import Dashboard from "./session-6/dashboard/Dashboard";
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
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<OverviewPage />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="tickets" element={<TicketPage />} />
            <Route
              path="*"
              element={
                <h1 style={{ marginLeft: "27.5rem" }}>Page in progress</h1>
              }
            />
          </Route>
          <Route path="*" element={<h1>Error:Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
