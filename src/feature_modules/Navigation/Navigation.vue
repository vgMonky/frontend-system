<script setup>
import NavBar from './NavBar.vue';
import { useViewWatcher } from './viewWatcher';

// Initialize the view watcher
useViewWatcher();

</script>

<template>
  <NavBar title="Web Page Title" />
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