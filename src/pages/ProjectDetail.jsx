import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import projectsData from '../data/projects.json'
import './ProjectDetail.scss'

function ProjectDetail() {
  const { id } = useParams()
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const project = projectsData.projects.find(p => p.id === id)

  if (!project) {
    return (
      <>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="project-detail">
          <div className="container">
            <h1>Projet non trouvé</h1>
            <Link to="/" className="btn btn--primary">Retour à l'accueil</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="project-detail">
        {/* Hero Section */}
        <section className="project-detail__hero">
          <div className="project-detail__hero-image">
            <img src={project.heroImage} alt={project.title} />
            <div className="project-detail__hero-overlay">
              <div className="project-detail__hero-content">
                <span className="project-detail__category">
                  {project.category === 'developpement' ? 'Développement' : 'Graphisme'}
                </span>
                <h1 className="project-detail__title">{project.title}</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <section className="project-detail__slider section">
          <div className="container">
            <div className="project-detail__slider-info">
              <h2 className="project-detail__slider-subtitle">
                {project.slides[currentSlide].subtitle}
              </h2>
              <p className="project-detail__slider-text">
                {project.slides[currentSlide].text}
              </p>
            </div>

            <div className="project-detail__slider-main">
              <button
                className="project-detail__carousel-arrow project-detail__carousel-arrow--prev"
                onClick={() => handleSlideChange((currentSlide - 1 + project.slides.length) % project.slides.length)}
                aria-label="Slide précédent"
              >
                ←
              </button>

              <img
                src={project.slides[currentSlide].image}
                alt={project.slides[currentSlide].subtitle}
              />

              <button
                className="project-detail__carousel-arrow project-detail__carousel-arrow--next"
                onClick={() => handleSlideChange((currentSlide + 1) % project.slides.length)}
                aria-label="Slide suivant"
              >
                →
              </button>
            </div>

            <div className="project-detail__slider-nav">
              {project.slides.map((_, index) => (
                <button
                  key={index}
                  className={`project-detail__slider-dot ${index === currentSlide ? 'project-detail__slider-dot--active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project Info Section */}
        <section className="project-detail__info section">
          <div className="container">
            <div className="project-detail__info-content">
              <p className="project-detail__description">{project.description}</p>

              <div className="project-detail__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-detail__tech-tag">{tech}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary project-detail__link"
                >
                  Voir le projet en ligne →
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="project-detail__back section">
          <div className="container">
            <Link to="/" className="btn btn--secondary">
              ← Retour aux projets
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ProjectDetail