import React from 'react'
import './Projects.css'
import architect from '../../assets/architect.png';
import school from "../../assets/school Management.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id='projects' className='content-fluid'>
        <div className='projects'>
        <div className='heading'>
          <h1><span className="aboutMeLetter">MY</span> PROJECTS</h1>
        </div>
        <div className='projectContent'>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
            <div className='projectImage'> 
              <img src ={architect} alt="" className='img-fluid projectImage1'/>
            </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-8 col-12'>
            <div className='projectText'>
              <h3>Archie Home Decors.</h3>
              <h4>Next JS - React JS - Redux - TailwindCss - Javascript</h4>
              <p>Developed While exterior design focuses on the outside appearance of buildings or structures, and as such is a part of on-campus or online architecture degree programs, interior design deals with the inside look and feel of those same buildings or structures. application using React.js (frontend) and Node.js (backend). Implemented desgin using tailwind css and twailwind freamwork in shadcn ui its show smoth so using this appliction Implemented React.js to enhance the user interface and improve page loading times.Contributed to a cohesive team effort, seamlesslyintegrating technologies for project success.</p>
            </div>
            <div className='arrowPostion'>

            <a target='blank' href='https://ahd-ui.onrender.com/home'><FaArrowAltCircleRight className='image-fluid projectArrow'/></a>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
            <div className='projectImage'> 
              <img src ={school} alt="" className='img-fluid projectImage1'/>
            </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-8 col-12'>
            <div className='projectText'>
              <h3>School Fees Management System.</h3>
              <h4>React JS - Redux - MUI -Node Js - Express- MongoDB - Javascript</h4>
              <p>A School Fees Management System using React, Redux, MUI, Node.js, Express, and MongoDB allows schools to manage student accounts, fees, and complaints efficiently. Admins can add, update, and view fees for individual students, classes, or sections, while students can view their fees and raise complaints. Admins can view and respond to student complaints through a streamlined interface. The system also includes circular management, enabling the admin to send circulars to specific students, classes, or the entire school. This system ensures smooth interaction between students and the school, with secure authentication and user management via JWT.</p>
            </div>
            <div className='arrowPostion'>

            <a target='blank' href='https://github.com/Mari-2003/Student_Management'><FaArrowAltCircleRight className='image-fluid projectArrow'/></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
