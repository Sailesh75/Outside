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
        <label>Ticket Details:</label>
        <input type = 'text'/><br/><br/>
        <label>Ticket Details:</label>
        <input type = 'text'/><br/><br/>
        <label>Ticket Details:</label>
        <input type = 'text'/><br/><br/>
        <button className="modal-container_button" onClick={handleModal}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddTicketModal;
