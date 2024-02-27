import React from "react";
import pr1 from "./../img/projects/01-big.jpg";
import pr2 from "./../img/projects/02-big.jpg";
import pr3 from "./../img/projects/03-big.jpg";
import pr4 from "./../img/projects/04-big.jpg";
import pr5 from "./../img/projects/05-big.jpg";
import pr6 from "./../img/projects/06-big.jpg";
const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img src={pr1} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={pr2} alt="Project img" className="project__img" />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={pr3} alt="Project img" className="project__img" />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="#!">
                <img src={pr4} alt="Project img" className="project__img" />
                <h3 className="project__title">Dating app</h3>
              </a>
            </li>
            <li className="project">
              <a href="#!">
                <img src={pr5} alt="Project img" className="project__img" />
                <h3 className="project__title">Landing</h3>
              </a>
            </li>
            <li className="project">
              <a href="#!">
                <img src={pr6} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
