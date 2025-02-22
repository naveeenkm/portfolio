import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "../assets/styles/Education.css"; // External CSS
import '../assets/styles/styles.css';

const educationList = [
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Jawaharlal Nehru National College of Engineering",
    cgpa: "CGPA: 9.15",
    year: "2020 - 2024",
  },
  {
    title: "Pre-University",
    institution: "P A C E",
    percentage: "Percentage: 94.6%",
    year: "2018 - 2020",
  },
  {
    title: "SSLC",
    institution: "X",
    percentage: "Percentage: 91.8%",
    year: "2016 - 2018",
  },
];

const Education= () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon-container">
              <FaGraduationCap className="education-icon" />
            </div>
            <div className="education-content">
              <h3>{edu.title}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-grade">{edu.cgpa || edu.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
