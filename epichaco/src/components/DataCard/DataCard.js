import React from 'react'
import "./style.css"
const DataCard = (props) => {
    return (
        <div className="cardContainer">
            <iframe 
            className="iframeContainer"
            src={props.src}
            ></iframe>
        </div>
    )
}
export default DataCard