import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Home.css';
import img1 from './assets/About.png';
import img2 from './assets/TermsAndConditions.png';
import img3 from './assets/SurveySecurity.png';
import pdf1 from './assets/casestudies.pdf';
import pdf2 from './assets/FAQs.pdf';

const Home = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  return (
    <div className="container">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SURVEYL</a>
          </div>
          <ul>
            <li>
              <select value={selectedTemplate} onChange={handleTemplateChange}>
                <option value="">Templates</option>
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
                <option value="template3">Template 3</option>
              </select>
            </li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">Survey is a method of gathering and compiling Information</div>
        <div className="btns">
          <a><Link to="/Login"><button >Start Survey</button></Link></a>
        </div>
      </div>
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li><a href={img1} target="_blank">About</a></li>
            <li><a href={img2} target="_blank">Terms and Conditions</a></li>
            <li><a href={img3} target="_blank">Survey Security</a></li>
            <li><a href={pdf1} target="_blank">Case Studies</a></li>
            <li><a href={pdf2} target="_blank">FAQs</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
