<script setup>
import NavBar from './NavBar.vue';
import { useViewWatcher } from './viewWatcher';

// Initialize the view watcher
useViewWatcher();

</script>

<template>
  <NavBar title="Web Page Title" />
  <view>
    <router-view></router-view>
  </view>
</template>

<style scoped>
view {
  padding: 80px 30px 0px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;

}
</style>