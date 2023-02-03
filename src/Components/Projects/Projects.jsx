import React from "react";
import PF from "./PF/PF";
import PI from "./PI/PI";
import "./Project.css"

const Projects = () => {
  return (
    <div id="projects" className="outerProjects">
      <div>
        <span className="projectsTitle">Projects</span>
      </div>
      <div className="projectsCards">
        <PF/>
        <PI/>
      </div>
    </div>
  );
};

export default Projects;
