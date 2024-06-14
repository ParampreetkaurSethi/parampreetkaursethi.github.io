import React from 'react';
import './Portfolio.css'; // Import your CSS file for styling
import ecoWiseImage from '../assets/11.png'; // Import image for EcoWise project
import ig1 from '../assets/12.png'; // Import image for EcoWise project
import ig2 from '../assets/13.png'; // Import image for EcoWise project
import ig3 from '../assets/14.png'; // Import image for EcoWise project
import ig4 from '../assets/15.png'; // Import image for EcoWise project
import ig5 from '../assets/16.png'; // Import image for EcoWise project
import ig6 from '../assets/17.png'; // Import image for EcoWise project
import ig7 from '../assets/18.png'; // Import image for EcoWise project
import arrowRightImage from '../assets/arrow.png';



const Portfolio = () => {
    return (
        <div className="portfolio-container">
            {/* Row 1: Heading */}
            <div className="portfolio-heading">
                <h1>PORTFOLIO</h1>
            </div>

            {/* Row 2: First set of 4 cards */}
            <div className="portfolio-row">
                <div className="portfolio-card">
                    <img src={ecoWiseImage} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details">
                        <p className="category">UI-UX DESIGN</p>
                        <h2 className="project-name">EcoWise</h2>
                        <p className="description">A Platform To Shop Naturally Sustainable Products.</p>
                        <a href="/case1" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src={ig1} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details">
                        <p className="category">UI-UX DESIGN</p>
                        <h2 className="project-name">FreshlyGreen</h2>
                        <p className="description">A Cafe Admin Website Application.</p>
                        <a href="/case2" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src={ig2} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details">
                        <p className="category">UI-UX DESIGN</p>
                        <h2 className="project-name">HouseHolder</h2>
                        <p className="description">Skill Developing & Revenue Generating Platform.</p>
                        <a href="/case3" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src={ig3} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details">
                        <p className="category">BRANDING</p>
                        <h2 className="project-name">COFFEE LIKE</h2>
                        <p className="description">Premium Coffee Brand that Foster Community.</p>
                        <a href="/case4" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Row 3: Second set of 4 cards */}
            

            {/* Row 4: Third set of 4 cards */}
            <div className="portfolio-row">
                <div className="portfolio-card1">
                    <img src={ig4} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details1">
                        <p className="category">BRANDING</p>
                        <h2 className="project-name">Glooni Cosmetics</h2>
                        <p className="description">A Cosmetic Brand Basic Banding.</p>
                        <a href="/case5" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card1">
                    <img src={ig5} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details1">
                        <p className="category">BRANDING</p>
                        <h2 className="project-name">STREET fooD</h2>
                        <p className="description">Branding and Logo for this Brand.</p>
                        <a href="/case6" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card1">
                    <img src={ig6} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details1">
                        <p className="category">BRANDING</p>
                        <h2 className="project-name">NEPTUNE</h2>
                        <p className="description">Coffee & Drinks Brand.</p>
                        <a href="/case7" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-card1">
                    <img src={ig7} alt="EcoWise Project" className="portfolio-image" />
                    <div className="portfolio-details1">
                        <p className="category">BRANDING</p>
                        <h2 className="project-name">amor CAFE</h2>
                        <p className="description">Amor Is A Coffee Cafe Brand.</p>
                        <a href="/case8" className="case-study-button">
                            Case Study <img src={arrowRightImage} alt="Case Study" className="case-study-icon" />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Portfolio;
