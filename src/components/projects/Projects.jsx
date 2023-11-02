import "./Projects.css";
import projects_images1 from "../../assets/images/projects_images1.png";
import projects_images2 from "../../assets/images/projects_images2.png";
import projects_images3 from "../../assets/images/projects_images3.png";

import { GoArrowUpRight } from "react-icons/go";
const Projects = () => {
  return (
    <div id="portfolio" className="projects">
      <div className="projects_container">
        <h2 className="projects_title">Bajargan loyihalarimiz</h2>

        <div className="projects_content">
          <div className="projects_content_box">
            <img
              className="projects_images"
              src={projects_images1}
              alt="projects_images"
            />
            <a href="https://www.texnomart-shop.uz">
              <div className="projects_images_hover">
                <GoArrowUpRight className="projects_images_icons" />
                <p className="projects_name">TEXNOMART clone</p>
              </div>
            </a>
          </div>
          <div className="projects_content_box">
            <img
              className="projects_images"
              src={projects_images2}
              alt="projects_images"
            />
            <a href="https://amazon-three-beryl.vercel.app">
              <div className="projects_images_hover">
                <GoArrowUpRight className="projects_images_icons" />
                <p className="projects_name">AMAZON clone</p>
              </div>
            </a>
          </div>
          <div className="projects_content_box">
            <img
              className="projects_images"
              src={projects_images3}
              alt="projects_images"
            />
            <a href="https://yainvestor.uz">
              <div className="projects_images_hover">
                <GoArrowUpRight className="projects_images_icons" />
                <p className="projects_name">YAINVESTOR veb sayt</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
