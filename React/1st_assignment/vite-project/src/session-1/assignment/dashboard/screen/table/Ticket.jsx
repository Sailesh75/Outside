import React from "react";

const Ticket = ({ ticketDetails}) => {

  return (
    <tr className="ticket-items">
      <td>
        <div className="ticket">
          <figure>
            <img src={ticketDetails.customerAvatar} />
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
        <div className="icon_more">
          <i className="icon-more"></i>
        </div>
      </td>
    </tr>
  );
};

export default Ticket;
