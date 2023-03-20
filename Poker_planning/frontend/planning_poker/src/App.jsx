import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoutes from "./Components/ProtectedRoutes";
import SignupPage from "./SignupPage/SignupPage";
import LoginPage from "./LoginPage/LoginPage.jsx";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./Dashboard/Landing page/LandingPage";
import CreateSession from "./Dashboard/create room/CreateSession";
import Session from "./Dashboard/session/Session";
import CreateStory from "./Dashboard/create stories/CreateStory";
import JoinSession from "./Dashboard/join session/JoinSession";
import SessionDetails from "./Dashboard/session history/SessionDetails";

export const LoggedInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<h1>Error:Page not found</h1>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<LandingPage />} />
                <Route path="home" element={<LandingPage />} />
                <Route path="create-session" element={<CreateSession />} />
                <Route path="create-story" element={<CreateStory />} />
                <Route path="join-session" element={<JoinSession />} />
                <Route path="session/:sessionId" element={<Session />} />
                <Route path="session-details" element={<SessionDetails />} />
              </Route>
            </Route>
          </Routes>
        </LoggedInContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
