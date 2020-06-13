import React from 'react'
import "./style.css"
import DataCard from '../DataCard/DataCard'

const CardContainer = () => {
    const links = [
        "https://app.powerbi.com/view?r=eyJrIjoiN2UwNzFkYzQtYzNkOC00MzUxLWJmN2ItYTcyMzQxN2QzNDlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiOGQxYTM5NTUtYzc5YS00NzgzLThlNDItM2RjNWM4NDYwYzA0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMGJlMmFlOGItMWE2YS00NWQxLWFiNDMtNDZhNGI2MGVlMTA4IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZGQ3YmQ2N2ItMDZhNy00OWI4LTkwNGUtNzlmOTkwNjZkMTEwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMjRhNGZjNmYtNTIzNy00MzVmLWEyMTQtNDE3YmM3MGEwODNlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMDZiYTdhMTMtNzVlNi00ZDYzLTllZmUtOTM2MDI3ZmNlNDEzIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", /*IPC*/
        "https://app.powerbi.com/view?r=eyJrIjoiNzc1OWJkM2QtZmQzOS00MTEzLTlkYzUtYWE1NGFkZDFiYTlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMGIwOGRmNDctNDFkZi00ZjlhLTgwMjQtN2JkODk1ZDVmZWUzIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMjczOGZmN2QtZTdhYy00N2M4LWE2MmItMGJjZWQzYzQxNjhjIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMTk1MzkyYmYtNGNhZC00YzRlLTg3NDUtOGZjNmJlMWM1ZDAwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiNzIzZjNjNDgtNzNmYi00ZTM5LWFlNmItMDQ0M2YxYTgwNzUzIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiNzlmOWVjMjMtZjc4MC00ZDVjLWI1MzItYTgxMzdlZDUzYzc5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMDBmMzViNjAtZWNlYi00YWUwLWFmY2ItOWZlODRjYTY4ODFkIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", /* Linux */
        "https://app.powerbi.com/view?r=eyJrIjoiZDU3ZDE1OTItMTA0OC00MDIxLWE0ZTMtNjlhMGM3NzVhYzRkIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMzBjZWQwYTMtOGU0ZS00ZWU2LTg1NDQtNGRhMDA5ZDgyYTU1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMWZiNWYzZmMtNjJlMS00OTQ1LWEwMGEtZGQ4YjJjMDMxMGFiIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZWQxMjZhNTAtYzQxNy00OWQ4LTk1YzItYWQ0ZGE0NWEyY2VlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiYmYyNDVmZDgtNjEyYy00NjhlLWFjZGYtNjVmYmQ0MGQ5ZjZlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiYWRiYjJlNWUtMDY3Mi00MGM3LTg4NjItZGU0M2JkMWVjZmMyIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZDY5NTdlMTctMzA1ZS00MzQ5LWIwYzAtN2MyMzk2NDllNzE2IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiNGI4NjQwNDUtYTlhOC00M2MyLWJjNmYtZWFlZmE2NDA3ZjMxIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", /* --- */ 
        "https://app.powerbi.com/view?r=eyJrIjoiMDlhOGUxYTQtYzQ2My00YzA4LWJmZDgtZDRjNzNmZGZhMDJiIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMjQ4MWE5ODAtMTRmZS00ZDA5LTlhZWItOTRlM2FjNGJhYTRlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiNjU1ZTc1NjctNjQ3Yi00OTRkLWFkMDAtY2RiNGNiZmU3NjlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZWU4OGMwMGEtYzBmMy00M2JhLThmNDYtMmMzMmMzNzk5MjIwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiYWE4NTY3YmEtODMzMy00YzM1LWEwYzQtMGY3MWM5ZGY4YTI3IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiMjA3N2U4ZWUtY2VkYS00ZGM3LWFiNDItZDc1YTA5MWJkYjI3IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZDY4NTg1ZmUtYzVjYi00ZGYxLWFjNTQtN2Q4NWY2Y2Y2ZWRkIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiNTJhYjM1ZjEtNGNhNi00MGUyLWE2OGEtZDhhZGVlNGY2MWNiIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiOWIwZmQ4MzctMTU5MS00ZWMzLTllODQtYTI1MTI5YmE4ODY1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
        "https://app.powerbi.com/view?r=eyJrIjoiZDM5ZTMxZmUtYjZmNy00NmUwLTgwZGMtNzVhOGYwNzMwMGUyIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9" /* --- */

    ]
    const cards = links.map((element) =>
        <DataCard src={element} key={element}/>
    )
    return (
        <div className="containerCards">
            {cards}
        </div>
    )
}
export default CardContainer
