<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Menu from './components/Menu.vue';
import { initTheme } from './state/theme';
import { initColorVariables } from './state/colorVariables';
import { initTextVariables } from './state/textVariables';

onMounted(() => {
  initTheme();
  initColorVariables();
  // initTextVariables();
});
</script>

<template>
  <div class="app-container">
    <NavBar title="Frontend System" />
    <Menu />
    <main class="main-content">
      <router-view></router-view>
    </main>
    
  </div>
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