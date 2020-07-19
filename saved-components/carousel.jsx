import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from "prop-types";

const Styles = styled.div`

--widthOfCar : 360px;
img{

}
.bigWrap{
    margin-right:auto;
    margin-left:auto;
}
`;


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carouselArray = props.imgArray.map(x => <Carousel.Item><img style={{width:props.width, height: props.height}} className="d-block" src={x} alt="no pics" /></Carousel.Item>); 
    return (
        <Styles>
            <div className="bigWrap">
                <Carousel  style={{width:props.width, height : props.height}}  activeIndex={index} paus={true} interval={1750} onSelect={handleSelect}>
                {carouselArray}
                </Carousel>
            </div>
        </Styles>
    );


}
ControlledCarousel.defaultProps = {
    imgArray:"no pics in array",
    width:"100px",
    height:"100px",
  };
ControlledCarousel.propTypes = {
    width:PropTypes.string,
    height: PropTypes.string,
}


export default ControlledCarousel;