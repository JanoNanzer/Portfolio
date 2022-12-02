import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footerDiv">
      <span>
        Copyright © 2022 {/* All rights reserved */} | Made by{" "}
        <a href="https://www.linkedin.com/in/janonanzer/" style={{color: "coral", textDecoration:"none"}}>Jano Nanzer Gallo</a>
      </span>
    </div>
  );
};

export default Footer;
