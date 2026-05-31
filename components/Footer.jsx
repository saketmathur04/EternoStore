import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>{new Date().getFullYear()} SonicZone. All rights reserved.</p>
      <div className="icons">
        <a href="#" aria-label="Visit our Instagram page">
          <AiFillInstagram />
        </a>
        <a href="#" aria-label="Visit our Twitter page">
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  )
}

export default Footer
