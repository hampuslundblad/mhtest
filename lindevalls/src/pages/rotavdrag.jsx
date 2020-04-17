import React from "react";
import Hero from "../components/hero";
import styled from "styled-components";

const Styles = styled.div`
  .textbox {
    margin-top: 4rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .textbox h1 {
    font-family: "PT Serif", serif;
  }
  .textbox h3 {
    font-family: "PT Serif", serif;
  }
  .textbox p {
    color: #383838;
    line-height: 1.8rem;
    padding: 0.5rem 0px;
  }
`;

function Rotavdrag() {
  return (
    <Styles>
      <Hero title="Rotavdrag" />
      <div className="wrapper d-flex">
        <div className="textbox">
          <h1>Det här gäller vid rotavdrag</h1>
          <p>
            Rotavdrag – hur går det till? Hur mycket pengar får man dra av? Och
            hur ansöker man? Här har vi valt ut det mest väsentliga för dig som
            vill veta vad som gäller och hur du enkelt och direkt kan dra fördel
            av avdraget.
          </p>
          <p>
            Rotavdrag innebär att du som helt eller delvis är ägare till en
            villa, ett radhus, en bostadsrätt eller ett fritidshus kan få göra
            avdrag på din skatt för arbetskostnaden när du anlitar en
            hantverkare för renovering, reparation, underhåll samt om- och
            tillbyggnad.
          </p>

          <h3> Dra av 30%</h3>
          <p>
            Det är 30 procent av arbetskostnaden som ger rätt till rotavdrag.
            Kostnader för material, resor, utrustning eller administration i
            samband med arbetet ger alltså inte rätt till avdrag. Och företaget
            som du anlitar måste ha en F-skattsedel.
          </p>
          <h3>Rotavdraget är kopplat till dig</h3>
          <p>
            Hur mycket du kan ta del av avdraget hänger ihop med din inkomst och
            hur mycket du skattar. Förenklat måste du ha betalat motsvarande
            summa i skatt under året som du vill göra avdrag på.s
          </p>
          <p>
            Är man två delägare i bostaden kan hushållet få en maximal
            skattereduktion på 2 x 50 000 kronor/år, dvs upp till 100 000
            kronor. Du ansöker inte själv om rotavdraget. Det gör den som utfört
            arbetet åt dig, vilket innebär att avdraget på arbetskostnaden redan
            är gjort när du får din faktura.
          </p>
          <h3>Vill du veta mer?</h3>
          <p>
            Gå in på Skatteverkets hemsida och läs om ROT-avdrag, där hittar du
            all information du behöver, www.skatteverket.se
          </p>
        </div>
      </div>
    </Styles>
  );
}
export default Rotavdrag;
