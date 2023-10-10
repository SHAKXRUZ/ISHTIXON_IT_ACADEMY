import "./HeroBanner.css";
import hero_images from "../../assets/images/hero.png";

const HeroBanner = () => {
  return (
    <div className="hero">
      <div className="heroBanner_container">
        <div className="hero_content">
          <div className="heroBanner_left_content">
            <h1 className="heroBanner_title">
              Biz veb-saytlar, ilovalarni ishlab chiqamiz
            </h1>
            <p className="heroBanner_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="heroBanner_right_content">
            <img className="hero_images" src={hero_images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
