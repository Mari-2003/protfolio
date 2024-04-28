import React from 'react'
import './Footer.css'
import footerIcon from '../../assets/footerIcon.png'

export const Footer = () => {
  return (
    <div className=''>
        <div className='footer'>
          <div className='footerImg'>
            <span className='line1'></span>
            <img src={footerIcon} alt="" className=' footerICons img-fluid' />
            <span className='line2'></span>
          </div>
          <div className='footerText'>
            <h1>"Thanks for Scrolling"</h1>
          </div>

        </div>

    </div>
  )
}
