import React from "react"
import "./style.css"
import logoMinisterio from "../../images/logo1.png"
import logoChaco from "../../images/logo2.png"

const Footer = () => {
    return (
        <footer className="footerWrapper">
            <div className="stickyFooter centerFooter">
                <img
                className="logoMinisterio"
                alt="logo Ministerio"
                src={logoMinisterio}
                />
                <span className="textFooter">
                </span>
                <img
                className="logoChaco"
                alt="logoChaco"
                src={logoChaco}
                />
            </div>
        </footer>
    )
}
export default Footer