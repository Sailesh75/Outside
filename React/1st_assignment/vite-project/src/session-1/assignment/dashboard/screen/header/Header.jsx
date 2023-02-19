import React from "react";
import { useState } from "react";

const Header = ({}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="header">
      <div>
        <p className="header_title">Tickets</p>
      </div>

      {showSearch && (
        <div>
          <input type="search" placeholder="Search" />
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
          <img className="avatar-image" src="avatar.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
