import VueRouter from 'vue-router'
import Home from './pages/Home'
import Config from './pages/Config'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/config', component: Config, name: 'Config' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/dashboard/:code', component: Dashboard, name: 'Dashboard' }
]

export default new VueRouter({ routes, mode: 'history' })
