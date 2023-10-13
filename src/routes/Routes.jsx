import "./Routes.css";

import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Overlay } from "../components/utils/index";
import HeroBanner from "../components/heroBanner/HeroBanner";
import About from "../components/about/About";
import Advantes from "../components/advantes/Advantes";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import Registr from "../components/registr/Registr";


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
      <About />
      <Advantes />
      <Projects />
      <Services/>
      <Team toggle={toggle}/>
      <Registr toggle={toggle}/>
      <Footer toggle={toggle} />
    </div>
  );
};

export default Routes;
