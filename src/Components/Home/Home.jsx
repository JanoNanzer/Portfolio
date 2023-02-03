import React from "react";
import Particle from "../Particle/Particle";
import pink from "../../Assets/home-main.svg";
import Typer from "../Typer/Typer";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import cv from "../../CV.pdf";
import { ThemeProvider } from "@mui/material/styles";
import coralColor from "../Palettes/Palette";


const Home = () => {
  // let svg = Avataaars.create({
  //   skin: "tanned",
  //   top: "shortWaved",
  //   hairColor: "auburn",
  //   hatColor: "blue02",
  //   accessories: "none",
  //   accessoriesColor: "black",
  //   facialHair: "none",
  //   facialHairColor: "auburn",
  //   clothing: "shirtCrewNeck",
  //   clothingGraphic: "pizza",
  //   clothingColor: "black",
  //   eyes: "default",
  //   eyebrows: "defaultNatural",
  //   mouth: "default",
  //   style: "circle",
  //   background: 'circle',
  //   svgBackground: "white"
  // });

  return (
    <div id="home" className="fatherOuter">
      <Particle />
      <div className="homeOuter">
        <ThemeProvider theme={coralColor}>
          <div className="introduce">
            <div className="homeTitles">
              <span style={{ color: "white" }}>Hello, be welcome!</span>
              <span style={{ color: "white" }}>
                I'm <span style={{ color: "#ff7f50", marginBottom: "5vh" }}>Jano Nanzer Gallo</span>
              </span>
              <Typer />
            </div>
            <div className="iconsContainer">
              <a
                href="https://www.linkedin.com/in/janonanzer/"
                target="blank"
                className="iconsColors"
              >
                <LinkedInIcon className="iconsMaterial"/>
              </a>
              <a
                href="https://github.com/JanoNanzer"
                target="blank"
                className="iconsColors"
              >
                <GitHubIcon className="iconsMaterial"/>
              </a>
              <a
                href="mailto:janonanzer@gmail.com"
                target="blank"
                className="iconsColors"
              >
                <MailOutlineIcon className="iconsMaterial"/>
              </a>
              {/* <a
                href="mailto:janonanzer@gmail.com"
                target="blank"
                className="iconsColors"
              >
                <EmailIcon />
              </a> */}
            </div>
            <div style={{marginTop: "5vh"}}>
              <Button
                variant="outlined"
                sx={{ color: "coral" }}
                download
                href={cv}
                color="primary"
              >
                Download CV
              </Button>
            </div>
          </div>
          <div>
            <img src={pink} alt="Home" style={{ maxHeight: "450px" }} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Home;
