<script setup>
import { computed } from 'vue';
import Toggle from '@/feature_modules/components/Toggle.vue';
import { Moon, Sun } from 'lucide-vue-next';
import { currentTheme, toggleTheme } from '@/feature_modules/StyleVariables/theme';

// Compute darkMode based on currentTheme
const darkMode = computed({
  get: () => currentTheme.value === 'dark',
  set: (value) => toggleTheme()
});

// Compute the icon based on the current theme
const toggleIcon = computed(() => darkMode.value ? Moon : Sun );
</script>

<template>
  <Toggle v-model="darkMode" :icon="toggleIcon" />
</template>