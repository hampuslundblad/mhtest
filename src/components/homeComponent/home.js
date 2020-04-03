import React, {Component} from 'react'
import {ImageContainer} from '../ImageContainer.js';
import {Layout} from '../Layout';
import {Jumbotron} from '../jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    render() {
      return (
          <React.Fragment>
              <ImageContainer/>
              <Jumbotron/>
        
              <Container>
                  <Row>
                      <Col>
                      <h1> Här kommer text</h1>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Col>
                    <Col>
                    <h1> Här kommer text</h1>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                    </Col>


                      <Col><h1> VIKTIGT TEXT</h1><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Col>
                  </Row>
              </Container>
         </React.Fragment>
          
    );
}
}   

export default Home;