import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link component for navigation

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Use Link component to make logo clickable */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
