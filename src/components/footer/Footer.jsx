import React from 'react'
import './Footer.css'
import footerIcon from '../../assets/footerIcon.png'

export const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center'>
        <div className='footer'>
          <div className='footerImg'>
            <img src={footerIcon} className=' footerICons image-fluid' />
          </div>
          <div className='footerText'>
            <h1>"Thanks for Scrolling"</h1>
          </div>

        </div>

      </div>

    </div>
  )
}
