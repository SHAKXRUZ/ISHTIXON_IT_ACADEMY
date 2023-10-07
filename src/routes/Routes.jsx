import "./Routes.css";

import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/heroBanner/HeroBanner";
const Routes = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={toggle ? "tun" : "kun"}>
      <Header toggle={toggle} setToggle={setToggle} />
      <HeroBanner />
      <Footer />
    </div>
  );
};

export default Routes;
