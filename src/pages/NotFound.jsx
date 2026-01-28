import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './NotFound.scss'

function NotFound() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Page non trouvée</p>
          <p className="not-found__text">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn--primary">
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
