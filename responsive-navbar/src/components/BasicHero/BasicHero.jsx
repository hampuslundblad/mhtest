import React from "react";
import "./BasicHero.css";

/*

props.title - Ändrar titel
props.image - Ändrar bakgrundsbild
props.height - Ändrar höjd på hela heron.

*/

const BasicHero = (props) => {
  return (
    <div
      className="hero__basic"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${props.image})`,
        height: props.height,
      }}
    >
      <div className="hero-text__basic">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default BasicHero;
