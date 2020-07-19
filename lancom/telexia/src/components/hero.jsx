import React from "react";
import styled from "styled-components";
/*import sinkImage from 'C:/Repo/Laptop/sham-wow/src/assets/pictures/sink.jpg';*/
import sinkImage from "../assets/meeting.jpg";

const Styles = styled.div`
  .hero-image {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${sinkImage});
    /* Set a specific height */
    height: 32rem;
    margin-top: 5rem;
    /* Position and center the image to scale nicely on all screens */
    /*  background-position: center; */
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

  .img-container {
    width: 10rem;
    border-radius: 50%;
  }

  .img-container img {
    margin-top: 6rem;
    margin-left: 60rem;
    z-index: -3;
  }
`;

class heroComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      offset: 10,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    });
  };
  render() {
    return (
      <Styles>
        <div
          className="hero-image"
          //      style={{ backgroundPositionY: this.state.offset }}
        >
          <div className="img-underlay d-flex justify-content-center">
            <div className="text-container">
              <h1>Moderna kommunikationslösningar för en enklare vardag</h1>
              <button>Kontakta oss</button>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}
export default heroComponent;
