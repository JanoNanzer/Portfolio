import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import contact1 from "../../Assets/Contact/contact1.svg";
import contact2 from "../../Assets/Contact/contact2.svg";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "90vh", paddingTop: "5%" }}>
      <span className="projectsTitle">Contact me</span>
      <div className="contactItemsContainer">
        <div className="contactWays">
          <table style={{ height: "60vh" }}>
            {/* /////
            EMAIL
            ///// */}
            <tr>
              <td>
                <AlternateEmailIcon />
              </td>
              <td>Email:</td>
              <td>
                <a
                  className="contactDetail"
                  href="mailto:janonanzer@gmail.com"
                  target="blank"
                >
                  janonanzer@gmail.com
                </a>
              </td>
            </tr>
            {/* /////
            Location
            ///// */}
            <tr>
              <td>
                <LocationOnIcon />
              </td>
              <td>Location:</td>
              <td>
                <a
                  href="https://goo.gl/maps/6mGqbV2jWfqnm9ub7"
                  target="blank"
                  className="contactDetail"
                >
                  Córdoba, Argentina
                </a>
              </td>
            </tr>
            {/* /////
            Website
            ///// */}
            <tr>
              <td>
                <LanguageIcon />
              </td>
              <td>Website:</td>
              <td>
                <a
                  className="contactDetail"
                  href="https://janonanzer.vercel.app/"
                >
                  janonanzer.vercel.app
                </a>
              </td>
            </tr>
            {/* /////
            Linkedin
            ///// */}
            <tr>
              <td>
                <LinkedInIcon />
              </td>
              <td>Linkedin:</td>
              <td style={{ width: "50vh" }}>
                <a
                  className="contactDetail"
                  href="https://www.linkedin.com/in/janonanzer/"
                >
                  linkedin.com/in/janonanzer
                </a>
              </td>
            </tr>
            {/* /////
            Github
            ///// */}
            <tr>
              <td>
                <GitHubIcon />
              </td>
              <td>Github:</td>
              <td>
                <a
                  className="contactDetail"
                  href="https://github.com/JanoNanzer"
                >
                  github.com/JanoNanzer
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <img src={contact1} alt="contact" style={{ maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import "./Contact.css";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import LanguageIcon from "@mui/icons-material/Language";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

// const Contact = () => {
//   return (
//     <div id="contact" style={{ height: "90vh", paddingTop: "5%" }}>
//       <span className="projectsTitle">Contact me</span>
//       <div className="contactWays">
//         <span className="eachContact">
//           <AlternateEmailIcon /> Email:{" "}
//           <a
//             className="contactDetail"
//             href="mailto:janonanzer@gmail.com"
//             target="blank"
//           >
//             janonanzer@gmail
//           </a>
//         </span>
//         <span className="eachContact">
//           <LocationOnIcon /> Location:{" "}
//           <span className="contactDetail">Córdoba, Argentina</span>
//         </span>
//         <span className="eachContact">
//           <LanguageIcon /> Website:{" "}
//           <a className="contactDetail" href="https://janonanzer.vercel.app/">
//             janonanzer.vercel.app/
//           </a>
//         </span>
//         <span className="eachContact" style={{ width: "40%" }}>
//           <LinkedInIcon /> Linkedin:{" "}
//           <a
//             className="contactDetail"
//             href="https://www.linkedin.com/in/janonanzer/"
//           >
//             www.linkedin.com/in/janonanzer/
//           </a>{" "}
//         </span>
//         <span className="eachContact">
//           <GitHubIcon /> Github:{" "}
//           <a className="contactDetail" href="https://github.com/JanoNanzer">
//             github.com/JanoNanzer
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Contact;
