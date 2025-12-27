import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/anthony-morales-6b967127b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:tm110@rice.edu" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-text">
            © {currentYear} Anthony Morales. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

