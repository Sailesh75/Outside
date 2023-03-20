import React, { useState } from "react";
import "./_inviteMembersModal.scss";

const InviteMembersModal = ({ handleClose }) => {
  // const [link, setLink] = useState("");
  const code = localStorage.getItem("session_code");


  // const handleCopyLink = () => {
  //   const input = document.createElement("input");
  //   document.body.appendChild(input);
  //   input.value = window.location.href;
  //   input.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(input);
  // };

  const handleCopyLink = () => {
    const sessionCode = code.split("/").pop();
    navigator.clipboard.writeText(sessionCode);
    // alert(`Session code "${sessionCode}" copied to clipboard!`);
  };
  
  // const handleCopyLink = () => {
  //   const sessionLink = `${window.location.origin}/session?session_code=${code}`;
  //   navigator.clipboard.writeText(sessionLink)
  //     .then(() => {
  //       console.log("Session link copied to clipboard: " + sessionLink);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to copy session link: " + err);
  //     });
  // };
  

  return (
    <>
      <div className="modal-wrapper" onClick={handleClose}></div>
      <div className="modal-content">
        <h3>Invite Members</h3>
        <p>Share this link with others to invite them to the session:</p>
        <div className="link-input">
          <input type="text" value={code} readOnly />
          <button type="button" onClick={handleCopyLink}>
            Copy
          </button>
        </div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default InviteMembersModal;
