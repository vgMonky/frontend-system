import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import Style from '../views/Style.vue'
import Components from '../views/Components.vue'
import Layouts from '../views/Layouts.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: Layouts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
