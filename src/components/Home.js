import React, { useState } from "react";
import "../assets/styles/styles.css";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">
                    Hi, <br />I'am <span className="home__title-color">Naveen Kumar K M</span>
                </h1>
                <h6>Motivated and skilled Computer Science student inclined towards problem-solving. Committed to delivering exceptional results with strong work ethic, effective communication, and a collaborative mindset to drive project success.</h6>
                <button className="button1" onClick={() => setShowModal(true)}>Contact</button>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/naveen-k-m-171109212" className="home__social-icon">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/naveeenkm" className="home__social-icon">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            Contact Me
                        </div>
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <div className="modal-body">
                            <p>Email: <a href="mailto:kmnaveen1110@gmail.com.com">kmnaveen1110@gmail.com</a></p>
                            <p>
                                LinkedIn: <a href="https://www.linkedin.com/in/naveen-k-m-171109212" target="_blank" rel="noopener noreferrer">
                                    Visit LinkedIn
                                </a>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="button" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
