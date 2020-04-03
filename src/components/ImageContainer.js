import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import {Layout} from './Layout';
import styled from 'styled-components';
import forestImage from '../pictures/forestBC.jpg';
import ImageSlider from './imageSlider';
const Styles = styled.div`
   
    .overlay{
        background: url(${forestImage}) no-repeat fixed bottom;
        background-size: cover;
        background-attachment: initial !important;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:-3;
    }

  .slider__container{
      padding:10px;
      margin: 0 auto;
  }
`;

export const ImageContainer = () => (
    <Styles>
        <div className="overlay">
            <Container className="slider__container">
              <ImageSlider/>
            </Container>
        </div>
    </Styles>
)
export default ImageContainer;



