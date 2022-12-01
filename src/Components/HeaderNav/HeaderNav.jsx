import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <div className="headerContainer">
      <div className="myName">
        <h2>
          JNG.<span className="blink"> _</span>
        </h2>
      </div>
      <div className="tags">
        <a className="menues" href="#home">Home</a>
        <a className="menues" href="#about">About</a>
        <a className="menues" href="#projects">Projects</a>
        <a className="menues" href="#skills">Skills</a>
        <a className="menues" href="#resume">Resumee</a>
        <a className="menues" href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default HeaderNav;
