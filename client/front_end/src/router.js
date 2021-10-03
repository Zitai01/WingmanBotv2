import VueRouter from 'vue-router'
import Home from './pages/Home'
import Config from './pages/Config'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/config', component: Config, name: 'Config' }
]

export default new VueRouter({ routes, mode: 'history' })
