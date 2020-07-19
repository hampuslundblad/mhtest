import React from "react";
import styled from "styled-components";
import image from "../assets/logo.jpg";

const Styles = styled.div`
  .textbox-wrapper {
    margin-top: 8rem;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-size: 4rem;
  }

  p {
    font-size: 1.4rem;
    color: #383838;
    line-height: 2rem;
    letter-spacing: 0.65px;
  }
  text-container {
    margin-top: 1rem;
  }
  .img-container {
  }
  .img-container img {
    width: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

function TextBoxPic() {
  return (
    <Styles>
      <div className="textbox-wrapper d-flex justify-content-center ">
        <div className="img-container col-md-5">
          <img src={image} alt="Ringup logo"></img>
        </div>
        <div className="text-container col-md-5">
          <h1>Vilka är vi?</h1>

          <p>
            Telexia grundades 2014 i Enköping och vi är stolta medlemmar av
            Ringup. ////Erbjuder kommunkationslösningar inom IT för både små och
            stora företag.
          </p>
        </div>
      </div>
    </Styles>
  );
}
export default TextBoxPic;
