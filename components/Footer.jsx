import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>{"\u00A9"} {new Date().getFullYear()} SonicZone. All rights reserved.</p>
      <div className="icons">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
          <AiFillInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  )
}

export default Footer
