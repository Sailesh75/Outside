import React, { useEffect } from "react";

const AddTicketModal = ({ handleModal }) => {
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
        <label>Ticket Name: </label>
        <input type="text" />
        <br />
        <br />
        <label>Ticket Information: </label>
        <input type="text" />
        <br />
        <br />
        <label>Customer Name: </label>
        <input type="text" />
        <br />
        <br />
        <label>Customer Name: </label>
        <input type="text" />
        <br />
        <br />
        <label>Ticket date: </label>
        <input type="date" />
        <br />
        <br />
        <label>Ticket time: </label>
        <input type="time" />
        <br />
        <br />
        <button className="modal-container_button" onClick={handleModal}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddTicketModal;
