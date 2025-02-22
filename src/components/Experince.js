import React from "react";
import "../assets/styles/styles.css";    
import "../assets/styles/styles.scss";   
import "../assets/js/main.js"; 
import { FaShieldAlt, FaMobileAlt } from "react-icons/fa"; // Import icons

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="experience__background">
                <h2 className="section-title">Experience</h2>
                <div className="experience__container bd-grid">
                    
                    {/* Cybersecurity Internship */}
                    <div className="experience__card">
                        <div className="experience__icon"><FaShieldAlt /></div>
                        <div className="experience__content">
                            <h3>Cybersecurity Intern</h3>
                            <span className="experience__company">Edunet Foundation (Oct 2023 - Nov 2023)</span>
                            <p>
                                Implemented intermediate steganography techniques to secure digital communications. Embedded sensitive data within media formats while enhancing encryption for confidentiality and integrity.
                            </p>
                        </div>
                    </div>

                    {/* Mobile App Development Internship */}
                    <div className="experience__card">
                        <div className="experience__icon"><FaMobileAlt /></div>
                        <div className="experience__content">
                            <h3>Mobile App Developer Intern</h3>
                            <span className="experience__company">Nov 2023 - Dec 2023</span>
                            <p>
                                Developed mobile apps using Flutter, ensuring smooth cross-platform performance and intuitive UI/UX. Collaborated on real-time features and state management to enhance responsiveness.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
