import React, { useState, useEffect } from "react";
import axios from "axios";

const AddTicketModal = ({ handleModal }) => {
  const getCustomerDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `on ${day}.${month}.${year}`;
    return formattedDate;
  };

  const getDateLabel = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const getTimeLabel = () => {
    const currentDate = new Date();
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const currentTime = currentDate.toLocaleTimeString("en-US", options);
    return currentTime;
  };

  const [ticketName, setTicketName] = useState("");
  const [ticketInfo, setTicketInfo] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [selectedValue, setSelectedValue] = useState("low");

  const getTicketColor = (selectedValue) => {
    switch (selectedValue) {
      case "high":
        return "#F12B2C";
      case "normal":
        return "#29CC97";
      case "low":
        return "#FEC400";
    }
  };

  const customerAvatar = "/customer-1.png";
  const customerDate = getCustomerDate();
  const dateLabel = getDateLabel();
  const timeLabel = getTimeLabel();
  const ticketInformation = "Updated 1 day ago";
  const ticketColor = getTicketColor(selectedValue);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://react-project-7da67-default-rtdb.asia-southeast1.firebasedatabase.app/tickets.json",
        {
          customerAvatar,
          customerName,
          ticketName,
          ticketInformation,
          customerDate: customerDate,
          dateLabel: dateLabel,
          timeLabel: timeLabel,
          ticketPriority: selectedValue,
          ticketColor: ticketColor,
        }
      );
      console.log(response.data);
      handleModal();
    } catch (error) {
      console.error(error);
    }
  };

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
        <input
          type="text"
          value={ticketName}
          onChange={(e) => setTicketName(e.target.value)}
        />
        <br />
        <br />
        <label>Ticket Information: </label>
        <input
          type="text"
          value={ticketInfo}
          onChange={(e) => setTicketInfo(e.target.value)}
        />
        <br />
        <br />
        <label>Customer Name: </label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <br />
        <br />
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="high">High</option>
          <option value="normal" selected>
            Normal
          </option>
          <option value="low">Low</option>
        </select>
        <br />
        <br />
        <button className="modal-container_button" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddTicketModal;
