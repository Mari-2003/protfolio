import React from 'react'
import './Projects.css'
import architect from '../../assets/architect.png'

export const Projects = () => {
  return (
    <div className='content-fluid'>
      <div className='row align-items-center'>
        <div>
          <h1>MY PROJECTS</h1>
        </div>
        <div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
            <div> 
              <img src ={architect} className='img-fluid'/>
            </div>
            <div>
              <h3>Archie Home Decors.</h3>
              <h4>Next JS - React JS - Redux - TailwindCss - Javascript</h4>
              <p>Developed While exterior design focuses on the outside appearance of buildings or structures, and as such is a part of on-campus or online architecture degree programs, interior design deals with the inside look and feel of those same buildings or structures. application using React.js (frontend) and Node.js (backend). Implemented desgin using tailwind css and twailwind freamwork in shadcn ui its show smoth so using this appliction Implemented React.js to enhance the user interface and improve page loading times.Contributed to a cohesive team effort, seamlesslyintegrating technologies for project success.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
