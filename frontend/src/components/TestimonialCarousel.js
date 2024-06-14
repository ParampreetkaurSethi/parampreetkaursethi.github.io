import React, { useState, useEffect, useCallback } from 'react';
import './TestimonialCarousel.css'; // Import CSS file for styling

const TestimonialCarousel = () => {
    // Dummy testimonial data
    const testimonials = [
        {
            text: "I've had the pleasure of working with Parampreet on several graphic design projects, and her work is outstanding. She has a keen eye for detail and always delivers on time. Her creativity and professionalism have been invaluable to our projects.",
            author: "Pompy Narula"
        },
        {
            text: "Parampreet is a fantastic graphic designer. She took the time to understand our brand and consistently produced designs that exceeded our expectations. Her ability to communicate and collaborate effectively made the process smooth and enjoyable.",
            author: "HARINDER ARORA"
        },
        {
            text: "We've worked with Parampreet on various design projects, and she always impress us with her creativity and dedication. She consistently provide high-quality work that perfectly aligns with our vision. I highly recommend her services. ",
            author: "THE WORLD SCHOOL"
        },
        {
            text: "Parampreet did an amazing job on our recent project. She brought fresh ideas and a unique perspective that really elevated our brand. She was easy to work with, met all deadlines, and delivered exceptional results. We are very happy with her work.",
            author: "ANAND BAJAD"
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Function to handle automatic sliding
    const handleNext = useCallback(() => {
        setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, [currentTestimonial, testimonials.length]);

    // Effect to handle automatic sliding after 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="testimonial-container">
            <div className="testimonial-box">
                <div className="testimonial-text">
                    <p>{testimonials[currentTestimonial].text}</p>
                    <span className="testimonial-author">{testimonials[currentTestimonial].author}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
