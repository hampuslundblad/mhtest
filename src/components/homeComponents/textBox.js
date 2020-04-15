import React from 'react';
import styled from 'styled-components';
import image from '../../assets/pictures/lindevallror.jpg';
import LindButtonArrow from '../lindButtonArrow';

const Styles = styled.div`
.textbox-wrapper{
    margin-top:5rem;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    //Alignment
}

h1 {
    font-family: 'PT Serif', serif;
    margin-bottom:2rem;
}

p{
    color:#383838;
    line-height:1.8rem;
}

.descText-container{
}

.img-container{
}
.img-container img{
    width:44rem;
}

.button-container{
    margin-top:3rem;
}
`;

function TextBox() {
    return (
        <Styles>
            <div className="textbox-wrapper d-flex">
                
                <div className="descText-container col-md-5">
                <h1>Hamus Bästa rör</h1>

                  
                   <p> Vi tillhandahåller endast rör och bistår dig som rör oavsett omfattning av rör under hela processen, från rör till rör och rör. Vår mångåriga rörerfarenhet har fått oss att inse vikten av personliga och individuella rör och med anledning därav, arbetar vi ständigt för att i så hög utsträckning som möjligt tillmötesgå kunden under hela arbetsprocessen.</p>
                   <div className="button-container">
                <ul className="list-unstyled">
                <li><LindButtonArrow btntext="Gå till VVS"/></li>
                <li><LindButtonArrow btntext="Gå till service"/></li>
                <li><LindButtonArrow btntext="Gå till värmepumpar"/></li>
                </ul>
                </div>
                </div>
                <div className="img-container col-md-8">
                 <img src={image}></img>
                </div>
               
            </div>
        
        </Styles>
    )

}
export default TextBox;
