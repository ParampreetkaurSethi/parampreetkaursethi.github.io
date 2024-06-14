import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import CSS file for styling
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-left">
            <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <span>Parampreetkaur Sethi</span>
            </div>
            <div className="footer-middle">
                {/* Use Link component for navigation */}
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-right">
                <p>Copyright © 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
