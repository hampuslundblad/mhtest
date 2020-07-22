import React from "react";
import "./Block.css";
import Logo from "../../assets/TelexiaRingupVit.svg";
const Block = (props) => (
  <div style={{ backgroundColor: props.background }} className="block-wrapper">
    <img src={Logo} alt="block" />
  </div>
);

export default Block;
