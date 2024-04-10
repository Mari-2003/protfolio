import React from 'react'
import './Banner.css'
import { FaLinkedin } from "react-icons/fa";
import { LiaGithub } from "react-icons/lia";
import { FiMail } from "react-icons/fi";
import Profile from '../../../assets/profile.png';
import MariappanResume from '../../../assets/MariappanResume.pdf'

export const Banner = () => {

  const handleHireMe = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappNumber = '9500813803';
    
    if (isMobile) {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank'); // Opens WhatsApp with your number
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, '_blank'); // Opens WhatsApp Web with your number
    }
  };


  const handleResumeDownload = () => {
    window.open(MariappanResume, '_blank');
  };


  return (
    <div>
      <div className='banner'>
      <div className='content'>
      <h2> Hi! I am Mariappan</h2>
      <h1>I AM FULL STACK</h1>
      <h1>DEVELOPER</h1>
      <p>Experienced software developer proficient in React and Node.js.
        Skilled in creating scalable web applications with a focus on high-quality code. Strong in both front-end and back-end development, with a collaborative mindset.</p>
      <button  onClick={handleResumeDownload}>RESUME</button>
      <button  onClick={handleHireMe}>HIRE ME</button>
      </div>
      <div className='photo'>
        <img src={Profile} alt=''  className='profileIcon'/>
      </div>
      </div>
      <div className='social'> 
        <a href="www.linkedin.com/in/mariappan-n-5a8657261" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Mariappan</a> 
        <a href="https://github.com/Mari-2003" target="_blank" rel="noopener noreferrer"><LiaGithub /> Mari-2003</a>
        <a href="mailto:maribca408@gmail.com"><FiMail /> maribca408@gmail</a>
      </div>
     
    </div>
  )
}
