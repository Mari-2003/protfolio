import React, { useEffect } from 'react'; 
import ScrollReveal from 'scrollreveal';
import './Banner.css';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import bannerImg from '../../assets/bannerImg.jpg';
import MariappanResume from '../../assets/MariappanResume.pdf';


export const MobileBanner  = ({ theme }) => {

  useEffect(() => { 
    const sr = ScrollReveal ({
      distance: '40px',
      duration: 2000,
      delay: 100,
      reset: true
    });
  
    sr.reveal('.bannerleft', {origin: 'top'});
  }, []);

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
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-xl-5 col-lg-5 col-md-5 col-12'>
            <div className='contentImage'>
              <img src={bannerImg} alt='' className='profileIcon img-fluid' />
            </div>
          </div>
          <div className='col-xl-7 col-lg-7 col-md-7 col-12'>
            <div className='banner'>
              <div className='bannerleft'>
                <h4>Hi! I am Mariappan</h4>
                <h1>I AM FULL STACK</h1>
                <h1>DEVELOPER</h1>
                <p>Experienced software developer proficient in React and Node.js.
                  Skilled in creating scalable web applications with a focus on high-quality code. Strong in both front-end and back-end development, with a collaborative mindset.</p>
                <div className='bannerButton'>
                  <button onClick={handleResumeDownload}>RESUME</button>
                  <button onClick={handleHireMe}>HIRE ME</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bannerFooter'>
     <div className='contactSocialBanner'>
       <div className='contactAboutBanner'>
           <FaLinkedin className='bannerIcons' />
           <span>Mariappan.N</span>
       </div>
       <div className='contactAboutBanner'>
           <AiFillGithub className='bannerIcons' />
           <span>Mari-2003</span>
       </div>
       <div className='contactAboutBanner'>
           <FiMail className='bannerIcons' />
           <span>maribca408@gmail.com</span>
       </div>
     </div>
   </div>

    </div>
     
  );
};
