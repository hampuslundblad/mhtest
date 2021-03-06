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
    color: white;
    font-family: "PT Serif", serif;
    text-align: left;
    &:hover {
      background-color: #112c48;
    }
  }
  .Nav__link {
    color: white;
    font-family: "PT Serif", serif;
    text-align: left;
    text-decoration: none;
  }
`;

function LindButtonArrow(props) {
  return (
    <Styles>
      <NavLink
        className="Nav__link"
        activeClassName="active"
        exact
        to={props.routeTo}
      >
        <div className="btn d-flex flew-row justify-content-start">
          <div className="col-md-11">{props.btntext}</div>
          <div className="col-md-1">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </NavLink>
    </Styles>
  );
}
export default LindButtonArrow;
