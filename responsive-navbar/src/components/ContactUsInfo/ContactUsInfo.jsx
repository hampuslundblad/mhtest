import React from "react";
import "./ContactUsInfo.css";

/*
--Props--
.city - vilken stad, kommer vara titel
-telephone
-email
-street - Bara vilken gata och gatunummer
-zip  - postnummer + postort



*/
const ContactUsInfo = (props) => {
  return (
    <div className="contact-info-wrapper">
      <h1 className="info-title">{props.city} </h1>
      <div className="container-icon info-row">
        <i class="fas fa-phone-volume"></i>
        {props.telephone}
      </div>
      <div className="container-icon info-row">
        <i class="fas fa-envelope"></i>
        {props.email}
      </div>
      <div className="info-row">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>{props.street}</li>
          <li>{props.zip}</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUsInfo;
