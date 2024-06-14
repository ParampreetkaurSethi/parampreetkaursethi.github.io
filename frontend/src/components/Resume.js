// src/components/casestudy/case1.js
import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="content">
                
                <iframe 
                    src="/docs/Resume.pdf" 
                    className="pdf-viewer"
                    title="Case Study PDF"
                />
            </div>
        </div>
    );
};

export default Resume;
