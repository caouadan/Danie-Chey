import { useState } from 'react'
import projectsData from '../data/projects.json'
import './Skills.scss'

function Skills() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const skillsCategories = [
    {
      id: 'dev',
      title: 'Développement front-end',
      skills: projectsData.skills.developpement
    },
    {
      id: 'design',
      title: 'Graphisme',
      skills: projectsData.skills.graphisme
    }
  ]

  return (
    <section id="competences" className="skills section">
      <div className="container">
        <h2 className="section-title">Mes compétences</h2>

        <div className="skills__accordions">
          {skillsCategories.map(category => (
            <div
              key={category.id}
              className={`skills__accordion ${openAccordion === category.id ? 'skills__accordion--open' : ''}`}
            >
              <button
                className="skills__accordion-header"
                onClick={() => toggleAccordion(category.id)}
              >
                <span className="skills__accordion-title">{category.title}</span>
                <span className="skills__accordion-icon">▼</span>
              </button>

              <div className="skills__accordion-content">
                <ul className="skills__list">
                  {category.skills.map((skill, index) => (
                    <li key={index} className="skills__item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
