import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>
        <div className="about-content">
          <ScrollAnimation delay={100}>
            <div className="about-text">
              <p>
                I'm a Bioengineering student at Rice University (Class of 2028) with a passion for
                cancer bioengineering and computational biology. As a 2023 QuestBridge College Prep
                Scholar and Match Recipient, I'm dedicated to advancing research in tumor biology
                and developing innovative computational tools for biomedical analysis.
              </p>
              <p>
                Currently, I'm conducting undergraduate research in the Michael R. King Laboratory,
                where I engineer 3-D prostate cancer spheroids and develop MATLAB pipelines for
                quantitative analysis. I'm also actively involved in student leadership, serving as
                Socials Head and Sophomore Class Representative for Will Rice College, and I maintain
                my passion for robotics through previous leadership roles in FRC Team 5895.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About

