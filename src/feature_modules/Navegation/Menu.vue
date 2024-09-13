<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { isMenuOpen, closeMenu } from './useMenu';

const menuRef = ref(null);

const menuClass = computed(() => ({
  'menu-sidebar': true,
  'open': isMenuOpen.value
}));

const handleOutsideClick = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target) && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 0);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
});
</script>

<template>
  <div :class="menuClass" ref="menuRef">
    <router-link to="/" >Intro</router-link>
    <router-link to="/style" >Style</router-link>
    <router-link to="/components" >Components</router-link>
    <router-link to="/layouts" >Layouts</router-link>
    <br>
    <button>+ Create +</button>
  </div>
</template>

<style scoped>
.menu-sidebar {
  position: fixed;
  top: 80px; /* Adjust based on your NavBar height */
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--c4);
  border-left: 1px solid var(--c3);
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
  color: var(--c1);
  text-decoration: none;
  font-size: 1.1rem;
}

.menu-sidebar a:hover {
  text-decoration: underline;
}

.menu-sidebar a.router-link-active {
  font-weight: bold;
}

</style>