import React from "react"
import "./style.css"

const Navbar = () => {
    return (
        <navbar className="navbarContainer">
            <nav>
                Monitor
            </nav>
            <span>|</span>
            <nav>
                Prodiccion
            </nav>
            <span>|</span>
            <nav>
                Industria
            </nav>
            <span>|</span>
            <nav>
                Empleo
            </nav>
            <span>|</span>
            <nav>
                Comercio
            </nav>
            <span>|</span>
            <nav>
                Mas...
            </nav>
        </navbar>
    )
}

export default Navbar