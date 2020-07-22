import React from 'react';
import "./clients.css";
import BreakTitle from "../BreakTitle/BreakTitle";
import PropTypes from "prop-types";

function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    var myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }
    return tempArray;
    
}


function Clients(props) {
    const clientArray = props.imgArray.map(x => <img classname="row" style={{ width: props.width, height: props.height }} src={x} alt="no pics" />)
    const clientRows = chunkArray(clientArray,4);
    return (
        <div className="bigWrap">
            <div className="breakWrap">
                <BreakTitle
                    title="Ett urval av våra kunder"
                    titleColor="#263271" />
            </div>
            <div className="clientWrap">
            { clientRows.map(row => ( <div className="row">{ row }</div>))}
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
