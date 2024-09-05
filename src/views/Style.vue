<template>
  <div class="contained">
    <TextEditor/>
  </div>

  <div class="contained">
    <ColorEditor/>
  </div> 

  <div class="contained">
    <ShapeEditor/>
  </div>
</template>

<script setup>
import TextEditor from '../components/TextEditor.vue';
import ColorEditor from '../components/ColorEditor.vue';
import ShapeEditor from '../components/ShapeEditor.vue';

</script>

<style scoped>

</style>