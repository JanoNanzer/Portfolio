import React, { useState } from "react";
import "./HeaderNav.css";

const HeaderNav = () => {

  const [burguer_class, setBurguerClass] = useState("burguer-bar unclicked");
  const [tags, setTags] = useState("tags");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurguerClass("burguer-bar clicked")
      setTags("tags visible")
    } else {
      setBurguerClass("burguer-bar unclicked")
      setTags("tags")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const closeMenu = () => {
    setTags("tags")
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className="headerContainer">
      <div className="myName">
        <h2>
          JNG.<span className="blink"> _</span>
        </h2>
      </div>

      <div
        className="toggleButton"
        onClick={updateMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={tags}>
        <a className="menues" href="#home" onClick={closeMenu}>
          Home
        </a>
        <a className="menues" href="#about" onClick={closeMenu}>
          About
        </a>
        <a className="menues" href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a className="menues" href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a className="menues" href="#resume" onClick={closeMenu}>
          Resumee
        </a>
        <a className="menues" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default HeaderNav;

// import React, { useEffect, useState } from "react";
// import "./HeaderNav.css";

// const HeaderNav = () => {


//   useEffect(() => {
//     const toggleButton = document.querySelector(".toggleButton");
//     const navbarLinks = document.querySelector(".tags");
//     console.log(toggleButton);

//     toggleButton?.addEventListener("click", (e) => {
//       e.preventDefault()
//       toggleButton.classList.toggle("active");
//       navbarLinks?.classList.toggle("active");
//       ///
//       console.log(navbarLinks);
//       console.log(toggleButton);
//     });
//   }, []);

//   // const [isOpen, setIsOpen] = useState(false);
//   // console.log(isOpen)

//   return (
//     <div className="headerContainer">
//       <div className="myName">
//         <h2>
//           JNG.<span className="blink"> _</span>
//         </h2>
//       </div>

//       <div className="toggleButton">
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       <div className="tags">
//         <a className="menues" href="#home">
//           Home
//         </a>
//         <a className="menues" href="#about">
//           About
//         </a>
//         <a className="menues" href="#projects">
//           Projects
//         </a>
//         <a className="menues" href="#skills">
//           Skills
//         </a>
//         <a className="menues" href="#resume">
//           Resumee
//         </a>
//         <a className="menues" href="#contact">
//           Contact
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeaderNav;
