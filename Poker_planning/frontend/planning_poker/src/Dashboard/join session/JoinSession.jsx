import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_joinSession.scss";

const JoinSession = () => {
  const [sessionCode, createSessionCode] = useState("");

  const handleInputChange = (e) => {
    createSessionCode((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  console.log(sessionCode);

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter session code";
    if (sessionCode == null || sessionCode == "") {
      isProceed = false;
    }
    if (!isProceed) {
      toast.warning(errormessage);
    }
    return isProceed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidate()) {
        try {
          const response = await axios.post(
            `http://localhost/poker_planning/api/session.php`,
            session
          );
          if (response.data["success"]) {
            toast.success("Session created successfully");
            localStorage.setItem("session_id", response.data["session_id"]);
            localStorage.setItem("session_code", response.data["uuid"]);
            navigate("/dashboard/create-story");
          }
        } catch (error) {
          console.log("Error occurred", error);
        }
    }
  };

  return (
    <div className="join-room-container">
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
        <main className="main-content">
          <h3>Join Session</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="roomName">Session Code:</label>
              <input
                type="text"
                id="sessionCode"
                value={sessionCode}
                onChange={handleInputChange}
              />
            </div>
            <button className="buttons buttons--startGame" type="submit">
              Join Session
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default JoinSession;
