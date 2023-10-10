import "./Routes.css";

import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Overlay } from "../components/utils/index";
import HeroBanner from "../components/heroBanner/HeroBanner";
// import Footer from "../components/footer/Footer";

const Routes = () => {
  const [toggle, setToggle] = useState(true);

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (sidebar === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebar]);

  return (
    <div className={toggle ? "tun" : "kun"}>
      <Header toggle={toggle} setToggle={setToggle} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} toggle={toggle} />
      {sidebar && <Overlay setSidebar={setSidebar} />}
      <HeroBanner />
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
