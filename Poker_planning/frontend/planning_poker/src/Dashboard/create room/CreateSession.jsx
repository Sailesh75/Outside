import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./_createSession.scss";
import axios from "axios";
import { toast } from "react-toastify";

const CreateSession = () => {
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const [session, setSession] = useState({
    name: "",
    description: "",
    moderator: userId,
  });

  const handleInputChange = (e) => {
    setSession((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter session details";
    if (session.name == null || session.name == "") {
      isProceed = false;
    }
    if (session.description == null || session.description == "") {
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
    <div className="create-room-container">
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
          <h3>Create Session</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="roomName">Session Name:</label>
              <input
                type="text"
                id="name"
                value={session.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomDescription">Session Description:</label>
              <textarea
                id="description"
                value={session.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button className="buttons buttons--startGame" type="submit">
              Create Session
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateSession;
