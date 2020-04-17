import React, { Component } from "react";
import styled from "styled-components";
/*import sinkImage from 'C:/Repo/Laptop/sham-wow/src/assets/pictures/sink.jpg';*/
import sinkImage from "../../assets/pictures/toaC.jpg";
import LindButton from "../lindButton";

import { NavLink } from "react-router-dom";

const Styles = styled.div`
  .hero-image {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${sinkImage});

    /* Set a specific height */
    height: 25rem;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
  }

  .text-container {
    font-family: "Sen", sans-serif;
    position: absolute;
    color: white;
    z-index: 1;
    border: 3px solid white;
    width: 90%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text-container h1 {
    float: left;
    font-family: "PT Serif", serif;
    font-size: 5rem;
    text-shadow: 1px 1px 8px #383838;
    text-align: center;
  }

  .heroNavBar {
    display: table;
  }
  .heroNavBar ul li {
    margin-right: 1rem;
  }
`;

const HeroGeneric = (props) => {
  return (
    <Styles>
      <div className="hero-image">
        <div className="img-underlay">
          <div className="text-container d-flex flex-column justify-content-center">
            <h1 className="">{props.title}</h1>

            <div
              className="heroNavBar Nav navbar navbar-expand-lg d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <LindButton btntext="VVS" routeTo="/about" />
                </li>
                <li>
                  <LindButton btntext="Service" routeTo="/about" />
                </li>
                <li>
                  <LindButton btntext="Värmepumpar" routeTo="/about" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default HeroGeneric;
