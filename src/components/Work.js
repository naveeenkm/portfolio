import React from 'react';
import '../assets/styles/styles.css';    
import '../assets/styles/styles.scss';   
import '../assets/js/main.js'; 
import work1 from '../assets/img/work1.jpg';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';

const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work</h2>
            <div className="work__container bd-grid">
                <a href="https://car-priceprediction.streamlit.app/" className="work__img">
                <h5 style={{ textAlign: "center" }}>Used Car Price Prediction Using ML</h5>
                    <img src={work1} alt="Used Car Price Prediction" />
                    <div className="image-overlay"><h3>Used Car Price Prediction Using ML</h3></div>
                </a>
                <a href="https://github.com/naveeenkm/E-Learning" className="work__img">
                <h5 style={{ textAlign: "center" }}>E Learning Platform</h5>
                    <img src={work2}  alt="E Learning Platform" />
                    <div className="image-overlay"><h3>E Learning Platform</h3></div>
                </a>
                <a href="https://github.com/naveeenkm/expense_tracker.com" className="work__img">
                <h5 style={{ textAlign: "center" }}>Expense Tracker</h5>
                    <img src={work3} alt="Expense Tracker" />
                    <div className="image-overlay"><h3>Expense Tracker</h3></div>
                </a>
            </div>
        </section>
    );
};

export default Work;
