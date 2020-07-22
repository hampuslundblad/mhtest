import React from "react";
import {
  Link
} from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "../../assets/Telexia.svg";
import "./Toolbar.css";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="toolbar__logo">
        <a href="/">
          <img src={logo} alt="Telexia logga" className="logo" />{" "}
        </a>
      </div>

      <div className="spacer" />

      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="/tja" className="hover">Tjänster</Link>
          </li>
          <li>

            <Link className="hover" to="kontaktaoss">Kontakta oss</Link>
          </li>
          <div className="underbar"></div>
        </ul>
      </div>

    </nav>
  </header>
);
export default Toolbar;
