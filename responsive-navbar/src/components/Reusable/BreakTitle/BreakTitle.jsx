import React from "react";
import PropTypes from "prop-types";
import "./BreakTitle.css";
const BreakTitle = (props) => (
  <div
    style={{ backgroundColor: props.background, color: props.titleColor }}
    className="title-wrapper"
  >
    <h1 style={{ borderBottom: "1px solid " + props.underlineColor }}>
      {props.title}
    </h1>
  </div>
);

BreakTitle.defaultProps = {
  title: "Default title",
  background: "#ffffff",
  titleColor: "#000000",
  underlineColor: "#ffffff",
};

BreakTitle.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  titleColor: PropTypes.string,
  underlineColor: PropTypes.string,
};

export default BreakTitle;
