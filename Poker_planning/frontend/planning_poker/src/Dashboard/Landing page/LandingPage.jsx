import React from "react";
import "./_landingPage.scss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/dashboard/create-session">Create Session</Link>
            </li>
            <li>
              <Link to="/dashboard/join-session">Join Session</Link>
            </li>
            <li>
              <Link to="/dashboard/session-details">Session History</Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default LandingPage;
