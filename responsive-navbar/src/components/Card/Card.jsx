import React from "react";
import PropTypes from "prop-types";

import ArrowButton from "../ArrowButton/ArrowButton";
import "./Card.css";

function Card(props) {
  var toBold = props.description.split(" ").slice(0, 2).join(" ");
  var rest = props.description
    .split(" ")
    .slice(2, props.description.length)
    .join(" ");

  function whop(img) {
    for (var i = 0; i < 5; i++) {}
  }

  return (
    <div className="card-wrapper">
      <img className="picture" src={props.img} alt="A service we offer" />
      <h3>{props.title}</h3>
      <p>
        <b>{toBold}</b>
        {" " + rest}
      </p>
      <ArrowButton />
    </div>
  );
}
Card.propTypes = {
  descpription: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
