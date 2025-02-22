import React from 'react';
import '../assets/styles/styles.css';    
import '../assets/styles/styles.scss';   
import '../assets/js/main.js';         
import about from '../assets/img/about.jpg';         
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={about} alt="About me" />
                </div>
                <div>
                    <h2 className="about__subtitle">I'm Naveen</h2>
                    <p className="about__text">Motivated and skilled Computer Science student inclined towards problem-solving. Committed to delivering exceptional results with 
                    strong work ethic, effective communication, and a collaborative mindset to drive project success.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
