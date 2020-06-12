import React from 'react'
import "./style.css"
import Logo from "../../images/logo3.jpg"

const DataCard = () => {
    return (
        <div className="cardContainer">
            <div className="wrapperTitle">
                <span className="titleCard">
                    Primera
                </span>
                <img 
                className="logoDataCard"
                alt="logo de tarjeta"
                src={Logo}
                />
            </div>
            <div>
                
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiN2UwNzFkYzQtYzNkOC00MzUxLWJmN2ItYTcyMzQxN2QzNDlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>
            
            </div>
        </div>
    )
}

export default DataCard