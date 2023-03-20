import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./_session.scss";
import InviteMembersModal from "../../Components/InviteMembersModal";
import axios from "axios";
import { useParams } from "react-router-dom";

const fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const Session = () => {
  const { sessionCode } = useParams;
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const user_id = localStorage.getItem("user_id");
  const session_id = localStorage.getItem("session_id");
  const id = { user_id, session_id };

  console.log(id);

  useEffect(() => {
    const response = axios.post(
      `http://localhost/poker_planning/api/session.member.php`,
      id
    );
    console.log(response.data);
    // if (response.data["success"]){
    //   console.log("members and sessions added in session_member table");
    // }
    axios
      .get(`http://localhost/poker_planning/api/get_story.php?id=${session_id}`)
      .then((response) => {
        if (response.data.message) setSessions([]);
        else {
          setStories(response.data);
        }
      });
    // setStories([
    //   { name: "Story 1", description: "This is the first story" },
    //   { name: "Story 2", description: "This is the second story" },
    // ]);
    setUsers([
      { name: "User 1", id: "123" },
      { name: "User 2", id: "456" },
    ]);
  }, []);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setSelectedValue(null);
    setRevealed(false);
  };

  const handleValueClick = (value) => {
    setSelectedValue(value);
    setRevealed(true);
  };

  const handleAddUser = () => {
    // TODO: add new user to the database
    setUsers([...users, { name: newUser, id: Date.now().toString() }]);
    setNewUser("");
  };

  const handleDeleteUser = (userId) => {
    // TODO: delete user from the database
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  // const handleShowInviteModal = () => {
  //   setShowInviteModal(true);
  // };

  // const handleCloseInviteModal = () => {
  //   setShowInviteModal(false);
  // };

  return (
    <div className="session-container">
      <div className="wrapper">
        <aside className="sidebar">
          <ul>
            <li>
              <h3>Invite Members</h3>
              <button type="button" onClick={handleModal}>
                Invite Members
              </button>
            </li>
            <li>
              <div className="add-user">
                <input
                  type="text"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                />
                <button type="button" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <div className="story-list">
            {stories.map((story) => (
              <div
                className={`story ${selectedStory === story ? "selected" : ""}`}
                key={story.name}
                onClick={() => handleStoryClick(story)}
              >
                <h4>{story.name}</h4>
                <p>{story.description}</p>
              </div>
            ))}
          </div>
          {showModal && <InviteMembersModal handleClose={handleModal} />}
        </main>
        <aside className="sidebar">
          <div className="user-list">
            <h3>Members on the session</h3>
            {/* <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul> */}
          </div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}
                <button type="button" onClick={() => handleDeleteUser(user.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {selectedStory && (
            <div className="value-list">
              <h3>Values for {selectedStory.name}</h3>
              {fibonacciNumbers.map((value) => (
                <div
                  key={value}
                  className={`value ${
                    selectedValue === value ? "selected" : ""
                  }`}
                  onClick={() => handleValueClick(value)}
                >
                  {value}
                </div>
              ))}
            </div>
          )}
          {revealed && (
            <div className="revealed-value">
              <h3>The value selected is:</h3>
              <p>{selectedValue}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Session;
