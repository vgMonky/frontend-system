import { ref } from 'vue'

const isEditMode = ref(false)

export function toggleEditMode() {
  isEditMode.value = !isEditMode.value
}

export function getEditMode() {
  return isEditMode
}
