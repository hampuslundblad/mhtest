import React from "react";
import "./ArrowButton.css";
// <i className="fas fa-chevron-right"></i>
function ArrowButton(props) {
  return (
    <div className="arrow-btn">
      <p>Läs mer</p>
      <div className="spacer" />
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}
export default ArrowButton;
