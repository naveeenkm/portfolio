import React from 'react';
import '../assets/styles/styles.css';    
import '../assets/styles/styles.scss';   
import '../assets/js/main.js'; 
import skills from '../assets/img/work5.jpg';
const Skills = () => {
    return (
        <section className="skills section" id="skills">
           <h2 class="section-title">Skills</h2>

<div class="skills__container bd-grid">          
    <div>
        <h2 class="skills__subtitle"> Skills</h2>
        
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bxl-python skills__icon'></i>

                <span class="skills__name">Python</span>
            </div>
            <div class="skills__bar skills__ux">
                
            </div>
            <div>
                <span class="skills__percentage">85%</span>
            </div>
        </div>
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bxl-java skills__icon'></i>

                <span class="skills__name">Java</span>
            </div>
            <div class="skills__bar skills__ux">
                
            </div>
            <div>
                <span class="skills__percentage">75%</span>
            </div>
        </div>
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bxl-java skills__icon'></i>

                <span class="skills__name"> MySQL</span>
            </div>
            <div class="skills__bar skills__ux">
                
            </div>
            <div>
                <span class="skills__percentage">80%</span>
            </div>
        </div>
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bx-code-alt skills__icon'></i>
                <span class="skills__name">Data Structures and Algorithms</span>
            
            </div>
            <div class="skills__bar skills__css">
                
            </div>
            <div>
                <span class="skills__percentage">70%</span>
            </div>
        </div>
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bxl-html5 skills__icon'></i>
                <span class="skills__name">Web Technologies</span>
            </div>
            <div class="skills__bar skills__html">

            </div>
            <div>
                <span class="skills__percentage">85%</span>
            </div>
        </div>
        <div class="skills__data">
            <div class="skills__names">
                <i class='bx bx-data skills__icon'></i>
                <span class="skills__name">Others: DBMS, OOPs, Django, Flask</span>
            </div>
            
            <div class="skills__bar skills__js">
                
            </div>
            <div>
                <span class="skills__percentage">70%</span>
            </div>
        </div>
        
        
        
        </div>
    
    <div>              
        <img src={skills} alt="" class="skills__img"/>
    </div>
    
</div>
        </section>
    );
};

export default Skills;
