import React, { useState } from 'react';
import Example from './navbar/Navbar'; // Changed import statement to use default import
import { Banner } from './banner/Banner';
import { AboutUs } from './aboutus/AboutUs';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';

const Home = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`themeColor ${theme === 'light' ? 'lightMode' : ''} ${theme}`}>
      <Example theme={theme} setTheme={setTheme} /> 
      <Banner theme={theme}  />
      <AboutUs theme={theme} />
      <Projects theme={theme}  />
      <Experience theme={theme}  />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
