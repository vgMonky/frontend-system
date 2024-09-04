<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="menu-container">
    <button @click="toggleMenu" class="menu-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <div v-if="isOpen" class="menu-dropdown">
      <router-link to="/" @click="toggleMenu">Intro</router-link>
      <router-link to="/style" @click="toggleMenu">Style</router-link>
      <router-link to="/components" @click="toggleMenu">Components</router-link>
      <router-link to="/layouts" @click="toggleMenu">Layouts</router-link>
    </div>
  </div>
</template>

<style scoped>
svg{
    color: var(--t0);
}

.menu-container {
  position: relative;
}

.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: var(--t4);
  border: 1px solid var(--t3);
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.menu-dropdown a {
  color: var(--t1);
  text-decoration: none;
}

.menu-dropdown a:hover {
  text-decoration: underline;
}

.menu-dropdown a.router-link-active {
  font-weight: bold;
}
</style>