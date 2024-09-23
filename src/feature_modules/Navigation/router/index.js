import { createRouter, createWebHistory } from 'vue-router'

const baseViews = import.meta.glob('@/views/base/*.vue')
const customViews = import.meta.glob('@/views/*.vue')

const createRoutes = (views, isBase = false) => {
  return Object.entries(views).map(([path, component]) => {
    const fileName = path.split('/').pop()
    const match = fileName.match(/^(\d+_)?(.+)\.vue$/)
    const order = match[1] ? parseInt(match[1]) : Infinity
    const name = match[2]
    return {
      path: `/${name.toLowerCase()}`,
      name,
      component,
      meta: { isBase, order }
    }
  })
}

const baseRoutes = createRoutes(baseViews, true)
const customRoutes = createRoutes(customViews)

// Sort custom routes by order, then by name
const sortedCustomRoutes = customRoutes.sort((a, b) => {
  if (a.meta.order !== b.meta.order) {
    return a.meta.order - b.meta.order
  }
  return a.name.localeCompare(b.name)
})

// Set the first custom route's path to "/"
if (sortedCustomRoutes.length > 0) {
  sortedCustomRoutes[0].path = "/"
}

const routes = [...baseRoutes, ...sortedCustomRoutes]

const router = createRouter({
  history: createWebHistory('/frontend-system/'), // Update this line
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router