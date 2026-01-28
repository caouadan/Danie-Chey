import { useState } from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'
import './Projects.scss'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filters = [
    { id: 'tous', label: 'Tous' },
    { id: 'developpement', label: 'Développement' },
    { id: 'graphisme', label: 'Graphisme' }
  ]

  const filteredProjects = activeFilter === 'tous'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeFilter)

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId)
    setIsDropdownOpen(false)
  }

  return (
    <section id="projets" className="projects section">
      <div className="container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects__filter">
          <button
            className="projects__filter-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{filters.find(f => f.id === activeFilter)?.label}</span>
            <span className={`projects__filter-arrow ${isDropdownOpen ? 'projects__filter-arrow--open' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`projects__filter-dropdown ${isDropdownOpen ? 'projects__filter-dropdown--open' : ''}`}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`projects__filter-option ${activeFilter === filter.id ? 'projects__filter-option--active' : ''}`}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="projects__card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projects__card-image">
                <img src={project.thumbnail} alt={project.title} />
                <div className="projects__card-overlay">
                  <h3 className="projects__card-title">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
