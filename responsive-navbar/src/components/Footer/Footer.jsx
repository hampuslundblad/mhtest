import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import mail from "../../assets/mail.png";
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const Footer = (props) => (
  <footer className="footer-wrapper">
    <div className="footer-about">
      <h3>Om oss</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s,
      </p>
      <ul className="footer-icons ">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <img src={instagram} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <img src={facebook} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@ringupenkoping.se
"
          >
            {" "}
            <img src={mail} alt="mail icon" />
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-contact ">
      <h3>Kontakta oss</h3>
      <ul>
        <li>info@ringupenkoping.se</li>
        <li>0171 - 65 80 00</li>
      </ul>
    </div>
    <div className="footer-contact ">
      <h3>Besök oss</h3>
      <ul>
        <li> Gångstavägen 4</li>
        <li>749 42 Enköping</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
