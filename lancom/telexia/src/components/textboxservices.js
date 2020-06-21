import React from "react";
import styled from "styled-components";
//import image from "../assets/logo.jpg";
import CardComponent from "../components/cardComponent";
//import { Card } from "react-bootstrap";
import * as Scroll from "react-scroll";

const Styles = styled.div`
  .textbox-wrapper {
    margin-top: 10rem;
    margin-right: auto;
    margin-left: auto;
    background-color: #f3f8fa;
    width: 100%;
    padding: 4rem;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-size: 4rem;
    text-align: center;
  }
`;

class TextBoxServices extends React.Component {
  constructor(props) {
    super(props);
    this.statsRef = React.createRef();
  }
  render() {
    return (
      <Scroll.Element name="services">
        <Styles>
          <div className="textbox-wrapper d-flex justify-content-center">
            <div className="descText-container">
              <h1>Vad är du intresserad av?</h1>
            </div>
          </div>
          <CardComponent />
        </Styles>
      </Scroll.Element>
    );
  }
}
export default TextBoxServices;
