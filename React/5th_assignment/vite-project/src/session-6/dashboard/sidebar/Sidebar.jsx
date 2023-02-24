import React from "react";
import { NavLink } from "react-router-dom";

const sidebarList1 = [
  { name: "Overview", icon: "icon-overview", path: "overview" },
  { name: "Tickets", icon: "icon-ticket", path: "tickets" },
  { name: "Ideas", icon: "icon-idea", path: "ideas" },
  { name: "Contacts", icon: "icon-contact", path: "contacts" },
  { name: "Agents", icon: "icon-agent", path: "agents" },
  { name: "Articles", icon: "icon-article", path: "articles" },
];

const sidebarList2 = [
  { name: "Settings", icon: "icon-settings", path: "settings" },
  {
    name: "Subscription",
    icon: "icon-subscription",
    path: "subscription",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_head">
        <img src="/logo.png" alt="Logo" />
        <p className="sidebar_head_title">Dashboard Kit</p>
      </div>
      <div className="sidebar_list sidebar_list1">
        {sidebarList1.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "link_active" : "link_inactive"
            }
          >
            <i className={item.icon}></i>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr className="divider" />
      <div className="sidebar_list sidebar_list2">
        {sidebarList2.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "link_active" : "link_inactive"
            }
          >
            <i className={item.icon}></i>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
