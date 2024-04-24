import React from 'react';
import './AboutUs.css';
import aboutImg from '../../assets/aboutImg.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <div className='about'>
        <div className='heading'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='row'>
        <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
        <div className='aboutImage'>
            <img src={aboutImg} alt='' className=' aboutIcons img-fluid' />
          </div>
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-12'>
          <div className='aboutText'>
            <p>
              My name is Mariappan, and I am a software developer with extensive experience in a variety of technologies. Throughout my career, I have worked with Node.js, React.js, Nest.js, Postman, GitHub, Mongoose, PostgreSQL, HTML, CSS, and JavaScript. My recent roles include developing a performance testing application at Icanio Technologies and spearheading the creation of a green cover enhancement web app at Forge Innovation & Ventures.
            </p>
            <p>
              I am known for my collaborative mindset and dedication to innovation, making me an invaluable asset in any software development team. I consistently strive for excellence in my work, seeking out new challenges and opportunities for growth. With a passion for learning and a commitment to delivering high-quality solutions, I am eager to tackle the next exciting project that comes my way.
            </p>
          </div>
         </div>
         </div>
      </div>
      <div className="socialIcons">
        <a href="https://www.linkedin.com/in/mariappan-n-5a8657261/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>Mariappan.N</span>
        </a>
        <a href="https://github.com/Mari-2003" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>Mari-2003</span>
        </a>
      </div>
    </div>
  );
};
