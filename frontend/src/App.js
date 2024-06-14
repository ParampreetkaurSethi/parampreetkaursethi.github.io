import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import About from './components/about';
import Portfolio from './components/Portfolio';
import Services from './components/services';
import Resume from './components/Resume';
import CaseStudy1 from './components/casestudy/case1';
import CaseStudy2 from './components/casestudy/case2';
import CaseStudy3 from './components/casestudy/case3';
import CaseStudy4 from './components/casestudy/case4';
import CaseStudy5 from './components/casestudy/case5';
import CaseStudy6 from './components/casestudy/case6';
import CaseStudy7 from './components/casestudy/case7';
import CaseStudy8 from './components/casestudy/case8';




const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/case1" element={<CaseStudy1 />} />
                    <Route path="/case2" element={<CaseStudy2 />} />
                    <Route path="/case3" element={<CaseStudy3 />} />
                    <Route path="/case4" element={<CaseStudy4 />} />
                    <Route path="/case5" element={<CaseStudy5 />} />
                    <Route path="/case6" element={<CaseStudy6 />} />
                    <Route path="/case7" element={<CaseStudy7 />} />
                    <Route path="/case8" element={<CaseStudy8 />} />







                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
