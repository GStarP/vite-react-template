import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import AuthPage from '@/pages/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
])

export { router }
