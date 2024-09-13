<script setup>
import { onMounted } from 'vue';
import NavBar from './NavBar.vue';
import { useViewWatcher } from './viewWatcher';

// Initialize the view watcher
useViewWatcher();

onMounted(() => {
  // Any navigation-specific initialization can go here
});
</script>

<template>
  <NavBar title="Frontend System" />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  padding-top: 80px;
  margin: 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>