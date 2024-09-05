<template>
  <div class="head">
    <h1>Style and Variables</h1>
    <p>In this section you can edit the whole style in a global way. Everithing edited here will be applyed live and will automaticly afect both light and dark theme.
    <br>
    <br>
    <button @click="toggleTheme">Toggle light/dark</button>
    </p>
  </div>


  <Expandable title="Text Editor" titleopen="Hide Text Editor">
    <TextEditor/>
  </Expandable>

  <Expandable title="Color Editor" titleopen="Hide Color Editor">
    <ColorEditor/>
  </Expandable>

  <Expandable title="Shape Editor" titleopen="Hide Shape Editor">
    <ShapeEditor/>
  </Expandable>
</template>

<script setup>
import TextEditor from '../components/TextEditor.vue';
import ColorEditor from '../components/ColorEditor.vue';
import ShapeEditor from '../components/ShapeEditor.vue';
import Expandable from '../components/Expandable.vue';
import { toggleTheme } from '@/state/theme';

</script>

<style scoped>
.head{
  margin-bottom: 30px;
}
</style>