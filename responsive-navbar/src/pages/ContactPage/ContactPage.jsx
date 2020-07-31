import React from "react";
import ContactFrom from "./ContactForm/contactForm";
import BasicHero from "../../components/BasicHero/BasicHero";
import ContactUsInfo from "../../components/ContactUsInfo/ContactUsInfo";
import "./ContactPage.css";
import heroImg from "../../assets/meetingC.jpg";

function ContactPage(props) {
  return (
    <main style={{ marginTop: "7rem" }}>
      <BasicHero title="Kontakta oss" image={heroImg} />
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2 className="main__title"> Skriv till oss!</h2>
          <ContactFrom />
        </div>
        <div className="contact-info">
          <ContactUsInfo
            city="Enköping"
            telephone="0171 - 65 80 00"
            email="info@ringupenkoping.se"
            street="Gångstavägen 4"
            zip="749 42 Enköping"
          />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
