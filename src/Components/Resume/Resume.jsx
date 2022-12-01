import React from "react";
import { pdfjs } from "react-pdf";
import resume from "./CV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div id="resume" style={{ paddingTop: "5%" }}>
      <div className="projectsTitle">
        <span>My Resumee</span>
      </div>
      <object
        width="65%"
        height="800"
        data={resume}
        type="application/pdf"
      />
    </div>
  );
};

export default Resume;
