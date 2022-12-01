import React from "react";
import "./Skills.css";

import js from "../../Assets/Icons/javascript.png";
import css from "../../Assets/Icons/css.png";
import git from "../../Assets/Icons/Git.png";
import github from "../../Assets/Icons/github.png";
import heroku from "../../Assets/Icons/heroku-icon.png";
import html from "../../Assets/Icons/html.png";
import postgre from "../../Assets/Icons/postgreSQL.png";
import mui from "../../Assets/Icons/materialui.png";
import mongo from "../../Assets/Icons/mongodb.png";
import node from "../../Assets/Icons/NodeJs.png";
import react from "../../Assets/Icons/React.png";
import redux from "../../Assets/Icons/Redux.png";
import scrum from "../../Assets/Icons/scrum.png";
import trello from "../../Assets/Icons/trello.png";
import vercel from "../../Assets/Icons/vercel.png";
import antd from "../../Assets/Icons/antd.png";
import express1 from "../../Assets/Icons/express2.png";

export default function Skills() {
  return (
    <div id="skills" style={{height: "180vh", paddingTop: "6%"}}>
      <span className="projectsTitle">Skills</span>
      <div className="skillsContainer">
        {/* ////////////// 
        scripting Languages 
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Scripting Languages</span>
          </div>
          <div className="scriptingSkills">
            <a
              className="eachSkills"
              href="https://www.javascript.com/"
              target="blank"
            >
              <div>
                <img src={js} alt="javascript" width={100} />
                <span>JavaScript</span>
              </div>
            </a>
            <div className="eachSkills">
              <img src={css} alt="css" width={100} />
              <span>CSS</span>
            </div>
            <div className="eachSkills">
              <img src={html} alt="html" width={100} />
              <span>HTML</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Back End
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Back End</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={node} alt="node" width={100} />
              <span>NodeJs</span>
            </div>
            <div className="eachSkills">
              <img src={express1} alt="express" width={100} />
              <span>ExpressJs</span>
            </div>
            <div className="eachSkills">
              <img src={postgre} alt="postgre" width={100} />
              <span>PosgreSQL</span>
            </div>
            <div className="eachSkills">
              <img src={mongo} alt="mongodb" width={100} />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Front End
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Front End</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={react} alt="react" width={100} />
              <span>React</span>
            </div>
            <div className="eachSkills">
              <img src={redux} alt="redux" width={100} />
              <span>Redux</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Frameworks
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Frameworks</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={mui} alt="mui" width={100} />
              <span>Material UI</span>
            </div>
            <div className="eachSkills">
              <img src={antd} alt="antd" width={100} />
              <span>ANT Design</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Agile methodologies
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Agile methodologies</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={scrum} alt="scrum" width={100} />
              <span>Scrum</span>
            </div>
            <div className="eachSkills">
              <img src={trello} alt="trello" width={100} />
              <span>Trello</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Hosting
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Hosting</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={heroku} alt="heroku" width={100} />
              <span>Heroku</span>
            </div>
            <div className="eachSkills">
              <img src={vercel} alt="vercel" width={100} />
              <span>Vercel</span>
            </div>
          </div>
        </div>
        {/* ////////////// 
        Version Control
        ////////////////*/}
        <div className="scripting">
          <div className="scriptingTitle">
            <span>Version Control</span>
          </div>
          <div className="scriptingSkills">
            <div className="eachSkills">
              <img src={github} alt="github" width={100} />
              <span>Github</span>
            </div>
            <div className="eachSkills">
              <img src={git} alt="git" width={100} />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
