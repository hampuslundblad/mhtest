import React from "react";
import PropTypes from "prop-types";
import "./BreakTitle.css";
const BreakTitle = (props) => (
  <div
    style={{ backgroundColor: props.background, color: props.titleColor }}
    className="title-wrapper"
  >
    <h1 style={{ borderBottom: "1px solid " + props.underlineColor }}>
      {props.children}
    </h1>
  </div>
);

BreakTitle.defaultProps = {
  background: "#ffffff",
  titleColor: "#000000",
  underlineColor: "#ffffff",
};

BreakTitle.propTypes = {
  background: PropTypes.string,
  titleColor: PropTypes.string,
  underlineColor: PropTypes.string,
};

export default BreakTitle;
