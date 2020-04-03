import React, { Component } from 'react';
import Logo from "./logo.png";
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className = "logo">
          <img src ={Logo} alt ="website logo"/>
        </div>
        <nav>
          <ul>
            <li className = "first">
                <Link to="/">Hem | </Link>
            </li>
            <li>
              <Link to="/Products">Om oss | </Link>

            </li>
            <li className = "last">
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
