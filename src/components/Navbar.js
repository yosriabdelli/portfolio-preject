import React from "react"
//React Fontawsome React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';
    
const Navbar = () => {
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');
    const servicesSection =useScrollSection('services');
    const projetsSection =useScrollSection('projets');
    const contactsSection =useScrollSection('contacts');

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4 fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" onClick={homeSection.onClick} selected={homeSection.selected}>
                            <span className="nav-link">Accueil</span>
                        </li>
                        <li className="nav-item" onClick={aboutSection.onClick} selected={aboutSection.selected}>
                            <span className="nav-link" >A propos</span>
                        </li>
                        <li className="nav-item" onClick={servicesSection.onClick} selected={servicesSection.selected}>
                            <span className="nav-link" >Services</span>
                        </li>
                        <li className="nav-item" onClick={projetsSection.onClick} selected={projetsSection.selected}>
                            <span className="nav-link" >Projets</span>
                        </li>
                        <li className="nav-item" onClick={contactsSection.onClick} selected={contactsSection.selected}>
                            <span className="nav-link" >Contacts</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
