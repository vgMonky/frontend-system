<script setup>
import { onMounted } from 'vue';
import NavBar from './feature_modules/NavBar/NavBar.vue';

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
  <NavBar title="UI Component Library" />
  <main>
    <router-view class="main-content"></router-view>
  </main>
</template>

<style>
main {
  padding-top: 80px;
  margin: 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>