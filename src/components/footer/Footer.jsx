import React from 'react'
import './Footer.css'
import footerIcon from '../../assets/footerIcon.png'

export const Footer = () => {
  return (
    <div className='content-fluid'>
      <div className='row align-items-center'>
        <div>
          <div>
            <img src={footerIcon} className='image-fluid' />
          </div>
          <div>
            <h1>"Thanks for Scrolling"</h1>
          </div>

        </div>

      </div>

    </div>
  )
}
