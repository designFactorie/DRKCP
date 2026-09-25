import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>
)
// Old shared links may contain a second hash for a section anchor.
let legacyTarget
try {
  if (/^#\/(?!\/)/.test(window.location.hash)) legacyTarget = new URL(window.location.hash.slice(1), window.location.origin)
} catch { /* Treat malformed legacy links as ordinary fragments. */ }
if (legacyTarget?.origin === window.location.origin) {
  window.location.replace(legacyTarget.href)
} else {
  const root = document.getElementById('root')
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}
