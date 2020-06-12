import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import headerImage from "../assets/meeting.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${headerImage});
    background-size: cover;
    height: 32rem;
    position: relative;
    z-index: -2;
    margin-bottom: 0;
    border-bottom: 1px solid #b8b8b8;
  }
  .overlay {
    background-color: #181818;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .jumbo-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .jumbo-text h1 {
    font-size: 5rem;
    font-family: "Roboto", sans-serif;
  }
  .jumbo-text p {
    font-size: 2rem;
  }
`;

export const ContactUsHeader = (props) => (
  <Styles>
    <Jumbo className="jumbo">
      <div className="overlay"></div>
      <div className="jumbo-text">
        <h1>Har du några frågor? Kontakta oss nedan!</h1>
      </div>
    </Jumbo>
  </Styles>
);
export default ContactUsHeader;
