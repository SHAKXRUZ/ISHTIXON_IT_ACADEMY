import React from "react";
import "./Services.css";
import services_images1 from "../../assets/images/services1.png";
import services_images2 from "../../assets/images/services2.png";
import services_images3 from "../../assets/images/services3.png";
import services_images4 from "../../assets/images/services4.png";
import services_images5 from "../../assets/images/services5.png";
import services_images6 from "../../assets/images/services6.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services_container">
        <div className="services_content">
          <h2 className="services_title">Bizning kurslar</h2>
          <div className="services_content_box">
          <div className="services_box">
              <img
                className="services_images"
                src={services_images2}
                alt="images"
              />
              <p className="services_box_title">Kompyuter savodxonligi</p>
              <p className="services_box_text">
                Kompyuterni endi boshlayotganlar uchun.<br/>
                Kursimiz davomiyligi 6 oy.
              </p>
            </div>
            <div className="services_box">
              <img
                className="services_images"
                src={services_images1}
                alt="images"
              />
              <p className="services_box_title">Frontend dasturlash</p>
              <p className="services_box_text">
                Kursimiz davomiyligi 6 oy.
              </p>
            </div>
            <div className="services_box">
              <img
                className="services_images"
                src={services_images3}
                alt="images"
              />
              <p className="services_box_title">Backend dasturlash</p>
              <p className="services_box_text">
              Kursimiz davomiyligi 6 oy.
              </p>
            </div>
            <div className="services_box">
              <img
                className="services_images"
                src={services_images4}
                alt="images"
              />
              <p className="services_box_title">SMM</p>
              <p className="services_box_text">
                Beznesingizni rivojlantirish uchun 1-qadam<br/>
                Kursimiz davomiyligi 2 oy.
              </p>
            </div>
            <div className="services_box">
              <img
                className="services_images"
                src={services_images5}
                alt="images"
              />
              <p className="services_box_title">Grafik dizayn</p>
              <p className="services_box_text">
                Biz fotografiya xizmatlarini taqdim etamiz <br/>
                Kursimiz davomiyligi 4 oy.
              </p>
            </div>
            <div className="services_box">
              <img
                className="services_images"
                src={services_images6}
                alt="images"
              />
              <p className="services_box_title">Motion dizayn</p>
              <p className="services_box_text">
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.<br/> Kursimiz davomiyligi 6 oy..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
