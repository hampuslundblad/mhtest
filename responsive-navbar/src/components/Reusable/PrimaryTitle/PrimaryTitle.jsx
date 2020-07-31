import React from "react";
import "./PrimaryTitle.css";

const PrimaryTitle = (props) => {
  return <h2 className="primaryTitle">{props.children}</h2>;
};

export default PrimaryTitle;
