import React, { useState } from 'react';
import './ContactUs.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';

import image1 from '../assets/location.png';
import image2 from '../assets/Email.png';
import image3 from '../assets/Phone.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        budget: '',
        message: ''
    });

    const facebookUrl = 'https://www.facebook.com/profile.php?id=100075204951083&mibextid=LQQJ4d';
    const instagramUrl = 'https://www.instagram.com/example';
    const linkedinUrl = 'https://www.linkedin.com/in/parampreetkaur-sethi-379b73231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-email', formData);
            console.log('Form data sent:', response.data);
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                location: '',
                budget: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h2 className="contact-heading">LET'S DISCUSS YOUR PROJECT</h2>
                <div className="contact-columns">
                    <div className="contact-column">
                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="card-image">
                                    <img src={image1} alt="Card" />
                                </div>
                                <div className="card-text">
                                    <h3>Address: </h3>
                                    <p>Pune, Maharashtra</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="card-image">
                                    <img src={image2} alt="Card" />
                                </div>
                                <div className="card-text">
                                    <h3>My Email:</h3>
                                    <p>sethiparampreet031@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="card-image">
                                    <img src={image3} alt="Card" />
                                </div>
                                <div className="card-text">
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
                    <div className="contact-column">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="budget">Budget</label>
                                <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
