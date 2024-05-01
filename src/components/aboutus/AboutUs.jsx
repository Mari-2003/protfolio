import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import { AboutMobile } from "./AboutMobile";
import "./AboutUs.css";
import aboutImg from "../../assets/New Project (2).svg";
import aboutImg1 from "../../assets/New Project (4).svg"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

export const AboutUs = ({ theme }) => {

  useEffect(() => { 
    const sr = ScrollReveal ({
      distance: '40px',
      duration: 2500,
      delay: 300,
      reset: true
    });
  
    sr.reveal('.heading', {origin: 'left'});
    sr.reveal('.aboutLink', {origin: 'left'})
  }, []);

  const whatsappNumber = "9500813803";
  const emailAddress = "marinamachivayam2003@gmail.com";

    const handleWhatsappClick = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank"); // Opens WhatsApp with your number
      } else {
        window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, "_blank"); // Opens WhatsApp Web with your number
      }
    }

  return (
    <div>
      <div className="desktop-About">
      <div id="aboutme" className="container-fluid">
      <div className="about">
        <div className="heading">
          <h1>
            ABOUT <span className="aboutMeLetter">ME</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-12">
            <div className="aboutImage">
              <img src={theme === 'light'?aboutImg1:aboutImg} alt="" className=" aboutIcons img-fluid" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
            <div className="aboutText">
              <p>
                I am Mariappan, and I am a software developer with extensive
                experience in a variety of technologies. Throughout my career, I
                have worked with Node.js, React.js, Nest.js, Postman, GitHub,
                Mongoose, PostgreSQL, HTML, CSS, and JavaScript. My recent roles
                include developing a performance testing application at Icanio
                Technologies and spearheading the creation of a green cover
                enhancement web app at Forge Innovation & Ventures.
              </p>
                <>
                  <p>
                    I am known for my collaborative mindset and dedication to
                    innovation, making me an invaluable asset in any software
                    development team. I consistently strive for excellence in my
                    work, seeking out new challenges and opportunities for growth.
                    With a passion for learning and a commitment to delivering
                    high-quality solutions, I am eager to tackle the next exciting
                    project that comes my way.
                  </p>
                  <p>
                    I am a seasoned software developer proficient in React and
                    Node.js, adept at building scalable web applications with a
                    focus on top-notch code quality. With a comprehensive skill set
                    spanning front-end and back-end development, I am passionate
                    about creating intuitive user interfaces and contributing to
                    cutting-edge projects. My recent roles include developing a
                    performance testing application at Icanio Technologies and
                    spearheading the creation of a green cover enhancement web app
                    at Forge Innovation & Ventures.
                  </p>
                </>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSocialIcons">
        <div className="aboutLink">
        <FaLinkedin className="aboutLinkIcons"/>
        <a
          href="https://www.linkedin.com/in/mariappan-n-5a8657261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Mariappan.N</span>
        </a>
        </div>
        <div className="aboutLink">
        <FaGithub className="aboutLinkIcons" />  
        <a
          href="https://github.com/Mari-2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span>Mari-2003</span>
        </a>
        </div>
        <div className="aboutLink">
      <ImWhatsapp className="aboutLinkIcons" onClick={handleWhatsappClick} />
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
      >
        <span>whatsapp</span>
      </a>
    </div>
    <div className="aboutLink">
    <AiOutlineMail className="aboutLinkIcons"/>
      <a
        href={`mailto:${emailAddress}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>marinamachivayam</span>
      </a>
    </div>
        
      </div>
    </div>
      </div>
      <div className="mobileAboutPage">
      <AboutMobile />
      </div>
     

    </div>
   
  );
};
