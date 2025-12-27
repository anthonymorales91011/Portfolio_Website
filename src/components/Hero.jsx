import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Anthony Morales</span>
          </h1>
          <h2 className="hero-subtitle">Bioengineering Student & Researcher</h2>
          <p className="hero-description">
            Undergraduate researcher at Rice University passionate about cancer bioengineering,
            computational biology, and robotics. Currently working on 3-D tumor spheroid analysis
            and developing MATLAB pipelines for quantitative feature extraction.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/Resume/Anthony_Morales_Resume.pdf" className="btn btn-secondary" download="Anthony_Morales_Resume.pdf">
              <FaDownload /> Download Resume
            </a>
          </div>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/anthony-morales-6b967127b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:tm110@rice.edu" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/images/headshot.JPG" alt="Anthony Morales" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

