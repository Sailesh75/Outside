import React from "react";

const sidebarList = [
  { name: "Overview", icon: "icon-overview" },
  { name: "Tickets", icon: "icon-ticket" },
  { name: "Ideas", icon: "icon-idea" },
  { name: "Contacts", icon: "icon-contact" },
  { name: "Agents", icon: "icon-agent" },
  { name: "Articles", icon: "icon-article" },
  { name: "Settings", icon: "icon-settings" },
  { name: "Subscription", icon: "icon-subscription" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_head">
        <img src="logo.png" alt="Logo" />
        <p className="sidebar_head_title">Dashboard Kit</p>
      </div>
      <ul className="sidebar_list">
        {sidebarList.map((item, index) => (
          <li key={index}>
            <i className={item.icon}></i>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
