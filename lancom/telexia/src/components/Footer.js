import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  .wrapper {
    width: 100%;
    height: 5rem;
    margin-bottom: -1rem;
    background-color: #616161;
    color: white;
    display: flex;
    justify-content: center;
  }
  .wrapper p {
    margin-top: auto;
    margin-bottom: auto;
    line-height: 2rem;
    letter-spacing: 0.65px;
    font-style: italic;
  }
`;
const Footer = () => {
  return (
    <Styles>
      <footer className="wrapper">
        <p>@ Telexia AB 2014</p>
      </footer>
    </Styles>
  );
};

export default Footer;
