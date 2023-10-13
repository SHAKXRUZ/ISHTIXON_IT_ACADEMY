import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_container">
        <div className="about_content">
          <div className="about_content_left">
            <h2 className="about_content_title">Kompaniya haqida</h2>
            <p className="about_content_text">
              Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion
              echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik.
              Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni
              taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali
              veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
            </p>
            <p className="about_content_text">
              Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO
              optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z
              ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng
              yangi texnologiyalar va innovatsion usullardan foydalangan holda
              brendni rivojlantirish va sotishni ko'paytirish bilan
              shug'ullanamiz.
            </p>
          </div>
          <div className="about_content_right">
            <div className="about_right_card_div">
              <div className="about_right_card">
                <h2 className="about_right_card_title">20+</h2>
                <p className="about_right_card_text">Проектов запустил</p>
              </div>
              <div className="about_right_card">
                <h2 className="about_right_card_title">4 года</h2>
                <p className="about_right_card_text">Опыта разработки</p>
              </div>
            </div>
            <div className="about_right_card_div">
              <div className="about_right_card">
                <h2 className="about_right_card_title">12+</h2>
                <p className="about_right_card_text">Профессионалов</p>
              </div>

              <div className="about_right_card">
                <h2 className="about_right_card_title">4 года</h2>
                <p className="about_right_card_text">Опыта разработки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
