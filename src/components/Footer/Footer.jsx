import React from 'react'
import './Footer.css'
import youtube_icon from '../../../src/assets/youtube_icon.png'
import twitter_icon from '../../../src/assets/twitter_icon.png'
import instagram_icon from '../../../src/assets/instagram_icon.png'
import facebook_icon from '../../../src/assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audion Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Contact Us</li>
        <li>Corporate Informations</li>
      </ul>

      <p className='copyright-text'></p>
    </div>
  )
}

export default Footer