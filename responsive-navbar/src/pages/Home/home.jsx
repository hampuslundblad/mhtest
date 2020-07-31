import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Clients from "../../components/Clients/clients";
import Service from "../../components/Service/Service";
import Spacer from "../../components/Spacer/Spacer";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.png";
import Slideshow from "../../components/Slideshow/Slideshow";
const ArrayOfImg = [img1, img2, img1, img2, img1, img1, img2];
//<div className="block-test">
//<Block background="#2B338B" />
//<Block background="#74a5d7" />
//</div>

export default function homePage() {
  return (
    <main className="main" style={{ marginTop: "7rem" }}>
      <Hero />
      <Spacer />
      <Service />
      <Spacer height="8rem" />
      <hr className="divider" />
      <Spacer height="8rem" />
      <Clients imgArray={ArrayOfImg} />;
      <Spacer />
    </main>
  );
}
