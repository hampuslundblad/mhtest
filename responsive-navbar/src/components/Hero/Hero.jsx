import React from "react";
import heroImage from "../../assets/meeting.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Hero.css";

import Image from "react-bootstrap/Image";

const hero = (props) => (
  <div
    className="hero"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${heroImage})`,
    }}
  >
    <div className="hero__text">
      <h1>Moderna kommunikationslösningar för en enklare vardag. </h1>
      <PrimaryButton text="Kontakta oss" />
    </div>
  </div>
);

export default hero;
