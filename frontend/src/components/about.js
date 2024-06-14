// about.js
import React from 'react';
import './about.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import img from "../assets/img.png";

const About = () => {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100075204951083&mibextid=LQQJ4d';
    const instagramUrl = 'https://www.instagram.com/example';
    const linkedinUrl = 'https://www.linkedin.com/in/parampreetkaur-sethi-379b73231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';

    return (
        
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <div className="portfolio-columns">
                        <div className="portfolio-column image-column">
                            <div className="image-wrapper">
                                <img src={img} alt="" />
                                <div className="social-buttons">
                                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-button">
                                        <FaFacebookF />
                                    </a>
                                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-button instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-button">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-column text-column">
                            <h2 className="portfolio-heading">Designer with a Passion for Innovation.</h2>
                            <p className="portfolio-description">
                                I'm Parampreetkaur Sethi, a Final year student at the School of Fashion Technology and an advanced certified UI/UX designer. My freelance work spans graphic design, logo design, content writing, social media management, and UI/UX design. Known for my proactive approach and ability to meet deadlines, I thrive in fast-paced environments. As the Head HR at the startup SocialLEADS, I excel in communication and people management, ensuring successful collaboration and project execution.
                            </p>
                            <div className="portfolio-buttons1">
                                <a href="/portfolio" className="project-button1" style={{
                                    textDecoration: 'None', fontFamily: 'Work Sans', fontWeight: '600', color: 'white', backgroundColor: 'black', fontSize: '16px',
                                }}> My Project</a>
                                <a href="../assets/Resume.pdf" download className="resume-button1" style={{
                                    textDecoration: 'None', fontFamily: 'Work Sans', fontWeight: '600', color: 'black', backgroundColor: 'white', fontSize: '16px', border: 'solid', borderColor: 'black', borderWidth: '1px', marginLeft: '8px',
                                }}>
                                    <FaDownload className="download-icon" />
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}

export default About;
