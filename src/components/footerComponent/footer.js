import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
const Styles = styled.div`
    .footer__container{
      background-color:#4f4f4f;

    } 
    .footer__container p{
      color:#ffffff;
      font-size:0.7;
    }
    
    .footer__container h1{
      color:#ffffff;
      font-size:0.7em;
    }


`;

export const Footer = () => (
  <Styles>
      <React.Fragment>
        <Container fluid className ="footer__container">
          <Container className ="d-flex justify-content-center">
            <Row>
                <Col>
                <h1> MARKENTREPENAD I GÖTEBORG AB</h1>
                <p> Text här</p>
                </Col>
                <Col>
                  <h1> Besöksadress</h1>
                  <p> Text här</p>
                </Col>
                <Col>
                <h1> Kontakt</h1>
                <p> Telefon: 018 - 13 37 68</p>
                <p> E-post: info@marksnickarna.se</p>
                </Col>
            </Row>
        </Container>
      </Container>
  </React.Fragment>
</Styles>
)
export default Footer;
