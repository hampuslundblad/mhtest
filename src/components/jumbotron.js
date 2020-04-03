import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import treeImage from '../pictures/trad.jpg';
// background: url(${treeImage}) no-repeat fixed bottom;
const Styles = styled.div`
    .jumbo{
        background-color:#fff;  
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index:-2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.5;
        position:absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:-1;
    }

`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo"> 
            <div className ="overlay"></div>
            <Container> 
                <h1>Markentrepenad i Göteborg AB</h1>
                <p>VI BYGGA BRA SAKER</p>
            </Container>
        </Jumbo>
    </Styles>
)
export default Jumbotron;



