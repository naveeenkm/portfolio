import React, { useEffect } from 'react';
import '../assets/styles/styles.css';    
import '../assets/styles/styles.scss';   

const Header = () => {
    useEffect(() => {
        // Menu toggle function
        const toggle = document.getElementById('nav-toggle');
        const nav = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav__link'); // Get all nav links
        const sections = document.querySelectorAll('section[id]'); // Get all sections

        const toggleMenu = () => {
            nav.classList.toggle('show');
        };

        // Menu toggle event listener
        if (toggle) {
            toggle.addEventListener('click', toggleMenu);
        }

        // Handle active link change when clicked
        const handleActiveLink = (e) => {
            navLinks.forEach(link => link.classList.remove('active-link')); // Remove active class from all links
            e.target.classList.add('active-link'); // Add active class to clicked link
        };

        // Add click event listener to all nav links
        navLinks.forEach(link => {
            link.addEventListener('click', handleActiveLink);
        });

        // Function to highlight active link based on scroll
        const highlightActiveLinkOnScroll = () => {
            let scrollY = window.scrollY;
        
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 58; // Offset for header height
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        
                if (link) { // Ensure link is not null before accessing classList
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        link.classList.add('active-link');
                    } else {
                        link.classList.remove('active-link');
                    }
                }
            });
        };
        

        // Add scroll event listener
        window.addEventListener('scroll', highlightActiveLinkOnScroll);

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', highlightActiveLinkOnScroll);
            navLinks.forEach(link => {
                link.removeEventListener('click', handleActiveLink);
            });
            if (toggle) {
                toggle.removeEventListener('click', toggleMenu); // Correctly remove the toggle function
            }
        };
    }, []);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#home" className="nav__logo">Naveen</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
