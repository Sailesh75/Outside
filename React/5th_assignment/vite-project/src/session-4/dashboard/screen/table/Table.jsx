import React from "react";
import Ticket from "./Ticket";
import { useState } from "react";
import AddTicketModal from "./AddTicketModal";
import { useEffect } from "react";
import axios from "axios";

const Table = ({ searchKey, filterKey, setFilterKey }) => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/ticketList")
      .then((res) => {
        console.log(res.data);
        setTickets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleFilter = (e) => {
    setFilterKey(e.target.value);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="table">
      <div className="table_header">
        <div className="table_header_title">All Tickets</div>
        {showModal && <AddTicketModal handleModal={handleModal} />}
        {showFilter && (
          <div className="filter-bar">
            <input
              type="radio"
              id="high"
              name="filter"
              value="high"
              onChange={handleFilter}
            />
            <label htmlFor="high">HIGH</label>
            <input
              type="radio"
              id="low"
              name="filter"
              value="low"
              onChange={handleFilter}
            />
            <label htmlFor="low">LOW</label>
            <input
              type="radio"
              id="normal"
              name="filter"
              value="normal"
              onChange={handleFilter}
            />
            <label htmlFor="normal">NORMAL</label>
          </div>
        )}
        <div className="table_header_icons">
          <span>
            <i className="icon-sort"></i>Sort
          </span>
          <span onClick={handleFilterClick}>
            <i className="icon-filter"></i>Filter
          </span>
          <span>
            <button onClick={handleModal}>Add ticket</button>
          </span>
        </div>
      </div>
      <table className="table_content">
        <thead>
          <tr>
            <th>Ticket details</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tickets
            .filter((item) =>
              item.ticketName
                .toLocaleLowerCase()
                .includes(searchKey.toLocaleLowerCase())
            )
            .filter((item) => {
              if (!filterKey) return item;
              return item.ticketPriority === filterKey;
            })
            .map((item, index) => {
              return (
                <Ticket
                  ticketDetails={item}
                  key={index}
                  index={index}
                  tickets={tickets}
                  setTickets={setTickets}
                  currentId={item.id}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
