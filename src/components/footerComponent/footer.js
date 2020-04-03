import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
const Styles = styled.div`
    .footer__container{
      background-color:#282828;

    } 
    .footer__container p{
      color:#ffffff;
      font-size:0.7;
    }
    
    .footer__container h1{
      color:#ffffff;
      font-size:0.7em;
    }
    .row p {
      font-size:0.65em;

    }
    .row{
      margin:0.2em;
    }


`;

export const Footer = () => (
  <Styles>
      <React.Fragment>
        <Container fluid className ="footer__container ml-auto">
          <Container className ="d-flex ml-auto">
           <Row>
            <Col>
             <Row>
              <p> Besöksadress: Syltvägen 10 , 419 23 Göteborg</p>
            </Row>

            <Row>
              <p> Faktureringsadress: Syltvägen 10 , 419 23 Göteborg</p>
            </Row>

            <Row>
              <p> Telefon: 018 - 13 37 60</p>
            </Row>
          </Col>
          </Row>
        </Container>
      </Container>
  </React.Fragment>
</Styles>
)
export default Footer;
