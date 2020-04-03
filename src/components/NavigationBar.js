import React from 'react'
import {Nav, Navbar,Image} from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../pictures/logo.png';
import Container from 'react-bootstrap/Container';


const Styles = styled.div`


    .navbar-nav .nav-link{
        color: #ffffff;
        padding:1em 1em;
        margin:0em 0.1em;
        border-radius:0.2em;
        &:hover{
           background-color:white;
           color:#5D5C61;
  
        }
  
    }
    .navbar-brand{
        color: #ffffff;
        &:hover{
            color :#ffffff;
        }
    }
    .navbar__background{
        background-color: #557A95;
        max-width:100%;
        
    }
    .navbar__container{
        width:100%;
        height:7em;
    }
    .vl{
        border-right:1px solid white;
        height:3em;
        padding-left:0.5em;
    }
    
`;

export const NavigationBar = () => (

    <Styles>
        <Container fluid className= "navbar__background">
            <Container className = "d-flex justify-content-left">
            <Navbar expand="lg">
            <Navbar.Brand href ="/"><Nav.Item>Markentrepenad AB</Nav.Item></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex ml-auto">
                    <Nav.Item className="vl d-flex align-content-center"></Nav.Item>
                    <Nav.Item><Nav.Link href="/">Startsida</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Om oss</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Kontakta oss</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        </Container>
    </Styles>
)