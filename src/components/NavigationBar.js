import React from 'react'
import {Nav, Navbar,Image} from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../pictures/logo.png';
import Container from 'react-bootstrap/Container';


const Styles = styled.div`
    .navbar{
        
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: #ffffff;

        &:hover{
            color:white;
        }
       
    }
    .navbar__background{
        background-color: #557A95;
        max-width:100%;
    }
    .navbar__container{
        
    }
`;

export const NavigationBar = () => (

    <Styles>
        <Container fluid className= "navbar__background">
            <Container className = "navbar__container">
            <Navbar className ="justify-content-center" expand="lg">
            <Navbar.Brand href ="/"><Nav.Item><Image src={Logo} rounded></Image></Nav.Item></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
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