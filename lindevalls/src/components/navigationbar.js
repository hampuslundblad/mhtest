import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Container from "react-bootstrap/Container";


const Styles = styled.div`


  .navbar-nav .nav-link {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
    color: #585858;
    padding:1rem;
    &:hover {
      color: #2f557d;
      transition: 250ms;
    }
 
  }
  .navbar-brand {
    margin-left: 30rem;
    color: white;
  }

  .navbar__background {

    background-color: white;
  }
  .active {
    color:red;
       }

       .test{
           color:red;
            padding:10rem;
       }
`;
//<Nav.Link href="/contact">&nbsp;<i className="fas fa-phone-alt"></i><span className="sr-only">(current)</span> KONTAKTA</Nav.Link>

const NavigationBar = () => {
    return (
        <Styles>
            <Container fluid className="navbar__background">
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <Nav.Item>Hamus rör</Nav.Item>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link href="/" activeClassName="active" className="test">
                                    Hem
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link exact activeClassName="active" to="/about">
                                    Våra tjänster
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">
                                    Samarbetspartners
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">
                                    Rotavdrag
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">
                                    Luft element
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">
                                    Kontakta oss
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Styles >
    );
};
export default NavigationBar;