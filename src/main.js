import './styles/global.css'

import { Home } from './pages/home'
import { ToStay } from './pages/toStay'

const routes = {
  '/': Home,
  '/to-stay': ToStay,
}

function router() {
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || Home
  document.querySelector('#app').innerHTML = page()
  window.scrollTo(0, 0)
}

window.addEventListener('hashchange', router)
window.addEventListener('DOMContentLoaded', router)