import React from 'react';
import './Home.css'; // Import CSS file for styling
import image1 from "../assets/Research.png";
import image2 from "../assets/Analyze.png";
import image3 from "../assets/Design.png";
import image4 from "../assets/launch.png";
import TestimonialCarousel from './TestimonialCarousel'; // Assuming TestimonialCarousel is another component for the carousel
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import imag1 from '../assets/location.png';
import imag2 from '../assets/Email.png';
import imag3 from '../assets/Phone.png';
const Home = () => {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100075204951083&mibextid=LQQJ4d';
    const instagramUrl = 'https://www.instagram.com/example';
    const linkedinUrl = 'https://www.linkedin.com/in/parampreetkaur-sethi-379b73231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
    return (
        <div className="home-container">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Hello, Im <br/>Parampreetkaur Sethi</h1>
                    <div className="experience">
                        <p>3 Years Experience</p>
                    </div>
                    <div className="buttons">
                    <a href="/portfolio" className="project-button" > My Project</a>

                        <a href="../assets/Resume.pdf" download className="resume-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
                <div className="hero-image"></div>
            </div>
            <div className="work-process-container">

                <div className="work-process-text">
                    <h2>Work <br/>Process</h2>
                    <p>As a Designer, my work process is structured around four key phases: Research, Analyze, Design, and Launch. This approach ensures that every design decision is data-driven and user-centered. By systematically following these steps, I aim to create intuitive and engaging user experiences.</p>
                </div>
                <div className="work-process-cards">
                    <div className="work-process-card">
                        <div className="work-process-card-image">
                            <img src={image1} alt="Research" />
                        </div>
                        <h3>1. Research</h3>
                        <p>I gather information about user needs, market trends, and competitor products to inform design decisions.</p>
                    </div>
                    <div className="work-process-card">
                        <div className="work-process-card-image">
                            <img src={image2} alt="Analyze" />
                        </div>
                        <h3>2. Analyze</h3>
                        <p>I interpret the research data to identify key insights and user pain points.</p>
                    </div>
                    <div className="work-process-card">
                        <div className="work-process-card-image">
                            <img src={image3} alt="Design" />
                        </div>
                        <h3>3. Design</h3>
                        <p>I create wireframes, prototypes, and final designs based on the analysis to address user needs and preferences.</p>
                    </div>
                    <div className="work-process-card">
                        <div className="work-process-card-image">
                            <img src={image4} alt="Launch" />
                        </div>
                        <h3>4. Launch</h3>
                        <p>I oversee the implementation of the design, ensuring it meets the project requirements and provides a seamless user experience.</p>
                    </div>
                </div>
            </div>
                       {/* New Testimonial Section */}
            <div className="testimonial-section">
                <h2 className="testimonial-heading">Testimonials</h2>
                <div className="testimonial-carousel">
                    {/* Insert your carousel component here */}
                    <TestimonialCarousel />
                </div>
            </div>

{/*contact section*/ }
<           div className="contact-section">
                
                
<div className="contact-container1" >
            <div className="contact-box1">
                <h2 className="contact-heading1">LET'S DISCUSS YOUR PROJECT</h2>
                <div className="contact-columns1">
                    <div className="contact-column1">
                        <div className="contact-cards1">
                            <div className="contact-card1">
                                <div className="card-image1">
                                    <img src={imag1} alt="Card" />
                                </div>
                                <div className="card-text1">
                                    <h3>Address: </h3>
                                    <p>Pune, Maharashtra</p>
                                </div>
                            </div>
                            <div className="contact-card1">
                                <div className="card-image1">
                                    <img src={imag2} alt="Card" />
                                </div>
                                <div className="card-text1">
                                    <h3>My Email:</h3>
                                    <p>sethiparampreet031@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-card1">
                                <div className="card-image1">
                                    <img src={imag3} alt="Card" />
                                </div>
                                <div className="card-text1">
                                    <h3>Phone Number:</h3>
                                    <p>+91 7350789858</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-buttons1">
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
                    <div className="contact-column1">
                        <form className="contact-form1">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="form-group1">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group1">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" />
                            </div>
                            <div className="form-group1">
                                <label htmlFor="budget">Budget</label>
                                <input type="text" id="budget" name="budget" />
                            </div>
                            <div className="form-group1">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                
            </div>
            


        </div>
    );
};

export default Home;
