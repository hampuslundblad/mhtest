import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "../../assets/telexia-logo.png";
import "./Toolbar.css";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="toolbar__logo">
        <img src={logo} alt="Telexia logga" className="logo" />{" "}
      </div>

      <div className="spacer" />

      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a className="hover" href="/">
              TJÄNSTER
            </a>
          </li>
          <li>
            <a className="hover" href="/">
              KONTAKTA OSS
            </a>
          </li>
          <div className="underbar"></div>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;
