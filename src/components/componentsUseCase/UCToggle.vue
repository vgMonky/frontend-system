<template>
    <h3>Toggle Component</h3>
    <p>The Toggle Component is a customizable switch that allows users to toggle between two states.</p>
    <br>
    <Toggle v-model="isOnline" :icon="toggleIcon" />
    <p>Current status: {{ isOnline ? 'Online' : 'Offline' }}</p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Toggle from '@/components/Toggle.vue';
  import { Wifi, WifiOff } from 'lucide-vue-next';
  
  const isOnline = ref(false);
  
  // Compute the icon based on the current online status
  const toggleIcon = computed(() => isOnline.value ? Wifi : WifiOff);
  </script>
  
  <style scoped>
  </style>