import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Service from './Service.jsx'
import AboutUs from './AboutUs.jsx'
import Contact from './Contact.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    element: <AboutUs />,
  },
  {
    path: 'kontakt',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
