// src/components/casestudy/case1.js
import React from 'react';
import './case1.css'; // Import the CSS file

const Case1 = () => {
    return (
        <div className="case1-container">
            <div className="content">
                
                <iframe 
                    src="/docs/1.pdf" 
                    className="pdf-viewer"
                    title="Case Study PDF"
                />
            </div>
        </div>
    );
};

export default Case1;
