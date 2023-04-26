import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { app } from '../firebaseConfig'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
