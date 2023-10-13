import React from "react";
import "./Team.css";
import team_images1 from "../../assets/images/team1.png";
import team_images2 from "../../assets/images/team2.png";
import team_images3 from "../../assets/images/team3.png";
import team_images4 from "../../assets/images/team4.png";

const Team = ({ toggle }) => {
  return (
    <div className="team">
      <div className="team_container">
        <h2 className="team_title">Bizning jamoa</h2>
        <div className="team_content">
          <div className="team_content_box">
            <img
              className="team_box_images"
              src={team_images1}
              alt="person_images"
            />
            <div
              className={
                toggle
                  ? "team_box_text_group"
                  : "team_box_text_group team_white"
              }
            >
              <p className="team_person_name">Otabek Hasanov</p>
              <p className="team_person_line"></p>
              <p className="team_person_work">IT Academy asoschisi</p>
            </div>
          </div>
          <div className="team_content_box">
            <img
              className="team_box_images"
              src={team_images2}
              alt="person_images"
            />
            <div
              className={
                toggle
                  ? "team_box_text_group"
                  : "team_box_text_group team_white"
              }
            >
              <p className="team_person_name">Akmal Xudoyberdiyev</p>
              <p className="team_person_line"></p>
              <p className="team_person_work">SMM designer</p>
            </div>
          </div>
          <div className="team_content_box">
            <img
              className="team_box_images"
              src={team_images3}
              alt="person_images"
            />
            <div
              className={
                toggle
                  ? "team_box_text_group"
                  : "team_box_text_group team_white"
              }
            >
              <p className="team_person_name">Bobur Nematulayev</p>
              <p className="team_person_line"></p>
              <p className="team_person_work">Frontend dasturchi</p>
            </div>
          </div>
          <div className="team_content_box">
            <img
              className="team_box_images"
              src={team_images4}
              alt="person_images"
            />
            <div
              className={
                toggle
                  ? "team_box_text_group"
                  : "team_box_text_group team_white"
              }
            >
              <p className="team_person_name">Shakhruz Ismoilov</p>
              <p className="team_person_line"></p>
              <p className="team_person_work">Fullstack dasturchi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
