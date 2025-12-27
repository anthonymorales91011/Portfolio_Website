import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'
import PosterModal from './PosterModal'
import './Projects.css'

const Projects = () => {
  const [selectedPoster, setSelectedPoster] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPoster = (poster) => {
    setSelectedPoster(poster)
    setIsModalOpen(true)
  }

  const closePoster = () => {
    setIsModalOpen(false)
    setSelectedPoster(null)
  }

  const currentProjects = [
    {
      id: 1,
      title: 'Cancer Bioengineering Research',
      description: 'Undergraduate researcher in the Michael R. King Laboratory at Rice University, focusing on cancer bioengineering and tumor microenvironment studies. My research involves engineering reproducible 3-D prostate cancer spheroids using SHArD culture techniques and developing MATLAB pipelines for 3-D nuclear segmentation and quantitative feature extraction from confocal microscopy images. This computational approach enables high-throughput analysis of spheroid morphology and supports the lab\'s mission to understand tumor biology and develop more effective therapeutic strategies.',
      technologies: ['MATLAB', 'Confocal Microscopy', '3-D Cell Culture', 'Image Processing', 'Nuclear Segmentation', 'Quantitative Analysis'],
      image: `${import.meta.env.BASE_URL}images/Rice_logo.webp`, // Rice Bioengineering Department logo
      github: '#',
      demo: 'https://bioe.rice.edu/faculty/michael-king',
      poster: `${import.meta.env.BASE_URL}posters/Morales, Anthony BIOE 400:401 - Poster.pdf`, // King lab poster
      period: 'Jan 2024 - Present',
      location: 'Rice University'
    },
    {
      id: 3,
      title: 'Will Rice College Leadership',
      description: 'Serving as Socials Head and Sophomore Class Representative for Will Rice College, one of Rice University\'s eleven residential colleges. Responsible for planning and executing large-scale community events, coordinating with vendors, managing logistics and safety protocols, and overseeing budget allocation. These roles require balancing student interests with institutional requirements while fostering residential college culture.',
      technologies: ['Event Planning', 'Budget Management', 'Student Governance', 'Leadership'],
      image: `${import.meta.env.BASE_URL}images/willrice_logo.png`,
      github: '#',
      demo: '#',
      period: 'Aug 2024 - Present',
      location: 'Rice University'
    },
  ]

  const pastProjects = [
    {
      id: 2,
      title: 'Chemical Biology Research',
      description: 'Laboratory intern in the Franz Research Group under Dr. Katherine J. Franz, James B. Duke Distinguished Professor of Chemistry. The lab focuses on understanding how biological systems manage essential yet potentially toxic metal ions like copper and iron. My research investigated Cu(II)–lipoic acid binding interactions using UV-Visible spectroscopy, analyzing absorbance shifts to characterize complex formation and binding dynamics, contributing to the lab\'s mission of developing chemical tools for therapeutic applications.',
      technologies: ['UV-Vis Spectroscopy', 'Chemical Analysis', 'Buffer Preparation', 'Titrations', 'Coordination Chemistry'],
      image: `${import.meta.env.BASE_URL}images/duke%20logo.jpg`, // Duke Department of Chemistry logo
      github: '#',
      demo: 'https://sites.duke.edu/franzlab/',
      poster: `${import.meta.env.BASE_URL}posters/EXP_Poster.pdf`, // Franz lab poster
      period: 'Jun 2023 - Aug 2023',
      location: 'Duke University'
    },
    {
      id: 4,
      title: 'FRC Robotics Team Leadership',
      description: 'Held multiple leadership roles for Peddie Robotics (FRC Team 5895) including Senior Programmer, Head Scout & Strategy Lead, and Finance & Marketing Lead. Developed data-driven match strategies analyzing opponent capabilities and optimizing alliance selection. Created predictive models for match outcomes and coordinated team positioning during competitions. Led sponsorship acquisition efforts, securing over $35,000 in annual funding to support team operations.',
      technologies: ['Robotics Programming', 'Data Analysis', 'Strategy', 'Sponsorship Development'],
      image: `${import.meta.env.BASE_URL}images/robotics-team.jpeg`,
      github: 'https://github.com/PeddieRobotics', // Update with actual Peddie Robotics GitHub URL if different
      demo: '#',
      period: 'Sep 2021 - May 2024',
      location: 'Peddie School'
    },
  ]

  const renderProject = (project, index) => (
            <ScrollAnimation key={project.id} delay={index * 100}>
              <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
          {(project.demo !== '#' || project.github !== '#' || project.poster) && (
                  <div className="project-overlay">
              {project.poster && (
                <button 
                  onClick={() => openPoster(project.poster)} 
                  className="project-link"
                  aria-label="View Poster"
                >
                  <FaFilePdf />
                  <span>Poster</span>
                </button>
              )}
                    {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visit Website">
                        <FaExternalLinkAlt />
                  <span>Website</span>
                      </a>
                    )}
                    {project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Code">
                        <FaGithub />
                  <span>Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.period && (
                  <p className="project-period">{project.period} {project.location && `• ${project.location}`}</p>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              </div>
            </ScrollAnimation>
  )

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Projects</h2>
        </ScrollAnimation>
        
        <div className="projects-section">
          <ScrollAnimation delay={50}>
            <h3 className="projects-subtitle">Current Projects</h3>
          </ScrollAnimation>
          <div className="projects-grid">
            {currentProjects.map((project, index) => renderProject(project, index))}
          </div>
        </div>

        <div className="projects-section">
          <ScrollAnimation delay={100}>
            <h3 className="projects-subtitle">Past Projects</h3>
          </ScrollAnimation>
          <div className="projects-grid">
            {pastProjects.map((project, index) => renderProject(project, index))}
          </div>
        </div>
      </div>
      <PosterModal 
        poster={selectedPoster} 
        isOpen={isModalOpen} 
        onClose={closePoster} 
      />
    </section>
  )
}

export default Projects

