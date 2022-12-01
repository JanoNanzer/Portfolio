import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./ToTop.css";
import { IconButton } from "@mui/material";

const ToTop = () => {
  const pageToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="arrowButton">
      <IconButton title="Page to top" className="arrowIcon" onClick={(e) => pageToTop()}>
        <ExpandLessIcon sx={{ fontSize: "8vh" }} />
      </IconButton>
    </div>
  );
};

export default ToTop;
