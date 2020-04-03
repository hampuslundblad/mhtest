import React, {Component} from 'react'
import {ImageContainer} from '../ImageContainer.js';
import {Layout} from '../Layout';
import {Jumbotron} from '../jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';

import img01 from '../pictures/borraC.jpg';
import img02 from '../pictures/borra2C.jpg';
import img03 from '../pictures/hyvlaC.jpg';

class Home extends Component {
    render() {
      return (
          
          <React.Fragment>
              <ImageContainer/>
              <Jumbotron text="Markentrepenad i Göteborg AB" />
        
              <Container className ="d-flex flex-column">
                  <Row>
                  <h1>Vad gör vi?</h1>
                  </Row>
                  <Row> 
                    <Col>
                   
                      <p> Markentreprenad i Uppsala AB arbetar med alla typer av mark- och anläggningsarbeten.</p>
                      <strong> Vi utför allt från orörd mark till färdig markentreprenad.</strong>
                      <p> Våra mest förekommande jobb är vid byggnation av radhusområden, industrihus och större BRF:er.</p>
                      
                        
                    </Col>
                    <Col>
                
                      <p> Vi gräver, schaktar, gör alla förekommande arbeten som rör grundarbeten med rörläggningar till färdig platta.</p>
                      <p> Därtill gör vi kompletta finplaneringsjobb med allt från sten- och plattsättningar till murar och alla förekommande arbeten med utrustningar och grönytor. </p> 
                      
                      
                    </Col>
                    <Col>
                     
                        <p>Markentreprenad i Uppsala AB startades i liten skala av Martin Jansson år 2000. </p>
                        <p>Idag sysselsätter företaget dagligen minst 30 personer och omsätter drygt 40 miljoner kronor.</p>
                        
                    </Col>
                  </Row>
                  <Row>
                      <Col className ="d-flex justify-content-center"> 
                        <Image src={img01} roundedCircle width="250em" height="250em" ></Image>
                      </Col>
                      <Col className ="d-flex justify-content-center">
                        <Image src={img02} roundedCircle width="250em" height="250em" ></Image>
                      </Col>
                      <Col className ="d-flex justify-content-center">
                        <Image src={img03} roundedCircle width="250em" height="250em" ></Image>
                      </Col>
                  </Row>
              </Container>
         </React.Fragment>
          
    );
}
}   

export default Home;