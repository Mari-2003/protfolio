import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className='content-fluid'>
      <div className='row align-text-center'>
        <div>
          <div>
            <h1>GET IN TOUCH</h1>
          </div>
          <div>
            <div>
              <h2>THAT'S ALL ABOUT </h2>
              <h2>CONTACT ME..</h2>
            </div>
            <div>
              <input type = "text" placeholder='Your name' />
              <input type = "text" placeholder='Your email' />
              <input type = "text" placeholder='Your Subject' />
              <input type = "text" placeholder='Your Message' />
              <button> Send</button>
            </div>
          </div>
        </div>
        <div>
        <div>
      <FaLinkedin />
        <span>Mariappan.N</span>
      <FaGithub  />
        <span>Mari-2003</span>
</div>
        </div>
      </div>
    </div>
  )
}
