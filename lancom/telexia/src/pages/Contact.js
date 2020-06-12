import React from "react";
import ContactForm from "../components/contactForm";
import ContactUsHeader from "../components/contactUsHeader";
import styled from "styled-components";

//Css colors
import "../assets/colors.css";

const Styles = styled.div`
  .wrapper {
    padding-top: 1.5rem;
  }
  .contactForm-wrapper {
    font-family: "Roboto", sans-serif;
  }
  .contactInfo-wrapper {
    font-family: "Roboto", sans-serif;
    color: #282828;
  }

  .contactInfo-container h3 {
  }
  .contactInfo-container p {
    color: #282828;
  }
  .icon-container {
    padding: 0.5rem;
  }
  .filler {
    height: 10rem;
    width: 100%;
  }
  .titel-text-container {
    margin-bottom: 2rem;
  }
  .titel-text-container h1 {
    color: black;
  }
  .wrapper {
  }
`;

const Contact = () => {
  return (
    <React.Fragment>
      <Styles>
        <ContactUsHeader />
        <div className="wrapper d-flex justify-content-center">
          <div className="contactInfo-wrapper col-md-3">
            <div className="contactInfo-container2 justify-content-center">
              <div className="contactInfo-container d-flex flex-row">
                <div className="icon-container col-md-1 d-flex justify-content-end"></div>
                <div className="col-md-11">
                  <div className="titel-text-container">
                    <h1>Ring oss</h1>
                  </div>
                </div>
              </div>
              <div className="contactInfo-container d-flex flex-row">
                <div className="icon-container col-md-1 d-flex justify-content-end">
                  <i class="fas fa-phone"></i>
                </div>
                <div className="col-md-11">
                  <div className="adress-text-container">
                    <h3>Telefon</h3>
                    <p>017 - 16 58 000</p>
                  </div>
                </div>
              </div>

              <div className="contactInfo-container d-flex flex-row">
                <div className="icon-container col-md-1 d-flex justify-content-end">
                  <i class="fas fa-envelope-square"></i>
                </div>
                <div className="col-md-11">
                  <div className="adress-text-container">
                    <h3>E-postadress</h3>
                    <p>enkoping@ringup.se</p>
                  </div>
                </div>
              </div>
              <div className="contactInfo-container d-flex flex-row">
                <div className="icon-container col-md-1 d-flex justify-content-end">
                  <i class="fas fa-house-user"></i>
                </div>
                <div className="col-md-11">
                  <div className="adress-text-container">
                    <h3>Adress</h3>
                    <p>Gånstavägen 4 74943 Enköping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contactForm-wrapper col-md-3">
            <h1>Kontakta oss</h1>

            <ContactForm />
          </div>
        </div>
        <div className="filler"></div>
      </Styles>
    </React.Fragment>
  );
};

export default Contact;
