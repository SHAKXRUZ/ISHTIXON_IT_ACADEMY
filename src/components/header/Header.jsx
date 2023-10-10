import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import logo_white from "../../assets/images/Logo_white.svg";
import logo_black from "../../assets/images/Logo_black.svg";

const Header = ({ toggle, setToggle, setSidebar }) => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header_container">
            <div className="header_content">
              <div className="header_logo_content">
                <Link to="/">
                  <img
                    className="header_logo_content_images"
                    src={toggle ? logo_white : logo_black}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="header_link_content">
                <Link className="header_link_text" to="/">
                  <p
                    className={
                      toggle
                        ? "header_link_content_text tun"
                        : "header_link_content_text kun"
                    }
                  >
                    O компании
                  </p>
                </Link>

                <Link className="header_link_text" to="/">
                  <p
                    className={
                      toggle
                        ? "header_link_content_text tun"
                        : "header_link_content_text kun"
                    }
                  >
                    Портфолио
                  </p>
                </Link>

                <Link className="header_link_text" to="/">
                  <p
                    className={
                      toggle
                        ? "header_link_content_text tun"
                        : "header_link_content_text kun"
                    }
                  >
                    Услуги
                  </p>
                </Link>

                <Link className="header_link_text" to="/">
                  <p
                    className={
                      toggle
                        ? "header_link_content_text tun"
                        : "header_link_content_text kun"
                    }
                  >
                    Контакты
                  </p>
                </Link>
              </div>
              <div className="header_contact_content">
                <button className="toggle_btn">
                  <HiOutlineSun
                    className={toggle ? "toggle_sun" : "toggle_sun sun"}
                    onClick={() => setToggle(false)}
                  />
                  <BsMoon
                    className={toggle ? "toggle_moon moon" : "toggle_moon"}
                    onClick={() => setToggle(true)}
                  />
                </button>

                <div className="header_contact">
                  <p>
                    <a
                      href="tel:+998907777777"
                      className={
                        toggle ? "header_phone tun" : "header_phone kun"
                      }
                    >
                      +998 90 777-77-77
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:chotatam@gmail.com"
                      className={
                        toggle
                          ? "header_phone email tun"
                          : "header_phone email kun"
                      }
                    >
                      chotatam@gmail.com
                    </a>
                  </p>
                </div>
                <Link className="header_registr_btn" to="/">
                  Заказать звонок
                </Link>
              </div>

              <AiOutlineMenu
                className="header_sidebar"
                onClick={() => setSidebar(true)}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
