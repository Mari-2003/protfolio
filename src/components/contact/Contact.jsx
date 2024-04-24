import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className='container-fluid'>
        <div className='contact'>
          <div className='heading'>
            <h1>GET IN TOUCH</h1>
          </div>
          <div>
          <div className='row align-text-center'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
            <div>
              <h2>THAT'S ALL ABOUT </h2>
              <h2>CONTACT ME..</h2>
            </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
            <div>
              <input type = "text" placeholder='Your name' />
              <input type = "text" placeholder='Your email' />
              <input type = "text" placeholder='Your Subject' />
              <input type = "text" placeholder='Your Message' />
              <button> Send</button>
            </div>
            </div>
           
          </div>
        </div>
        <div>
        <div>
      <FaLinkedin />
        <span>Mariappan.N</span>
        </div>
        <div>
        <FaGithub  />
        <span>Mari-2003</span>
        </div>
        </div>
      </div>
    </div>
  )
}
