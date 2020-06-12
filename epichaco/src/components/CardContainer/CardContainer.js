import React from 'react'
import "./style.css"
import DataCard from '../DataCard/DataCard'

const CardContainer = () => {
    const links = [
        "https://app.powerbi.com/view?r=eyJrIjoiN2UwNzFkYzQtYzNkOC00MzUxLWJmN2ItYTcyMzQxN2QzNDlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiOGQxYTM5NTUtYzc5YS00NzgzLThlNDItM2RjNWM4NDYwYzA0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMGJlMmFlOGItMWE2YS00NWQxLWFiNDMtNDZhNGI2MGVlMTA4IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZGQ3YmQ2N2ItMDZhNy00OWI4LTkwNGUtNzlmOTkwNjZkMTEwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMjRhNGZjNmYtNTIzNy00MzVmLWEyMTQtNDE3YmM3MGEwODNlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9"
    ]
    const cards = links.map((element) =>
        <DataCard src={element} />
    )
    return (
        <div className="containerCards">
            {cards}
        </div>
    )
}
export default CardContainer