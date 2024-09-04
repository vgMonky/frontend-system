<script setup>
import { computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['closeMenu']);

const menuClass = computed(() => ({
  'menu-sidebar': true,
  'open': props.isOpen
}));
</script>

<template>
  <div :class="menuClass">
    <router-link to="/" @click="$emit('closeMenu')">Intro</router-link>
    <router-link to="/style" @click="$emit('closeMenu')">Style</router-link>
    <router-link to="/components" @click="$emit('closeMenu')">Components</router-link>
    <router-link to="/layouts" @click="$emit('closeMenu')">Layouts</router-link>
  </div>
</template>

<style scoped>
.menu-sidebar {
  position: fixed;
  top: 80px; /* Adjust based on your NavBar height */
  right: 0;
  height: calc(100vh - 80px); /* Adjust based on your NavBar height */
  width: 250px;
  background-color: var(--t4);
  border-left: 1px solid var(--t3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.menu-sidebar.open {
  transform: translateX(0);
}

.menu-sidebar a {
  color: var(--t1);
  text-decoration: none;
  font-size: 1.1rem;
}

.menu-sidebar a:hover {
  text-decoration: underline;
}

.menu-sidebar a.router-link-active {
  font-weight: bold;
}

@media (min-width: 1201px) {
  .menu-sidebar {
    transform: translateX(0);
  }
}
</style>