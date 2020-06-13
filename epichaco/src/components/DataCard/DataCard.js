import React from 'react'
import "./style.css"


const DataCard = (props) => {
    return (
        <div className="cardContainer">
            <iframe 
            className="iframeContainer"
            src={props.src}
            title="View"
            ></iframe>
        </div>
    )
}
export default DataCard