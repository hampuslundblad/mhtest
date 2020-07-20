import React from 'react';
import "./clients.css";
import BreakTitle from "../BreakTitle/BreakTitle";
import PropTypes from "prop-types";


function Clients(props) {
    const clientArray = props.imgArray.map(x => <img style={{width:props.width, height:props.height}} src={x} alt="no pics"/>)

    return (
        <div className="bigWrap">
            <div className="breakWrap">
                <BreakTitle
                    title="Ett urval av våra kunder"
                    titleColor="#263271" />
            </div>
            <div className="clientWrap">
                {clientArray}
            </div>

        </div>
    );

};
Clients.defaultProps = {
    imgArray: "no pics in array",
    width: "100px",
    height: "100px",
};
Clients.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};


export default Clients;
