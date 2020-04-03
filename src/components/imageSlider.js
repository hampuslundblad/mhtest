import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import slide01 from '../pictures/sliderimages/markentreprenadab_013.jpg'
import slide02 from '../pictures/sliderimages/markentreprenadab_014.jpg'
import slide03 from '../pictures/sliderimages/markentreprenadab_015.jpg'

const Styles = styled.div`
    .carousel__item{
        max-width:940px;
        max-height:400px;
   
    }
    .carousel__container{
        max-width:940px;
        max-height:414px;
        margin: auto auto;
        border-style:solid;
        border-width:7px;
        border-color:#ffffff;
    }
    `;
export const ImageSlider = () => (
<Styles>
<div className="carousel__container">
<Carousel>
  <Carousel.Item className="carousel__item">
    <img
      
      src={slide01}
      alt="First slidess"
    />
  </Carousel.Item>

  <Carousel.Item className="carousel__item">
    <img
      src={slide02}
      alt="Third slide"
    />
  </Carousel.Item>
 
  <Carousel.Item className="carousel__item">
    <img
      src={slide03}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>    
</div>
</Styles>

)

export default ImageSlider;