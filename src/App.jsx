import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './sections/Home/Home.jsx';
import Project from './sections/Project/Project.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Contact from './sections/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <>    
      <Navbar />
      <Home />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
