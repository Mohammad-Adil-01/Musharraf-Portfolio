import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToggleMode } from './Context/ToggleMode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleMode>
      <App/>
    </ToggleMode>
  </StrictMode>,
)
