import React from "react";
import PF from "./PF/PF";
import PI from "./PI/PI";
import "./Project.css"

const Projects = () => {
  return (
    <div id="projects" style={{height: "100vh", paddingTop: "6%"}}>
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
