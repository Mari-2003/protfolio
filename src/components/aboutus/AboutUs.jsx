import React from 'react'
import './AboutUs.css'
import profile from '../../assets/profile.png';
import { FaLinkedin } from "react-icons/fa";
import { LiaGithub } from "react-icons/lia";

export const AboutUs = () => {
  return (
    <div className='content-fluid'>
      <div className='row align-items-center'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
          <div>
            <h1>ABOUT ME</h1>
          </div>
          <div>
            <div className='aboutImage'>
            <img src={profile} alt='' className='profileIcon img-fluid' />
            </div>
            <div>
              <p>
Certainly! Here's the revised paragraph format for the about me summary:

My name is Mariappan, and I am a software developer with extensive experience in a variety of technologies. Throughout my career, I have worked with Node.js, React.js, Nest.js, Postman, GitHub, Mongoose, PostgreSQL, HTML, CSS, and JavaScript. My recent roles include developing a performance testing application at Icanio Technologies and spearheading the creation of a green cover enhancement web app at Forge Innovation & Ventures.

I am known for my collaborative mindset and dedication to innovation, making me an invaluable asset in any software development team. I consistently strive for excellence in my work, seeking out new challenges and opportunities for growth. With a passion for learning and a commitment to delivering high-quality solutions, I am eager to tackle the next exciting project that comes my way.</p>
            </div>
          </div>

        </div>

      </div>
      <div>
      <FaLinkedin />
      <a href="https://www.linkedin.com/in/mariappan-n-5a8657261/" target="_blank" rel="noopener noreferrer">
        <span>Mariappan.N</span>
      </a>
      <LiaGithub />
      <a href="https://github.com/Mari-2003" target="_blank" rel="noopener noreferrer">
        <span>Mari-2003</span>
      </a>
</div>

    </div>
  )
}
