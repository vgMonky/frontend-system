<script setup>
import { onMounted } from 'vue';
import Navigation from './feature_modules/Navigation/Navigation.vue';

import { initTheme } from './feature_modules/StyleVariables/theme';
import { initColorVariables } from './feature_modules/StyleVariables/colorVariables';
import { initTextVariables } from './feature_modules/StyleVariables/textVariables';
import { initShapeVariables } from './feature_modules/StyleVariables/shapeVariables';

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