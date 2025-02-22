import React from "react";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import Experince from './components/Experince';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';

const App = () => {
  return (
    <div>
      <Home />
            <Header />  
            <About />
            <Education />
            <Skills />
            <Work />
            <Experince />
            <Certificates />
            <Achievements />
            <Footer /> 
             
            
    </div>
  );
};

export default App;
