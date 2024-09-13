<template>
    <h1>Edit Mode</h1>
    <button class="contained bold" @click="toggleEdit">
      {{ isEditMode ? 'Turn Off Edit Mode' : 'Turn On Edit Mode' }}
    </button>
  </template>
  
  <script setup>
  import { toggleEditMode, getEditMode } from '@/feature_modules/Navigation/toggleEditMode';
  import { computed } from 'vue';
  
  const isEditMode = computed(() => getEditMode().value);
  
  function toggleEdit() {
    toggleEditMode();
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>