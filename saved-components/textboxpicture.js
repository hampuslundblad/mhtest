import React from "react";
import styled from "styled-components";
import image from "../assets/logo.jpg";

const Styles = styled.div`
  .textbox-wrapper {
    margin-top: 5rem;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-size: 2.5rem;
  }

  p {
    color: #383838;
    line-height: 1.8rem;
  }

  .descText-container {
  }

  .img-container {
  }
  .img-container img {
    width: 20rem;
  }

  .button-container {
    margin-top: 3rem;
  }
`;

function TextBoxPic() {
  return (
    <Styles>
      <div className="textbox-wrapper d-flex justify-content-center">
        <div className="img-container col-md-4">
          <img src={image} alt="Ringup logo"></img>
        </div>
        <div className="descText-container col-md-5">
          <h1>Vad gör vi?</h1>

          <p>
            {" "}
            Vi tillhandahåller endast rör och bistår dig som rör oavsett
            omfattning av rör under hela processen, från rör till rör och rör.
            Vår mångåriga rörerfarenhet har fått oss att inse vikten av
            personliga och individuella rör och med anledning därav, arbetar vi
            ständigt för att i så hög utsträckning som möjligt tillmötesgå
            kunden under hela arbetsprocessen.
          </p>
        </div>
      </div>
    </Styles>
  );
}
export default TextBoxPic;
