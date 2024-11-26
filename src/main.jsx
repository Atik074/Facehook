import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProviders>
      <Router>
         <App />
      </Router>
    </AuthProviders>
   
  
  </StrictMode>,
)
