import React from 'react'
import "./style.css"
import Logo from "../../images/logo3.jpg"

const DataCard = () => {
    return (
        <div className="cardContainer">
            <div className="wrapperTitle">
                <span className="titleCard">
                    Nombre de Card
                </span>
                <img
                    className="logoDataCard"
                    alt="logo de tarjeta"
                    src={Logo}
                />
            </div>
            <div>

                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiN2UwNzFkYzQtYzNkOC00MzUxLWJmN2ItYTcyMzQxN2QzNDlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>

                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiOGQxYTM5NTUtYzc5YS00NzgzLThlNDItM2RjNWM4NDYwYzA0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>

                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGJlMmFlOGItMWE2YS00NWQxLWFiNDMtNDZhNGI2MGVlMTA4IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>

                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiZGQ3YmQ2N2ItMDZhNy00OWI4LTkwNGUtNzlmOTkwNjZkMTEwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>

                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMjRhNGZjNmYtNTIzNy00MzVmLWEyMTQtNDE3YmM3MGEwODNlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"></iframe>

            </div>
        </div>
    )
}

export default DataCard