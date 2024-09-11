<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';

import { initTheme } from './components/StyleVariables/theme';
import { initColorVariables } from './components/StyleVariables/colorVariables';
import { initTextVariables } from './components/StyleVariables/textVariables';
import { initShapeVariables } from './components/StyleVariables/shapeVariables';

onMounted(() => {
  initTheme();
  initColorVariables();
  initTextVariables();
  initShapeVariables();
});
</script>

<template>
  <NavBar title="Micro Frontend System Library" />
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