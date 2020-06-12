import React from "react";
import styled from "styled-components";

import Hero from "../components/hero";
import TextBoxPic from "../components/textboxpicture";
import TextBoxServices from "../components/textboxservices";
const Styles = styled.div``;
export default function Home() {
  return (
    <Styles>
      <Hero />
      <TextBoxPic></TextBoxPic>
      <TextBoxServices></TextBoxServices>
    </Styles>
  );
}
