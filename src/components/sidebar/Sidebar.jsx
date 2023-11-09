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
          <a href="/">
            <img className="sidebar_images" src={sidebar_logo} alt="logo" />
          </a>
          <button
            onClick={() => setSidebar(false)}
            className="sidebar_exit_btn"
          >
            <FiX className="sidebar_exit_icons" />
          </button>
        </div>
        <div className="sidebar_content">
          <a
            className={
              toggle === true
                ? `sidebar_router_link sidebar_tun`
                : `sidebar_router_link sidebar_kun`
            }
            href="#about"
          >
            Biz haqimizda
          </a>
          <a
            className={
              toggle === true
                ? `sidebar_router_link sidebar_tun`
                : `sidebar_router_link sidebar_kun`
            }
            href="#portfolio"
          >
            Loyhalarimiz
          </a>
          <a
            className={
              toggle === true
                ? `sidebar_router_link sidebar_tun`
                : `sidebar_router_link sidebar_kun`
            }
            href="#services"
          >
            Bizning Kurslar
          </a>
          <a
            className={
              toggle === true
                ? `sidebar_router_link sidebar_tun`
                : `sidebar_router_link sidebar_kun`
            }
            href="#contact"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
