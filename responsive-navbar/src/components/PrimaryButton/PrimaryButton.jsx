import React from "react";
import "./PrimaryButton.css";

function primaryButton(props) {
  return <button className="primary-button">{props.text}</button>;
}

export default primaryButton;
