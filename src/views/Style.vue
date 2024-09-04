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
    <button @click="toggleTheme">Toggle light/dark</button>
    <br><br>
    <div class="c0 box">var(--c0)</div>
    <div class="c1 box">var(--c1)</div>
    <div class="c2 box">var(--c2)</div>
    <div class="c3 box">var(--c3)</div>
    <div class="c4 box">var(--c4)</div>
    <ColorEditor/>
  </view>
</template>

<script setup>
import { toggleTheme } from '../state/theme';
import ColorEditor from '../components/ColorEditor.vue';
</script>

<style scoped>
.box {
  width: 80px;
  height: 80px;
}
.c0 {
  background-color: var(--c0);
  color: var(--c4);
}
.c1 {
  background-color: var(--c1);
  color: var(--c4);
}
.c2 {
  background-color: var(--c2);
  color: var(--c4);
}
.c3 {
  background-color: var(--c3);
  color: var(--c0);
}
.c4 {
  background-color: var(--c4);
  border: 1px solid var(--c3);
  color: var(--c0);
}
</style>