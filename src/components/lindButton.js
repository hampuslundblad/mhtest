import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.btn{
    width:20rem;
    padding:1rem;
    margin-top:1rem;
    background-color:#2c5075;
    border-radius:0px;
    color:white;
    font-family: 'PT Serif', serif;
    text-align:left;
    &:hover{
        background-color:#112c48;
    }
}
i{
    margin-top:0.2rem;
}
`;

function LindButton(props) {
    return (
        <Styles>
            <div className=" btn d-flex justify-content-start">
          <div className="col-md-11">{props.btntext}</div>
          <i class="fas fa-chevron-right col-md-1"></i>
        </div>
        </Styles>
    )

}
export default LindButton;
