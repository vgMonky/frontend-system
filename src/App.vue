<script setup>
import { onMounted } from 'vue';
import NavBar from './feature_modules/Navigation/NavBar.vue';

import { initTheme } from './feature_modules/StyleVariables/theme';
import { initColorVariables } from './feature_modules/StyleVariables/colorVariables';
import { initTextVariables } from './feature_modules/StyleVariables/textVariables';
import { initShapeVariables } from './feature_modules/StyleVariables/shapeVariables';
import { useViewWatcher } from './feature_modules/Navigation/viewWatcher'

onMounted(() => {
  initTheme();
  initColorVariables();
  initTextVariables();
  initShapeVariables();
});


// Initialize the view watcher
useViewWatcher()
</script>

<template>
  <NavBar title="Frontend System" />
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