import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Feed from '../Pages/Feed'
import Profile from '../Pages/Profile'
import MyNetwork from '../Pages/MyNetwork'
import ErrorPage from '../Pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/mynetwork',
    element: <MyNetwork />,
  },
  {
    errorElement: <ErrorPage />,
  },
])
