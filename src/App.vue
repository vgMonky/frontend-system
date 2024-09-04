<script setup>
import { ref, onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Menu from './components/Menu.vue';
import { initTheme } from './state/theme';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="app-container">
    <NavBar title="Frontend System" @toggle-menu="toggleMenu" />
    <main class="main-content">
      <Menu :is-open="isMenuOpen" @close-menu="isMenuOpen = false" />
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
main {
  padding-top: 80px;
}
</style>