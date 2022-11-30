import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./CV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import rs from "../../CV.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  const [width, setWidth] = useState(1200);

  let cv =
    "https://drive.google.com/file/d/1ryQPwV3siZWkE_raC2_tF3Qf4lbI3XKQ/view?usp=share_link";

  //   useEffect(() => {
  //     setWidth(window.innerWidth);
  //   }, []);

  return (
    <div id="resume">
      <div className="projectsTitle">
        <span>My Resume</span>
      </div>
      <object
        width="65%"
        height="800"
        data={resume}
        type="application/pdf"
      ></object>

      {/* <Document file={resume} options={{ workerSrc: "/pdf.worker.js" }}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};

export default Resume;
