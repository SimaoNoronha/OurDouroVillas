import './styles/global.css'

import { Home } from './pages/home.js'
import { ToStay } from './pages/toStay.js'
import { ToEat } from './pages/toEat.js'
import { ToRelax } from './pages/toRelax.js'

const routes = {
  '/': Home,
  '/to-stay': ToStay,
  '/to-eat': ToEat,
  '/to-relax': ToRelax,
}

function router() {
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || Home
  document.querySelector('#app').innerHTML = page()
  window.scrollTo(0, 0)
}

window.addEventListener('hashchange', router)
window.addEventListener('DOMContentLoaded', router)