import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="top">
        <div className="follow">
          <h2><u>Follow</u></h2>
          <h1>Assignment</h1>
          <div className="contacticons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </div>
        </div>
        <div className="user">
          <h2><u>User Link</u></h2>
          <ul>
            <li>Branch</li>
            <li>College</li>
            <li>About</li>
          </ul>
        </div>
        <div className="contact">
          <h2><u>Contact Us</u></h2>
          <ul>
            <li><p>No. 220, 3rd 'C' Cross, 2nd Block, 3rd Stage, Basaveshwaranagar, Bangalore 560079</p></li>
            <li>+123456789</li>
            <li>Adbsc@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>Privacy Policy ● Refund/Cancellation ● Policy Terms & Conditions</li>
          <li>Copyright © 2022 MVK Networks Pvt Ltd. All rights reserved.</li>
        </ul>
      </div>
    </div>
  )
}
