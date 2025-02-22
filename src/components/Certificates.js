import React from "react";
import { FaPython, FaDatabase, FaJava, FaCode } from "react-icons/fa";
import "../assets/styles/Certificates.css"; 
import '../assets/styles/styles.css'; 

const certificatesData = [
  {
    title: "Programming, Data Structures and Algorithms Using Python",
    issuer: "NPTEL",
    icon: <FaPython className="icon python" />,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS95S3467042910067625",
  },
  {
    title: "Data Base Management System",
    issuer: "NPTEL",
    icon: <FaDatabase className="icon database" />,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS21S54690004630097696",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    icon: <FaJava className="icon java" />,
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS49S5342007804158156",
  },
  {
    title: "Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    icon: <FaCode className="icon code" />,
    link: "https://www.udemy.com/certificate/UC-be4777af-3f56-4dda-ad7d-5f12d4db2ef9/",
  },
  {
    title: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    icon: <FaCode className="icon code" />,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS53S3342007204158156",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-container bd-grid" >
      <h2 className="section-title">My Certifications</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-icon">{cert.icon}</div>
            <div className="certificate-details">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.title}
              </a>
              <p>Issued by {cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
