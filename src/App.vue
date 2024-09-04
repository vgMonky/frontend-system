<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Menu from './components/Menu.vue';
import { initTheme } from './state/theme';
import { initColorVariables } from './state/colorVariables';

onMounted(() => {
  initTheme();
  initColorVariables();
});
</script>

<template>
  <div class="app-container">
    <NavBar title="Frontend System" />
    <main class="main-content">
      <Menu />
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
main {
  padding-top: 80px;
}
</style>