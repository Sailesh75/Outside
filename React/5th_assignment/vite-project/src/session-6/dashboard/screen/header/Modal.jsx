import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Modal = ({ handleModal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="modal-wrapper" onClick={handleModal}></div>
      <div className="modal-container">
        <h1>Profile:</h1>
        <p>Name : Jonas Ferdinand</p>
        <p>Age : 28</p>
        <p>Address : Johanusberg</p>
        <div className="modal-container_buttons">
          <button className="modal-container_button" onClick={handleModal}>
            Go Back
          </button>
          <button onClick={handleClick} className="modal-container_button">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
