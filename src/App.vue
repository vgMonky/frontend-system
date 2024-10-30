<script setup>
  import { onMounted } from 'vue';
  import Navigation from '@/core_modules/Navigation/components/Navigation.vue';
  import { initTheme } from '@/core_modules/StyleVariables/theme';
  import { initColorVariables, initTextVariables, initShapeVariables } from '@/core_modules/StyleVariables/variableManager';

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