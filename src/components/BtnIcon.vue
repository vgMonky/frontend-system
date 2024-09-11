<template>
    <button class="btn-icon">
      <span v-html="icon" class="icon"></span>
      <span class="text">{{ text }}</span>
    </button>
  </template>
  
  <script setup>
  defineProps({
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .btn-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .icon {
    margin-right: 8px;
  }
  </style>