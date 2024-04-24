import React from 'react'
import './Banner.css'
import { FaLinkedin } from "react-icons/fa";
import { LiaGithub } from "react-icons/lia";
import { FiMail } from "react-icons/fi";
import bannerImg from '../../assets/bannerImg.jpg';
import MariappanResume from '../../assets/MariappanResume.pdf'

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
    <div className='container-fluid'>
    <div className='row align-items-center '>
      <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
      <div className='banner'>
        <div className='bannerleft'>
          <h4>Hi! I am Mariappan</h4>
          <h1>I AM FULL STACK</h1>
          <h1>DEVELOPER</h1>
          <p>Experienced software developer proficient in React and Node.js.
            Skilled in creating scalable web applications with a focus on high-quality code. Strong in both front-end and back-end development, with a collaborative mindset.</p>
          <button onClick={handleResumeDownload}>RESUME</button>
          <button onClick={handleHireMe}>HIRE ME</button>
        </div>
      </div>
      
    </div>
    <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
        <div className='contentImage'>
          <img src={bannerImg} alt='' className='profileIcon img-fluid' />
        </div>
      </div>
  </div>
  <div className='row'>
    <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
    <a><FaLinkedin /><span>Mariappan.N</span></a>
    </div>
    <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
    <a><LiaGithub  /><span>Mari-2003</span></a>
    </div>
    <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
    <a><FiMail  /><span>maribca408@gmail.com</span></a>
    </div>
    </div>

  </div>
  
  )
}
