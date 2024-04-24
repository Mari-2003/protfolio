import React from 'react'
import './Projects.css'
import architect from '../../assets/architect.png'

export const Projects = () => {
  return (
    <div className='content-fluid'>
        <div className='projects'>
        <div className='heading'>
          <h1>MY PROJECTS</h1>
        </div>
        <div>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
            <div> 
              <img src ={architect} className='img-fluid'/>
            </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-8 col-12'>
            <div>
              <h3>Archie Home Decors.</h3>
              <h4>Next JS - React JS - Redux - TailwindCss - Javascript</h4>
              <p>Developed While exterior design focuses on the outside appearance of buildings or structures, and as such is a part of on-campus or online architecture degree programs, interior design deals with the inside look and feel of those same buildings or structures. application using React.js (frontend) and Node.js (backend). Implemented desgin using tailwind css and twailwind freamwork in shadcn ui its show smoth so using this appliction Implemented React.js to enhance the user interface and improve page loading times.Contributed to a cohesive team effort, seamlesslyintegrating technologies for project success.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
