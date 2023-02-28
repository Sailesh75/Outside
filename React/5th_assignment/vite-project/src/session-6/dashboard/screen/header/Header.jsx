import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Header = ({ searchKey, setSearchKey, headerTitle }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (e) => {
    
    setSearchKey(e.target.value);
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="header">
      <div>
        <p className="header_title">{headerTitle}</p>
      </div>

      {showModal && <Modal handleModal={handleModal} />}

      {showSearch && (
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search"
            onChange={handleSearch}
            value={searchKey}
          />
        </div>
      )}

      {showNotification && (
        <div className="notification-bar">Notifications</div>
      )}

      <div className="header_items">
        <i onClick={handleSearchClick} className="icon-search"></i>
        <i onClick={handleNotificationClick} className="icon-notification"></i>
        <div className="header_items_divider"></div>
        <p className="header_items_customer-info">Jonas Ferdinand</p>
        <div className="header_items_outer-radius">
          <img
            onClick={handleModal}
            className="avatar-image"
            src="/avatar.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
