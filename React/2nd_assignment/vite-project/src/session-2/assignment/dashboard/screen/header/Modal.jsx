import React, { useEffect } from "react";

const Modal = ({ handleModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={handleModal}></div>
      <div className="modal-container">
        <h1>Profile:</h1>
        <p>Name : Jonas Ferdinand</p>
        <p>Age : 28</p>
        <p>Address : Johanusberg</p>
        <button className="modal-container_button" onClick={handleModal}>
          Done
        </button>
      </div>
    </>
  );
};

export default Modal;
