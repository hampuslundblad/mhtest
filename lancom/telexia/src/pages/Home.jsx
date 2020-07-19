import React from "react";
import styled from "styled-components";

import Hero from "../components/hero";
import Contact from "./Contact";
import TextBoxPic from "../components/textboxpicture";
import TextBoxServices from "../components/textboxservices";
import * as Scroll from "react-scroll";
import Footer from "../components/Footer";

const Styles = styled.div`
  .contact-box {
    margin-top: 7rem;
  }

  .title {
    font-family: "Roboto", sans-serif;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-size: 4rem;
    text-align: center;
  }
  .title-box {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: #f3f8fa;
    padding: 4rem;
  }
`;
export default function Home() {
  return (
    <Styles>
      <Hero />
      <TextBoxPic />
      <TextBoxServices />
      <Scroll.Element name="contact">
        <div className="contact-box">
          <div className="title-box">
            <h1 className="title">Kontakta oss</h1>
          </div>

          <Contact />
        </div>
      </Scroll.Element>
      <Footer />
    </Styles>
  );
}
