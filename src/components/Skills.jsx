import React from 'react'
import { FaPython, FaFlask, FaCode, FaLaptop, FaChartLine } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Analysis',
      skills: [
        { name: 'MATLAB', icon: <FaChartLine /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Image Processing', icon: <FaCode /> },
        { name: 'FIJI/ImageJ', icon: <FaCode /> },
      ]
    },
    {
      title: 'Laboratory Techniques',
      skills: [
        { name: '3-D Cell Culture', icon: <FaFlask /> },
        { name: 'Confocal Microscopy', icon: <FaLaptop /> },
        { name: 'UV-Vis Spectroscopy', icon: <FaFlask /> },
        { name: 'Fluorescence Labeling', icon: <FaFlask /> },
        { name: 'Titrations & Buffers', icon: <FaFlask /> },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Data Analysis', icon: <FaChartLine /> },
        { name: 'Robotics Programming', icon: <FaPython /> },
        { name: 'Strategy & Leadership', icon: <FaPython /> },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Skills</h2>
        </ScrollAnimation>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

