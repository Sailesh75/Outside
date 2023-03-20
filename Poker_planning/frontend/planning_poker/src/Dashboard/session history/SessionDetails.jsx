import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_sessionDetails.scss";
import { Link } from "react-router-dom";

const SessionDetails = () => {
  const [sessions, setSessions] = useState([]);
  const user_id = localStorage.getItem("user_id");
  useEffect(() => {
    axios
      .get(`http://localhost/poker_planning/api/get_session.php?id=${user_id}`)
      .then((response) => {
        if (response.data.message) setSessions([]);
        else {
          setSessions(response.data);
        }
      })
      .catch((error) => console.error(error));
    // console.log(sessions);
  }, []);

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
        <main className="main-content">
          <h3>Session History</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Start time</th>
                <th>End Time</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id}>
                  <td>{session.id}</td>
                  <td>{session.name}</td>
                  <td>{session.description}</td>
                  <td>{session.end_time}</td>
                  <td>{session.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default SessionDetails;
