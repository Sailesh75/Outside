import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./_createStory.scss";

const CreateStory = () => {
  const sessionId = localStorage.getItem("session_id");
  const code = localStorage.getItem("session_code");
  const navigate = useNavigate();
  const [stories, setStories] = useState([
    { title: "", description: "", session_id: sessionId },
  ]);

  const handleStoryNameChange = (index, value) => {
    const newStories = [...stories];
    newStories[index].title = value;
    setStories(newStories);
  };

  const handleStoryDescriptionChange = (index, value) => {
    const newStories = [...stories];
    newStories[index].description = value;
    setStories(newStories);
  };

  const addStory = () => {
    setStories([
      ...stories,
      { title: "", description: "", session_id: sessionId },
    ]);
  };

  const deleteStory = (index) => {
    const newStories = [...stories];
    newStories.splice(index, 1);
    setStories(newStories);
  };

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter story title";
    if (stories[0].title == null || stories[0].title == "") {
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
          `http://localhost/poker_planning/api/story.php`,
          stories
        );
        console.log(response.data);
        if (response.data["success"]) {
          toast.success("Stories saved successfully");
          navigate(`/dashboard/session/${code}`);
        }
      } catch (error) {
        console.log("Error occurred", error);
      }
    }
  };

  return (
    <div className="create-story-container">
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Stories:</label>
              {stories.map((story, index) => (
                <div className="story" key={index}>
                  <input
                    type="text"
                    value={story.title}
                    placeholder={`Story #${index + 1} title`}
                    onChange={(e) =>
                      handleStoryNameChange(index, e.target.value)
                    }
                  />
                  <textarea
                    value={story.description}
                    placeholder={`Story #${index + 1} description`}
                    onChange={(e) =>
                      handleStoryDescriptionChange(index, e.target.value)
                    }
                  ></textarea>
                  <button
                    className="buttons buttons--deleteStory"
                    type="button"
                    onClick={() => deleteStory(index)}
                    disabled={stories.length === 1}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                className="buttons buttons--addStory"
                type="button"
                onClick={addStory}
              >
                Add Story
              </button>
            </div>
            <button className="buttons buttons--startGame" type="submit">
              Start game
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateStory;
