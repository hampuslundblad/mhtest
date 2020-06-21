import React, { useEffect, useRef } from "react";
import styled from "styled-components";
/*import sinkImage from 'C:/Repo/Laptop/sham-wow/src/assets/pictures/sink.jpg';*/
import { animated, useSpring } from "react-spring";
import sinkImage from "../assets/meeting.jpg";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const Styles = styled.div`
  .hero-image {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${sinkImage});
    /* Set a specific height */
    height: 32em;
    margin-top: 5rem;
    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .text-container {
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 1px 0 0;
  }

  .text-container h1 {
    font-size: 5rem;
  }
  .text-container button {
    font-family: "Open Sans", sans-serif;
    border-radius: 10%;
    width: 11rem;
    height: 3rem;
    border: 0px;
    color: white;
    background-color: #e15108;
    margin-top: 1rem;
    font-size: 1.1rem;
  }
`;

const Hero = () => {
  return (
    <Styles>
      <Parallax pages={1}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: { sinkImage },
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="img-underlay d-flex justify-content-center">
            <div className="text-container">
              <h1>Moderna kommunikationslösningar för enklare vardag</h1>
              <button>Kontakta oss</button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Styles>
  );
};
export default Hero;
