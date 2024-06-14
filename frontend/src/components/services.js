import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const handleContactButtonClick = () => {
        navigate('/contact');
    };

    return (
        <div className="services-container">
            <div className="services-columns">
                <div className="services-column text-column">
                    <h2 className="services-heading">What I do?</h2>
                    <p className="services-description">
                        As a freelancer, I offer a range of services. Reach out to me for creative and reliable solutions that meet your needs. Let's work together to bring your ideas to life!
                    </p>
                    <button className="contact-button" onClick={handleContactButtonClick}>CONTACT</button>
                </div>
                <div className="services-column cards-column">
                    <div className="service-card">
                        <h3 className="card-heading">UI/UX Design</h3>
                        <p className="card-description">
                            I design interactive and user-friendly interfaces for web and mobile.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3 className="card-heading">Graphic & Logo Design</h3>
                        <p className="card-description">
                            I create eye-catching designs that perfectly represent your brand.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3 className="card-heading">Content Writing</h3>
                        <p className="card-description">
                            I write engaging content that resonates with your audience.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3 className="card-heading">Social Media Management</h3>
                        <p className="card-description">
                            I manage your social media presence to boost engagement and grow your audience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
