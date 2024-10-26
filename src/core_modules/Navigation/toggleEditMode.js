import { ref } from 'vue'

const isEditMode = ref(true)

export function toggleEditMode() {
  isEditMode.value = !isEditMode.value
}

export function getEditMode() {
  return isEditMode
}
