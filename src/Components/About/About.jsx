import React from "react";
import Tilt from "react-parallax-tilt";
import avatar from "../../Assets/avataaars.svg";
import "./About.css"

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div  className="aboutMe">
        <span>
          Since I was a kid, I have always been a lover of technology and
          innovation.{" "}
        </span>
        <span>
          Months ago I started my studies in programming and today I identify
          myself as a Full Stack Developer with Back-End orientation.{" "}
        </span>
        <span>
          I love logic, problem solving and implementation of new technologies.
        </span>
      </div>
      <Tilt style={{width: "20%"}}>
        <img src={avatar} alt="Avatar" style={{ maxHeight: "450px" }} />
      </Tilt>
    </div>
  );
};

export default About;
