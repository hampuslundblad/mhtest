import React from "react";
import "./Block.css";
import Logo from "../../assets/TelexiaRingupVit.svg";
const Block = (props) => (
  <div style={{ backgroundColor: props.background }} className="block-wrapper">
    <div className="text">
      <h2>Vi på Telexia</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s,
      </p>
    </div>
    <div className="logo">
      <img src={Logo} alt="block" />
    </div>
  </div>
);

export default Block;
