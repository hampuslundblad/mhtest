import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
const Styles = styled.div`
  .navbar {
    position: absolute;
    z-index: 1;
    background-color: white;
    width: 100%;
    height: 5rem;
  }

  .active {
    transition: 0ms;
  }
  .logo {
    width: 13.31rem;
    height: 5rem;
  }

  .Nav__link {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #585858;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    &:hover {
      color: #2f557d;
      transition: 250ms;
      text-decoration: none;
    }
  }
  .Nav__brand {
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
    color: #013765;
  }
`;

const NavBar2 = ({}) => (
  <Styles>
    <nav className="navbar Nav__container  navbar-expand-lg d-flex">
      <NavLink to="/" className="Nav__brand navbar-brand">
        Telexia
      </NavLink>{" "}
      <div className="Nav__right d-flex" id="navbarSupportedContent">
        <ul className="Nav__item-wrapper navbar-nav ">
          <li className="Nav__item align-self-center">
            <NavLink
              className="Nav__link"
              activeClassName="active"
              exact
              to="/vara-tjanster"
            >
              Tjänster
            </NavLink>
          </li>
          <li className="Nav__item align-self-center">
            <NavLink
              className="Nav__link"
              activeClassName="active"
              to="/contact"
            >
              Kontakta oss
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </Styles>
);
export default NavBar2;
