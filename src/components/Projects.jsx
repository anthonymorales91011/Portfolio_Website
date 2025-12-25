import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cancer Bioengineering Research',
      description: 'Undergraduate researcher at Michael R. King Laboratory engineering reproducible 3-D prostate cancer spheroids using SHArD and developing MATLAB pipelines for 3-D nuclear segmentation and quantitative feature extraction.',
      technologies: ['MATLAB', 'Confocal Microscopy', '3-D Cell Culture', 'Image Processing'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=80',
      github: '#',
      demo: '#',
      period: 'Jan 2024 - Present',
      location: 'Rice University'
    },
    {
      id: 2,
      title: 'Chemical Biology Research',
      description: 'Laboratory intern at Franz Research Group investigating Cu(II)–lipoic acid binding using UV-Visible spectroscopy and analyzing absorbance shifts to characterize complex formation and binding dynamics.',
      technologies: ['UV-Vis Spectroscopy', 'Chemical Analysis', 'Buffer Preparation', 'Titrations'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop&q=80',
      github: '#',
      demo: '#',
      period: 'Jun 2023 - Aug 2023',
      location: 'Duke University'
    },
    {
      id: 3,
      title: 'Will Rice College Leadership',
      description: 'Socials Head and Sophomore Class Representative planning and executing large-scale residential college events, managing logistics, vendors, safety planning, and budgets.',
      technologies: ['Event Planning', 'Budget Management', 'Student Governance', 'Leadership'],
      image: '/images/willrice_logo.png',
      github: '#',
      demo: '#',
      period: 'Aug 2024 - Present',
      location: 'Rice University'
    },
    {
      id: 4,
      title: 'FRC Robotics Team Leadership',
      description: 'Senior Programmer, Head Scout & Strategy Lead, and Finance & Marketing Lead for Peddie Robotics (FRC Team 5895). Led data-driven match strategy and secured $35,000+ in annual sponsorships.',
      technologies: ['Robotics Programming', 'Data Analysis', 'Strategy', 'Sponsorship Development'],
      image: '/images/robotics-team.jpeg',
      github: '#',
      demo: '#',
      period: 'Sep 2021 - May 2024',
      location: 'Peddie School'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Projects</h2>
        </ScrollAnimation>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 100}>
              <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {(project.demo !== '#' || project.github !== '#') && (
                  <div className="project-overlay">
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

