import React from "react";
import { Link } from "react-router-dom";

import "./PrimaryButton.css";

function primaryButton(props) {
  return (
    <Link to={props.to}>
      <button className="primary-button">{props.text}</button>
    </Link>
  );
}

export default primaryButton;
