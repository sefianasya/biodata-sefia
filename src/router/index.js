import { createRouter, createWebHistory } from 'vue-router'
import BiodataSefia from '../views/BiodataSefia.vue'

const routes = [
  {
    path: '/biodata-sefia',
    name: 'Biodata',
    component: BiodataSefia
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
