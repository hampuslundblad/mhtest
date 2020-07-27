import React from "react";
import ContactFrom from "./ContactForm/contactForm";
import "./ContactPage.css";

function ContactPage(props) {
  return (
    <main style={{ marginTop: "7rem" }}>
      <h2>Kontakta oss</h2>
      <div className="contact-form">
        <ContactFrom />
      </div>
    </main>
  );
}

export default ContactPage;
