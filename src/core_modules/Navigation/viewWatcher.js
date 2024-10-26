import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useMenuStore } from './menuStore'

export function useViewWatcher() {
  const router = useRouter()
  const menuStore = useMenuStore()

  watchEffect(() => {
    const routes = router.getRoutes()
    menuStore.updateMenuItems(routes)
  })
}