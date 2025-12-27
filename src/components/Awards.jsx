import React from 'react'
import { FaTrophy, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'
import './Awards.css'

/**
 * Awards section - Displays academic achievements and competition awards
 */
const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'QuestBridge Scholar & Match Recipient',
      year: '2023',
      description: 'Selected as QuestBridge College Prep Scholar and matched with Rice University through National College Match program.',
      icon: <FaGraduationCap />,
      category: 'Academic'
    },
    {
      id: 2,
      title: 'FRC Competition Awards',
      year: '2021-2024',
      description: 'Led team to 3 straight years of sweeping Mid-Atlantic District events and District Championships. Milstein Division Winners at Worlds 2023, Milstein Division Finalists 2024, and Roebling Quarterfinalists 2023. Served as Senior Programmer, Head Scout & Strategy Lead, securing $35,000+ in annual sponsorships.',
      icon: <FaTrophy />,
      category: 'Competition & Leadership',
      link: 'https://www.thebluealliance.com/team/5895',
      linkText: 'View on The Blue Alliance'
    }
  ]

  return (
    <section id="awards" className="awards">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Awards & Accomplishments</h2>
        </ScrollAnimation>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <ScrollAnimation key={award.id} delay={index * 150}>
              <div className="award-card">
              <div className="award-icon">{award.icon}</div>
              <div className="award-content">
                <div className="award-header">
                  <h3 className="award-title">{award.title}</h3>
                  <span className="award-year">{award.year}</span>
                </div>
                <p className="award-description">{award.description}</p>
                {award.link && (
                  <a href={award.link} target="_blank" rel="noopener noreferrer" className="award-link">
                    <FaExternalLinkAlt /> {award.linkText}
                  </a>
                )}
                <span className="award-category">{award.category}</span>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

