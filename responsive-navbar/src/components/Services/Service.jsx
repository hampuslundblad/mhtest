import React from "react";

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

import "./Service.css";
import BreakTitle from "../BreakTitle/BreakTitle";
import Card from "../Card/Card";

const Service = (props) => (
  <div className="service-wrapper">
    <BreakTitle
      title="Vad är du intresserad av?"
      titleColor="#263271
"
    />
    <div className="card-container">
      <Card
        img={pic1}
        title="Telefoni"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, "
      />
      <Card
        img={pic2}
        title="Körjournaler"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, "
      />
      <Card
        img={pic3}
        title="IT-lösningar"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, "
      />
    </div>
  </div>
);

export default Service;
