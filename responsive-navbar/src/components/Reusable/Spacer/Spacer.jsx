import React from "react";
import "./Spacer.css";

const Spacer = (props) => {
  return <div style={{ width: "100%", height: props.height }}></div>;
};
Spacer.defaultProps = {
  height: "4rem",
};

export default Spacer;
