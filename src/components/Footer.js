import React, { useEffect } from 'react';
import '../assets/styles/styles.css';    
import '../assets/styles/styles.scss';   


const Footer = () => {
    return (

        <footer class="footer">
            
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/naveen.k_m" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p class="footer__copy">&#169;  2025 All Rights Reserved</p>
        </footer>

    );
};

export default Footer;  