import { createRouter, createWebHashHistory } from 'vue-router'

import Landing from './components/Landing.vue'
import Creativity from './components/Creativity.vue'
import Business from './components/Business.vue'
import Tech from './components/Tech.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/creativity', component: Creativity },
  { path: '/business', component: Business },
  { path: '/tech', component: Tech }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})