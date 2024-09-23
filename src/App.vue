<script setup>
  import { onMounted } from 'vue';
  import Navigation from './feature_modules/Navigation/Navigation.vue';

  import { initTheme } from './feature_modules/StyleVariables/theme';
  import { initColorVariables, initTextVariables, initShapeVariables } from '@/feature_modules/StyleVariables/variableManager';

  onMounted(() => {
    initTheme();
    initColorVariables();
    initTextVariables();
    initShapeVariables();
  });
</script>

<template>
  <Navigation />
</template>

<style>
/* Any global styles can remain here */
</style>