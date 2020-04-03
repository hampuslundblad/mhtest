import React from 'react'
import {Nav, Navbar,Image} from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../pictures/logo2.jpg';

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover{
            color:white;
        }
        &:visited{
            background-color: #ffeeee;
        }
    }
`;

export const NavigationBar = () => (
    
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href ="/"><Nav.Item><Image src={Logo} rounded></Image></Nav.Item></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/">Startsida</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Om oss</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Kontakta oss</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)