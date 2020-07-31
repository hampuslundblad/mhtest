import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import BreakTitle from "../BreakTitle/BreakTitle";
import "./carousel.css";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselArray = props.imgArray.map((x) => (
    <Carousel.Item>
      <img
        style={{ width: props.width, height: props.height }}
        className="display"
        src={x}
        alt="no pics"
      />
    </Carousel.Item>
  ));
  return (
    <div className="bigWrap">
      {" "}
      <BreakTitle titleColor="#263271">Ett urval av våra kunder</BreakTitle>
      <div className="carouselWrap">
        <Carousel
          style={{ width: props.width, height: props.height }}
          activeIndex={index}
          paus={true}
          interval={1750}
          onSelect={handleSelect}
        >
          {carouselArray}
        </Carousel>
      </div>
    </div>
  );
}
ControlledCarousel.defaultProps = {
  imgArray: "no pics in array",
  width: "100px",
  height: "100px",
};
ControlledCarousel.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ControlledCarousel;
