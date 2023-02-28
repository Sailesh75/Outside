import React from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Ticket = ({ ticketDetails, index, setTickets, tickets, currentId }) => {
  const deleteCurrentTicket = () => {
    let newArray = tickets.filter((ticket, ticketIndex) => {
      if (ticketIndex == index) return;
      else return ticket;
    });
    setTickets(newArray);
    console.log(currentId);
    axios
      .delete(`http://localhost:8000/ticketList/${currentId}/.json`)
      .then((res) => {
        toast.error("Record Deleted");
      });
  };

  return (
    <tr>
      <td>
        <div className="ticket">
          <figure>
            <img src={`${ticketDetails.customerAvatar}`} />
          </figure>
          <div className="ticket_details">
            <div className="ticket_items_bold">{ticketDetails.ticketName}</div>
            <div className="ticket_items">
              {ticketDetails.ticketInformation}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="ticket_items_bold">{ticketDetails.customerName}</div>
        <div className="ticket_items">{ticketDetails.customerDate}</div>
      </td>
      <td>
        <div className="ticket_items_bold">{ticketDetails.dateLabel}</div>
        <div className="ticket_items">{ticketDetails.timeLabel}</div>
      </td>
      <td>
        <div
          className="ticket_priority"
          style={{ background: ticketDetails.ticketColor }}
        >
          <p>{ticketDetails.ticketPriority}</p>
        </div>
      </td>
      <td>
        <MdDelete
          className="ticket_deleteButton"
          onClick={deleteCurrentTicket}
        />
      </td>
    </tr>
  );
};

export default Ticket;
