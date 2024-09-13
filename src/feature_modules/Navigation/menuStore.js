import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const baseMenuItems = ref([])
  const customMenuItems = ref([])

  const updateMenuItems = (routes) => {
    const sortByOrderThenName = (a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order
      }
      return a.name.localeCompare(b.name)
    }

    baseMenuItems.value = routes
      .filter(route => route.meta?.isBase)
      .map(route => ({
        name: route.name,
        path: route.path,
        order: route.meta.order
      }))
      .sort(sortByOrderThenName)

    customMenuItems.value = routes
      .filter(route => !route.meta?.isBase)
      .map(route => ({
        name: route.name,
        path: route.path,
        order: route.meta.order
      }))
      .sort(sortByOrderThenName)
  }

  const getBaseMenuItems = computed(() => baseMenuItems.value)
  const getCustomMenuItems = computed(() => customMenuItems.value)

  return { updateMenuItems, getBaseMenuItems, getCustomMenuItems }
})