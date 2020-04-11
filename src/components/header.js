import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
.header-wrapper{
    width:100%;
    height:4rem;
    background-color:#2c5075;
    

}
.header-text-container{
    
}
.header-text-container ul li{
    color:white;
    font-size:0.7rem;
}
.header-text-container ul{
    padding-right:1rem;
    margin-left:2rem;
    margin-top:auto;
    margin-bottom:auto;
}
.header-text-container a{
    color:white;
}
`;

const Header = () => {
    return (
        <Styles>
            <div className="header-wrapper d-flex justify-content-start">
                <div className="header-text-container d-flex ">
                    <ul className="list-unstyled">
                        <li><strong>Adress:</strong> <u>Kvartsgatan 12, Enköping</u>(ring innan, inte alltid bemannat)</li>
                        <li><strong>Öppettider:</strong> 07:00-16:00 (lunch 11:00-12:00)</li>
                    </ul>
                </div>
                <div className="header-text-container d-flex">
                    <ul className="list-unstyled">
                        <li><strong>Telefon:</strong> 0171 212 03</li>
                        <li><strong>E-post:</strong> <u><a href="mailto:hamu@gmail.com">hamu@gmail.com</a></u></li>
                    </ul>
                </div>
            </div>
        </Styles>
    );
};
export default Header;
/*Hemligt meddelandejjj*/