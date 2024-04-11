import React from 'react'
import './About.css'
import Profile from '../../../assets/profile.png';

export const AboutUs = () => {
  return (
    <div>
      <div className=''>
      <h1>ABOUT ME</h1>
      </div>
      <div>
        <div>
        <img src={Profile} alt=''  className='AboutIcon'/>
        </div>
        <div>
          <p>
          Mariappan is a seasoned software developer proficient in React and Node.js, 
          adept at building scalable web applications with a focus on top-notch code quality.
           With a comprehensive skill set spanning front-end and back-end development, 
           Mariappan is passionate about creating intuitive user interfaces and contributing to cutting-edge projects.
            His recent roles include developing a performance testing application at Icanio Technologies and spearheading the creation of a Green Cover Enhancement Web App at Forge Innovation & Ventures. Mariappan's collaborative mindset and dedication to innovation make him an invaluable asset in any software development team, consistently striving for excellence in his work.
          </p>
        </div>
      </div>
     
    </div>
  )
}
