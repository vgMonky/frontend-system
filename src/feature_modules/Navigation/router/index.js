import { createRouter, createWebHistory } from 'vue-router'

const baseViews = import.meta.glob('../views/base/*.vue')
const customViews = import.meta.glob('../views/*.vue')

const createRoutes = (views, isBase = false) => {
  return Object.entries(views).map(([path, component]) => {
    const fileName = path.split('/').pop()
    const match = fileName.match(/^(\d+_)?(.+)\.vue$/)
    const order = match[1] ? parseInt(match[1]) : Infinity
    const name = match[2]
    return {
      path: name.toLowerCase() === 'intro' ? '/' : `/${name.toLowerCase()}`,
      name,
      component,
      meta: { isBase, order }
    }
  })
}

const baseRoutes = createRoutes(baseViews, true)
const customRoutes = createRoutes(customViews)

const routes = [...baseRoutes, ...customRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router