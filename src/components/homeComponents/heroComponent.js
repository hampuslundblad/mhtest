import React, { Component } from 'react';
import styled from "styled-components";
/*import sinkImage from 'C:/Repo/Laptop/sham-wow/src/assets/pictures/sink.jpg';*/
import sinkImage from '../../assets/pictures/toaC.jpg';

const Styles = styled.div`
.hero-image{
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${sinkImage});

  /* Set a specific height */
  height: 32em;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
}

.text-container{
  font-family: "Sen", sans-serif;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
     text-shadow: 1px 0 0
    z-index: 1;

    background-color: rgba(0 , 0, 0, 0.3)
}

.text-container h1 {
  font-size: 5rem;
}

.text-underlay{
  background-color:grey;
  opacity:0.1;
  z-index -1:
  
}


.img-container{
  width: 10rem;
  border-radius: 50%;
}

.img-container img{
  margin-top:6rem;
    margin-left:60rem;
    z-index:-3;  
}

`;

const heroComponent = () => {
  return (
    <Styles>
      <div className="hero-image">
        <div className="img-underlay d-flex justify-content-center">
          <div className="text-container">
            <h1>Välkommen till Lindevalls Rör i Enköping!</h1>
            <h2>Lindevall Rör är ett mindre familjeägt företag med lång erfarenhet av VVS-branschen.</h2>
            <p>Våra certifierade montörer har bred kompetens inom allt från värmepumpar till traditionella rörmokerijobb såsom t.ex, rörinstallationer.</p>
            <button>Kontakta oss</button>
            <div className="text-underlay">
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default heroComponent;
