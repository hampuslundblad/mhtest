import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
  .btn {
    width: 20rem;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #2c5075;
    border-radius: 0px;
    &:hover {
      background-color: #112c48;
    }
  }
  .Nav__link {
    color: white;
    font-family: "PT Serif", serif;
    text-align: center;
    text-decoration: none;
  }
  i {
    margin-top: 0.2rem;
  }
`;

function LindButton(props) {
  return (
    <Styles>
      <div className=" btn d-flex">
        <NavLink
          className="Nav__link col-md-11"
          activeClassName="active"
          exact
          to="/"
        >
          {props.btntext}
        </NavLink>
      </div>
    </Styles>
  );
}
export default LindButton;
