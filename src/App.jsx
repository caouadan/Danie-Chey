import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
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
    <RouterProvider router={router} context={{ theme, toggleTheme }} />
  )
}

export default App
