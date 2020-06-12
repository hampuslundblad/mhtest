import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
const Styles = styled.div`
  .Nav__container {
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
  .Nav__right {
  }
  .Nav__brand {
  }
`;

class NavBar2 extends React.Component {
  render() {
    return (
      <Styles>
        <nav className="Nav navbar navbar-expand-lg">
          <div className="Nav__container  d-flex">
            <NavLink to="/" className="Nav__brand navbar-brand">
              <img className="logo" src={Logo}></img>
            </NavLink>{" "}
            <div className="Nav__right d-flex" id="navbarSupportedContent">
              <ul className="Nav__item-wrapper navbar-nav ">
                <li className="Nav__item align-self-center">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    exact
                    to="/OurServices"
                  >
                    Tjänster
                  </NavLink>
                </li>
                <li className="Nav__item align-self-center">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/vara-tjanster"
                  >
                    Om oss
                  </NavLink>
                </li>
                <li className="Nav__item align-self-center">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/contactPage"
                  >
                    Kontakta oss
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Styles>
    );
  }
}
export default NavBar2;
