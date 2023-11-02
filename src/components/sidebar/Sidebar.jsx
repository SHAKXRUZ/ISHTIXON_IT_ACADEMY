import React from "react";
import "./Sidebar.css";
import { FiX } from "react-icons/fi";
import sidebar_logo from "../../assets/images/logo.png";
const Sidebar = ({ sidebar, setSidebar, toggle }) => {
  return (
    <div className={sidebar === true ? `sidebar active` : `sidebar`}>
      <div
        className={
          toggle === true
            ? `sidebar_container sidebar_tun`
            : `sidebar_container sidebar_kun`
        }
      >
        <div className="sidebar_header">
          <img clasName="sidebar_logos" src={sidebar_logo} alt="logo" />
          <button
            onClick={() => setSidebar(false)}
            className="sidebar_exit_btn"
          >
            <FiX className="sidebar_exit_icons" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
