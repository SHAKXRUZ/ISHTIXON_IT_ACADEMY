import "./HeroBanner.css";
import hero_images from "../../assets/images/hero.png";

const HeroBanner = () => {
  return (
    <div className="hero">
      <div className="heroBanner_container">
        <div className="hero_content">
          <div className="heroBanner_left_content">
            <h1 className="heroBanner_title">
              Biz bilan kelajak kasblarini egallang.
            </h1>
            <p className="heroBanner_text">
              Siz doimo olg'a intilishda bo'lishingiz uchun qulay o'quv muhitini
              yaratdik. O'rganing, mashq qiling va bilimlarni darhol ishingizda
              qo'llang.
            </p>
          </div>
          <div className="heroBanner_right_content">
            <img className="hero_images" src={hero_images} alt="hero_images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
