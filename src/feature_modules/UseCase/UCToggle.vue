<template>
    <h2>Toggle Component</h2>
    <p>The Toggle Component is a customizable switch that allows users to toggle between two states. It can have any icon apropiate for the situation and functionalities.</p>
    <br>
    <Toggle v-model="isOnline" :icon="toggleIcon" />
    <p>Current status: {{ isOnline ? 'Online' : 'Offline' }}</p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Toggle from '@/feature_modules/components/Toggle.vue';
  import { Wifi, WifiOff } from 'lucide-vue-next';
  
  const isOnline = ref(false);
  
  // Compute the icon based on the current online status
  const toggleIcon = computed(() => isOnline.value ? Wifi : WifiOff);
  </script>
  
  <style scoped>
  </style>