<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Menu from './components/Menu.vue';
import { initTheme } from './state/theme';
import { initColorVariables } from './state/colorVariables';
import { initTextVariables } from './state/textVariables';
import { initShapeVariables } from './state/shapeVariables';

onMounted(() => {
  initTheme();
  initColorVariables();
  initTextVariables();
  initShapeVariables();
  
});
</script>

<template>
  <NavBar title="Frontend System Library" />
  <Menu />
  <main class="main-content">
    <router-view></router-view>
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