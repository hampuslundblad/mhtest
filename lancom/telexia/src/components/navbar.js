import React, { useEffect, useState, useRef } from "react";
//import Logo from "../assets/logo.jpg";
import * as Scroll from "react-scroll";
import "../assets/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const ref = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > height) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setHeight(ref.current.clientHeight);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")} ref={ref}>
      <nav className="navbar">
        <div className="Nav__brand">Telexia</div>
        <ul>
          <li className="Nav__item ">
            <Scroll.Link
              activeClass="active"
              className="test1"
              to="services"
              spy={true}
              smooth={true}
              duration={600}
              offset={-2 * height}
            >
              Tjänster
            </Scroll.Link>
          </li>
          <li className="Nav__item">
            <Scroll.Link
              activeClass="active"
              className="test1"
              to="contact"
              spy={true}
              smooth={true}
              duration={700}
              offset={-height}
            >
              Kontakta oss
            </Scroll.Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
