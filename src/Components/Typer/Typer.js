import React from "react";
import Typewriter from "typewriter-effect";

function Typer() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Back End Developer",
          "Technology lover ♡",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typer;