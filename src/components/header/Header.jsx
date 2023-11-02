import "./Header.css";
import { HiOutlineSun } from "react-icons/hi";
import { BsMoon } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/logo.png";

const Header = ({ toggle, setToggle, setSidebar }) => {
  return (
    <div>
      <header className="header">
        <div className="header_container">
          <div className="header_content">
            <img src={logo} alt="logo" className="header_logo" />
            <ul className="header_link_group">
              <li className="header_link_text">
                <a
                  className={
                    toggle
                      ? "header_link_text"
                      : "header_link_text header_link_white"
                  }
                  href="#about"
                >
                  Biz haqimizda
                </a>
              </li>
              <li className="header_link_text">
                <a
                  className={
                    toggle
                      ? "header_link_text"
                      : "header_link_text header_link_white"
                  }
                  href="#portfolio"
                >
                   Loyhalarimiz
                </a>
              </li>
              <li className="header_link_text">
                <a
                  className={
                    toggle
                      ? "header_link_text"
                      : "header_link_text header_link_white"
                  }
                  href="#services"
                >
                  Bizning Kurslar
                </a>
              </li>
              <li className="header_link_text">
                <a
                  className={
                    toggle
                      ? "header_link_text"
                      : "header_link_text header_link_white"
                  }
                  href="#contact"
                >
                  Kontakt
                </a>
              </li>
            </ul>

            <div className="header_contact_group">
              <div className="header_toggle_btn">
                <HiOutlineSun
                  className={
                    toggle ? "header_toggle_sun" : "header_toggle_sun sun"
                  }
                  onClick={() => setToggle(false)}
                />
                <BsMoon
                  className={
                    toggle ? "header_toggle_moon moon" : "header_toggle_moon"
                  }
                  onClick={() => setToggle(true)}
                />
              </div>

              <div className="header_contact_content">
                <p>
                  <a
                    className={
                      toggle
                        ? "header_contact_text"
                        : "header_contact_text header_contact_black"
                    }
                    href="tel:+998933469498"
                  >
                    +998 93 346-94-98
                  </a>
                </p>
                <p>
                  <a
                    className={
                      toggle
                        ? "header_contact_text"
                        : "header_contact_text header_contact_black"
                    }
                    href="mailto:otabek@gmail.com"
                  >
                    otabektatusf@gmail.com
                  </a>
                </p>
              </div>
              <a href="#registr">
                <button className="header_signup_btn">Ro'yxatdan o'tish</button>
              </a>
            </div>
            <AiOutlineMenu
              className="header_menu_icons"
              onClick={() => setSidebar(true)}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
