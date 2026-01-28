import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'
import logo from '../assets/img/logo.svg'

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const scrollToSection = (sectionId) => {
  if (location.pathname !== '/') {
    navigate(`/#${sectionId}`)
    return
  }

  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  setIsMenuOpen(false)
}


  const navItems = [
    { label: 'Accueil', action: () => scrollToSection('hero') },
    { label: 'Projets', action: () => scrollToSection('projets') },
    { label: 'Compétences', action: () => scrollToSection('competences') },
    { label: 'À propos', action: () => scrollToSection('apropos') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ]

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img
    src={logo}
    alt="Logo Danie Chey"
    className="header__logo-icon"
  />
          <span className="header__logo-text">Danie Chey</span>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={item.action}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className={`header__toggle-track ${theme === 'light' ? 'header__toggle-track--light' : ''}`}>
              <span className="header__toggle-thumb"></span>
            </span>
          </button>

          <button
            className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
