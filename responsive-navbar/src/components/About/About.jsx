import React from "react";
import image from "../../assets/smile.jpg";
import "./About.css";

function About() {
  return (
    <div className="wrapper">
      <div className="about">
        <div className="img-container ">
          <img src={image} alt="Ringup logo"></img>
        </div>
        <div className="text-container ">
          <h1>Varför Telexia?</h1>

          <p>
            Vi tror på ett rakryggat, 100% ärligt och engagerat företagande som
            både gynnar våra kunder, telekombranschen i stort och oss själva som
            kedja, samtidigt som det skapar ett ökat förtroende människor
            emellan.
          </p>
          <p>
            {" "}
            Vi anser att vårt varumärke och vårt anseende är det viktigaste vi
            har, och därför prioriterar vi alltid långsiktiga relationer framför
            snabba affärer.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
