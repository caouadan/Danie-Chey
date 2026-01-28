import projectsData from '../data/projects.json'
import './About.scss'
import aboutLight from '../assets/img/about/about-light.svg'
import aboutDark from '../assets/img/about/about-dark.svg'

function About({ theme }) {
  const aboutImage = theme === 'dark' ? aboutDark : aboutLight

  return (
    <section id="apropos" className="about section">
      <div className="container">
        <h2 className="section-title">À propos</h2>

        <div className="about__content">
          <div className="about__image">
            <img src={aboutImage} alt="Illustration à propos" />
          </div>

          <div className="about__info">
            <div className="about__text">
              <div className="experience">
                <h3 className="about__parcours-title">Expérience professionnelle</h3>
                <div className="experience-item">
                  <span className="experience-date">2023 — 2025</span>
                  <h4 className="experience-role">
                    Conceptrice e-learning & Graphiste
                    <span> · Infans</span>
                  </h4>
                  <p>
                    Conception de modules e-learning, création de contenus web et print,
                    pilotage de projets et collaboration avec des équipes
                    pluridisciplinaires.
                  </p>
                </div>

                <div className="experience-item">
                  <span className="experience-date">2021 — 2023</span>
                  <h4 className="experience-role">
                    Webdesigner & Graphiste
                    <span> · Kampoy</span>
                  </h4>
                  <p>
                    Création d’identités visuelles, réflexion UX/UI, intégration de maquettes
                    et production de contenus digitaux web et print.
                  </p>
                </div>

                <div className="experience-item">
                  <span className="experience-date">2021 — Aujourd’hui</span>
                  <h4 className="experience-role">
                    Graphiste freelance
                  </h4>
                  <p>
                    Accompagnement de clients sur la création d’identités visuelles et de
                    supports de communication web et print.
                  </p>
                </div>
              </div>
            </div>

            <div className="about__parcours">
              <h3 className="about__parcours-title">Parcours académique</h3>
              <ul className="about__timeline">
                {projectsData.parcours.map((item, index) => (
                  <li key={index} className="about__timeline-item">
                    <span className="about__timeline-year">{item.year}</span>
                    <div className="about__timeline-content">
                      <h4 className="about__timeline-title">{item.title}</h4>
                      <p className="about__timeline-school">{item.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
