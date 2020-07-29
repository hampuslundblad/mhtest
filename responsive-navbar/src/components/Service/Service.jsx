import React from "react";

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

import "./Service.css";
import BreakTitle from "../BreakTitle/BreakTitle";
import Card from "../Card/Card";

//        description="Vi på Telexia är specialister på allt inom företagstelefoni och våra skräddarsydda lösningar täcker alltifrån mobila och fasta företagsabonnemang och företagstelefoner, till växelsystem och IP-telefoni. Telexia analyserar ditt företag och ger dig en lösning med utgångspunkt från era behov och önskemål. "
//        description="Tänk en körjournal som är helt automatisk, och att bara logga in på datorn eller appen för att ta fram körjournalen. Tänk att kunna positionera alla bilar i realtid på karta. Tänk en lösning med stöldskydd, ECO-driving och mycket mer. Kontakta oss för mer information "

const Service = (props) => (
  <div className="service-wrapper">
    <BreakTitle title="Vad är du intresserad av?" titleColor="#263271" />

    <div className="card-container">
      <Card
        img={pic1}
        title="Telefoni"
        description="Vi ringer och så ibland "
      />
      <Card
        img={pic2}
        title="Körjournaler"
        description="Köra bil köra bil köra bil bil bil"
      />
      <Card img={pic3} title="IT-lösningar" description="We da hackers mon" />
    </div>
  </div>
);

export default Service;
