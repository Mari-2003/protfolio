import React, { useState } from 'react';
import './Contact.css';
import contactImage from "../../assets/contactImage.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = ({theme}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='contact'>
        <div className='heading'>
          <h1>GET IN TOUCH</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                <div className='contactPage'>
                <div>
                  <h3>THAT'S ALL ABOUT </h3>
                  <h3>CONTACT ME..</h3>
                  <img src={contactImage} alt="" className=' contactImageIcons img-fluid'/>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                <div>
                  <div>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Your name'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Your email'
                    required
                  />
                  </div>
                 
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder='Your Subject'
                    required
                  />
                  <input
                    type='text'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='Your Message'
                    required
                  />
                  <button className='contactButton' type='submit'>Send</button>
                </div>
              </div>
                </div>
              </div>
            </div>
            </form>
        </div>
        <div className='contactSocialIcons'>
        <div className='contactAbout'>
      <FaLinkedin className='contactAboutIcons' />
        <span>Mariappan.N</span>
        </div>
        <div className='contactAbout'>
        <FaGithub className='contactAboutIcons' />
        <span>Mari-2003</span>
        </div>
        </div>
      </div>
    </div>
  );
};
