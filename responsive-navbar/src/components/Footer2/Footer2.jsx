import React from 'react'
import LOGO from '../../assets/telexia-logo.png';
import "./footer2.css";

function footer2() {
    return (

        <div className="footerDistributed">
            <div className="footerLeft">
                <img src={LOGO} />
                <h3>Om <span>Telexia</span></h3>
                <p className="footerLinks">
                    <a href="#">Hem </a>
                    | 
                   <a href="#"> Tjänster </a>
                   |
                   <a href="#">Om oss</a>
                   |
                   <a href="#">Kontakt</a>
                </p>
                <p className="footerCompanyName">2020 Telexia AB</p>
            </div>
            <div className="footerCenter">
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p><span> Gångstavägen 4</span>
                    749 42 Enköping</p>
                </div>

                <div>
                    <i class="fas fa-phone-alt"></i>
                    <p>0171 - 65 80 00</p>
                </div>
                <div>
                    <i class="far fa-envelope"></i>
                    <p>info@ringupenkoping.se</p>
                </div>

            </div>
            <div className="footerRight">
                <p className="footerCompanyAbout">
                    Lorem ipsum tillsammans!</p>
                <div className="footerIcons">
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                </div>
            </div>

        </div>

    )
}

export default footer2;