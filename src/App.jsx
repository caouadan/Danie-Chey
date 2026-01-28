import { useState, useEffect } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

function App() {
  // Gestion du thème
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Définition des routes
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: '/project/:id',
      element: <ProjectDetail />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  // Fournir le router et le contexte pour le thème
  return <RouterProvider router={router} context={{ theme, toggleTheme }} />
}

export default App
