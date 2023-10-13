import React from "react";
import "./Advantes.css";
import advantes_images1 from "../../assets/images/advantes1.png";
import advantes_images2 from "../../assets/images/advantes2.png";
import advantes_images3 from "../../assets/images/advantes3.png";
import advantes_images4 from "../../assets/images/advantes4.png";
import advantes_images5 from "../../assets/images/advantes5.png";
import advantes_images6 from "../../assets/images/advantes6.png";

const Advantes = () => {
  return (
    <div className="advantes">
      <div className="advantes_container">
        <h2 className="advantes_title">Bizning afzalliklarimiz</h2>

        <div className="advantes_content_card">
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images1}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Individual yondashuv</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images2}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Ekspertiza</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images3}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Professional xizmat</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images4}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Individual yondashuv</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images5}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Ekspertiza</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
          <div className="advantes_content_box">
            <img
              className="advantes_box_images"
              src={advantes_images6}
              alt="advantes_images"
            />
            <p className="advantes_box_title">Professional xizmat</p>
            <p className="advantes_box_line"></p>
            <p className="advantes_box_text">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantes;
