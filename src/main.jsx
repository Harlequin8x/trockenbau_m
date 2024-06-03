import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Service from './Service.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'leistungen',
    element: <Service />,
  },
  {
    path: 'über-uns',
    element: <Service />,
  },
  {
    path: 'kontakt',
    element: <Service />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
