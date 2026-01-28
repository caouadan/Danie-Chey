import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

// Use HashRouter for GitHub Pages compatibility
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

export default router
