import React from "react";
import pr1 from "./../img/projects/Снимок экрана 2024-02-29 152534.png";
import pr2 from "./../img/projects/Снимок экрана 2024-02-29 152918.png";
import pr3 from "./../img/projects/Снимок экрана 2024-02-29 153025.png";
import pr4 from "./../img/projects/Снимок экрана 2024-02-29 153139.png";
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
                <h3 className="project__title">Calculator</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={pr2} alt="Project img" className="project__img" />
                <h3 className="project__title">This portfolio)</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={pr3} alt="Project img" className="project__img" />
                <h3 className="project__title">todo-list</h3>
              </a>
            </li>

            <li className="project">
              <a href="#!">
                <img src={pr4} alt="Project img" className="project__img" />
                <h3 className="project__title">GPT-3</h3>
              </a>
            </li>
          
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
