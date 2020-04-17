import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .active {
    border-bottom: 2px solid #213c58;
    transition: 0ms;
  }
  .Nav__link {
    font-family: "PT Serif", serif;
    font-size: 1rem;
    color: #585858;
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;

    &:hover {
      color: #2f557d;
      transition: 250ms;
      text-decoration: none;
    }
  }
  .Nav__right {
  }
  .Nav__container {
  }
  .Nav {
    margin-bottom: 1.55rem;
  }
`;

class NavBar2 extends React.Component {
  render() {
    return (
      <Styles>
        <nav className="Nav navbar navbar-expand-lg d-flex justify-content-end">
          <div className="Nav__container ">
            <NavLink to="/" className="Nav__brand navbar-brand"></NavLink>

            <div className="Nav__right" id="navbarSupportedContent">
              <ul className="Nav__item-wrapper navbar-nav ml-auto">
                <li className="Nav__item">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    exact
                    to="/"
                  >
                    Hem
                  </NavLink>
                </li>
                <li className="Nav__item">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/vara-tjanster"
                  >
                    Våra tjänster
                  </NavLink>
                </li>
                <li className="Nav__item">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/sammarbetspartners"
                  >
                    Sammarbetspartners
                  </NavLink>
                </li>
                <li className="Nav__item">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/rotavdrag"
                  >
                    Rotavdrag
                  </NavLink>
                </li>
                <li className="Nav__item">
                  <NavLink
                    className="Nav__link"
                    activeClassName="active"
                    to="/lufta-element"
                  >
                    Lufta element
                  </NavLink>
                </li>
                <li className="Nav__item">
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
