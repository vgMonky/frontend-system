<template>
  <view>
    <h1>Headline h1</h1>
    <br>
    <p>This is a paragraph.</p>
    <br>
    <br>
    <h2>Headline h2</h2>
    <br>
    <br>
    <p>This is a paragraph.</p>
    <br>
    <br>
    <h3>Headline h3</h3>
    <br>
    <p>This is a paragraph.</p>
    <br><br><br><br>
    <button @click="toggleTheme">
      {{ isDarkMode ? 'Light' : 'Dark' }} Mode
    </button>
    <br><br>
    <div class="t0 box">var(--t0)</div>
    <div class="t1 box">var(--t1)</div>
    <div class="t2 box">var(--t2)</div>
    <div class="t3 box">var(--t3)</div>
    <div class="t4 box">var(--t4)</div>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  updateTheme();
}

function updateTheme() {
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  isDarkMode.value = savedTheme === 'dark';
  updateTheme();
});
</script>

<style scoped>
.box {
  width: 80px;
  height: 80px;
}
.t0 {
  background-color: var(--t0);
  color: var(--t4);
}
.t1 {
  background-color: var(--t1);
  color: var(--t4);
}
.t2 {
  background-color: var(--t2);
  color: var(--t4);
}
.t3 {
  background-color: var(--t3);
  color: var(--t0);
}
.t4 {
  background-color: var(--t4);
  border: 1px solid var(--t3);
  color: var(--t0);
}
</style>