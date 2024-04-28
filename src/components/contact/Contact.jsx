import React, { useState } from 'react';
import './Contact.css';
import contactImage from "../../assets/New Project.svg";
import contactImage1 from "../../assets/New Project (3) (1).svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = ({ theme }) => {
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
            <div >
              <div className='contactPage'>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                    <img
                      src={theme === 'light' ? contactImage1 : contactImage}
                      alt=""
                      className='contactImageIcons img-fluid'
                    />
                  </div>
                
                  <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                    <div className='rightSide'>
                    <div className='text'>
                      <input
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
                    </div>
                    <div className='inputStyle'>

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
                    className='textArea'
                      type='textarea'
                      rows={4}
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Your Message'
                      required
                    />
                    <div>
                   
                    </div>
                 
                    </div>
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
            <span>Mariappan.N</span>
          </div>
        </div>
      </div>
    </div>
  );
};
