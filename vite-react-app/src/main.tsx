import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<h4>This is Ayushi's Vite App</h4>
    <App />
  </StrictMode>,
)
