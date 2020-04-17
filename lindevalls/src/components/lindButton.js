import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
  .btn {
    color: white;
    font-family: "PT Serif", serif;
    text-align: center;
    text-decoration: none;

    width: 15rem;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #2c5075;
    border-radius: 0px;
    &:hover {
      background-color: #112c48;
    }
  }
`;

function LindButton(props) {
  return (
    <Styles>
      <NavLink
        className="Nav__link"
        activeClassName="active"
        exact
        to={props.routeTo}
      >
        <div className=" btn">{props.btntext}</div>
      </NavLink>
    </Styles>
  );
}
export default LindButton;
