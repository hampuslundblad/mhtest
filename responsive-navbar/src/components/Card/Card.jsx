import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArrowButton from "../ArrowButton/ArrowButton";
import "./Card.css";

function Card(props) {
  var toBold = props.description.split(" ").slice(0, 2).join(" ");
  var rest = props.description
    .split(" ")
    .slice(2, props.description.length)
    .join(" ");

  return (
    <div className="card-wrapper">
      <div>
        <div className="img-wrapper">
          <img className="picture" src={props.img} alt="A service we offer" />
          <div className="img-overlay">
            <span>Läs mer </span>
          </div>
        </div>
        <h3>{props.title}</h3>

        <p>
          <b>{toBold}</b>
          {" " + rest}
        </p>
      </div>
      <Link className="service-link" to={props.to}>
        Läs mer
      </Link>
    </div>
  );
}
Card.propTypes = {
  descpription: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
