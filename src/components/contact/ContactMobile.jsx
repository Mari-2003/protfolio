import React, { useState } from 'react';
import './Contact.css';
import contactImage from "../../assets/New Project.svg";
import contactImage1 from "../../assets/New Project (5).svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ContactMobile = ({ theme }) => {
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
      const response = await fetch('https://protfolio-email-api.onrender.com/api/contact', {
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
            <div className='contactPage'>
              <div className='inputStyle'>
                <input
                  className='firstfield'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Your name'
                  required
                />
                <input
                  className='ml-40'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Your email'
                  required
                />
                <input
                  type='text'
                  className='w-full'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder='Your Subject'
                  required
                />
                <textarea
                  className='textArea w-full'
                  type='textarea'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Your Message'
                  required
                />
                <button className='contactButton w-full' type='submit'>Send</button>
              </div>
              <div className='contactImageContainer'>
              <img
                      src={theme === 'light' ? contactImage1 : contactImage}
                      alt=""
                      className='contactImageIcons img-fluid'
                    />
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
            <span>Mariappan.N</span>
          </div>
        </div>
      </div>
    </div>
  );
};
