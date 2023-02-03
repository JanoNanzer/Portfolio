import React from "react";
import Tilt from "react-parallax-tilt";
import avatar from "../../Assets/avataaars.svg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="projectsTitle">
        <span>About me</span>
      </div>
      <div className="aboutContentContainer">
        <div className="aboutMe">
          <span style={{color: "#ff7f50"}}>
            Since I was a kid, I have always been a lover of technology and
            innovation.{" "}
          </span>
          <span style={{color: "#ffa582"}}>
            Months ago I started my studies in programming and today I identify
            myself as a Full Stack Developer with Back-End orientation.{" "}
          </span>
          <span style={{color: "#ffc7b2"}}>
            I love logic, problem solving and implementation of new
            technologies.
          </span>
        </div>
        <Tilt className="imageTilt" style={{ width: "20%" }}>
          <img src={avatar} alt="Avatar" style={{ maxHeight: "450px" }} />
        </Tilt>
      </div>
    </div>
  );
};

export default About;
