import './Hero.scss'
import heroLight from '../assets/img/hero/hero-light.svg'
import heroDark from '../assets/img/hero/hero-dark.svg'


function Hero({ theme }) {
  const heroImage = theme === 'dark' ? heroDark : heroLight

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title animate-fade-in">Danie Chey</h1>

          <p className="hero__subtitle animate-fade-in animate-delay-1">
            Développeuse Front-End & Visual designer
          </p>

          <p className="hero__description animate-fade-in animate-delay-2">
            Je combine créativité, rigueur technique et compréhension des usages pour concevoir des interfaces web claires, performantes et accessibles.
          </p>

          <div className="hero__buttons animate-fade-in animate-delay-3">
            <a
              href="https://github.com/caouadan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/danie-chey-3a2613146"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__image animate-fade-in-right animate-delay-2">
          <img src={heroImage} alt="Illustration décorative" />
        </div>
      </div>
    </section>
  )
}

export default Hero
