import React from "react";
import "./PrimaryText.css";

const PrimaryText = (props) => {
  return <p className="primaryText">{props.children}</p>;
};

export default PrimaryText;
