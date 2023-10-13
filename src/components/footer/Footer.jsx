import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import logo_white from "../../assets/images/Logo_white.svg";
import logo_black from "../../assets/images/Logo_black.svg";
import "./Footer.css";
const Footer = ({ toggle }) => {
  return (
    <div id="contact" className="footer">
      <footer className="footer_container">
        <div className="footer_content">
          <img
            className="header_logo_content_images"
            src={toggle ? logo_white : logo_black}
            alt="logo"
          />

          <div className="footer_location">
            <a
              className="footer_location_link"
              href="https://yandex.uz/maps/org/ishtixon_tuman_davlat_soliq_inspeksiyasi/191064047247/?utm_medium=mapframe&utm_source=maps"
            >
              <div className="footer_location_content">
                <SlLocationPin
                  className={
                    toggle
                      ? "footer_link fot_icons"
                      : "footer_link fot_icons footer_link_kun"
                  }
                />
                <p
                  className={
                    toggle ? "footer_link" : "footer_link footer_link_kun"
                  }
                >
                  Manzil: Ishtixon tumani, Soliq binosi 2-qavat
                  <br />
                  Mo'ljal: Soliq binosi
                </p>
              </div>
            </a>
          </div>

          <div className="footer_phone_content">
            <p>
              <a
                className={
                  toggle
                    ? "footer_link phone"
                    : "footer_link phone footer_link_kun"
                }
                href="tel:+998933469498"
              >
                <BsTelephone className="fot_icons" />
                +998 93 346-94-98
              </a>
            </p>
            <p>
              <a
                className={
                  toggle
                    ? "footer_link phone"
                    : "footer_link phone footer_link_kun"
                }
                href="tel:+998933469498"
              >
                <BsTelephone className="fot_icons" />
                +998 93 346-94-98
              </a>
            </p>
          </div>

          <div className="footer_icons_content">
            <a
              href="https://t.me/otabekcoding"
              className={
                toggle
                  ? "footer_social_link"
                  : "footer_social_link fot_icon_white"
              }
            >
              <PiTelegramLogoBold className="fot_icons" />
            </a>
            <a
              href="https://www.youtube.com/@ishtixonitacademy"
              className={
                toggle
                  ? "footer_social_link"
                  : "footer_social_link fot_icon_white"
              }
            >
              <FiYoutube className="fot_icons" />
            </a>
            <a
              href="https://instagram.com/ishtixon_it_academy?igshid=OGQ5ZDc2ODk2ZA=="
              className={
                toggle
                  ? "footer_social_link"
                  : "footer_social_link fot_icon_white"
              }
            >
              <FiInstagram className="fot_icons" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
