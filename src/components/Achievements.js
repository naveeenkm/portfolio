import React from "react";
import { FaTrophy, FaGlobe, FaCode } from "react-icons/fa";
import "../assets/styles/Achievements.css"; 
import '../assets/styles/styles.css'; 
const achievementsList = [
  {
    title: "2nd Prize in Hack for Hire Hackathon",
    level: "State Level",
    description:
      "Developed a full-stack website for a startup transporting preserved food materials. Built with Django, the platform included vehicle tracking features. The project secured 2nd place in a 36-hour competition.",
    link: "https://www.linkedin.com/posts/naveen-k-m-171109212_hackathon-hackforhire-innovation-activity-7222244051322859520--HW2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXD6aUBL0QtQMw-wanSZr80fFGij7NxID4",
    icon: <FaTrophy className="achievement-icon trophy" />,
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2 className="section-title"> My Achievements</h2>
      <div className="achievements-timeline">
        {achievementsList.map((achieve, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-icon-container">{achieve.icon}</div>
            <div className="achievement-content">
              <h3>{achieve.title}</h3>
              <span className="achievement-level">{achieve.level}</span>
              <p>{achieve.description}</p>
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
