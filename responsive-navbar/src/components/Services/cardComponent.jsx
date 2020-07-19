import React from "react";
import webdev from "../../assets/pic1.jpg";
import pendev from "../../assets/pic2.jpg";
import mobdev from "../../assets/pic3.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .card-container {
    padding: 3em;
    border: none;
    width: 20rem;
  }
  .container-text p {
    font-family: "Roboto", sans-serif;
    padding-top: 1rem;
    color: #707070;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  .container-text h4 {
    font-family: "Sen", sans-serif;
    padding-top: 1rem;
    text-align: center;
  }
  .card-image-container img {
    width: 5rem;
  }
  .card-image-background {
    /* background-color: #e2dfdf; */
    background-color: #e0e0e0;

    padding: 4rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 0.2rem solid transparent;
    &:hover {
      background-color: #e15108;
      opacity: 1;
      border: 0.2rem solid black;
      cursor: pointer;
    }
  }
`;

const CardComponent = () => {
  return (
    <React.Fragment>
      <Styles>
        <div className="card-wrapper d-flex justify-content-center">
          <div className="card-container">
            <div className="card-image-container d-flex justify-content-center">
              <div className="card-image-background">
                <img src={webdev} alt="Card"></img>
              </div>
            </div>

            <div className="container-text">
              <h4>
                <b>Telefoni </b>
              </h4>
            </div>
          </div>
          <div className="card-container">
            <div className="card-image-container d-flex justify-content-center">
              <div className="card-image-background">
                <img src={pendev} alt="Card"></img>
              </div>
            </div>
            <div className="container-text">
              <h4>
                <b>Molntjänster och skrivarlösningar</b>
              </h4>
            </div>
          </div>
          <div className="card-container">
            <div className="card-image-container d-flex justify-content-center">
              <div className="card-image-background">
                <img src={mobdev} alt="Card"></img>
              </div>
            </div>

            <div className="container-text">
              <h4>
                <b>Körjournaler och tracking</b>
              </h4>
            </div>
          </div>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default CardComponent;
