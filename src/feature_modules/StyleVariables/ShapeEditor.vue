<template>
  <h3>Edit Shape Variables</h3>
  <p>Adjust the shape variables to change the appearance of elements throughout the site.</p>
  <div v-for="(value, key) in shapeVariables" :key="key" class="text-input">
    <p class="lable" :for="key">{{ getLabel(key) }}:</p>
    <input
      :id="key"
      type="number"
      :value="parseInt(value)"
      @input="updateVariable(key, $event.target.value)"
    >
    <p>px</p>
  </div>
  <br>
  <button class="contained" @click="resetToDefaults"><RefreshCcw /> Reset to Defaults</button>
</template>

<script setup>
import { shapeVariables, updateShapeVariable, resetToDefaults } from './shapeVariables';
import {RefreshCcw} from 'lucide-vue-next'

const labels = {
  r0: 'Container Border Radius',
  r1: 'Button Border Radius',
  pad: 'Padding',
};

const getLabel = (key) => labels[key] || key;

const updateVariable = (key, value) => {
  // Ensure the value is a positive integer
  const intValue = Math.max(0, parseInt(value) || 0);
  updateShapeVariable(key, `${intValue}px`);
};
</script>

<style scoped>
.text-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.lable {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 6px;
}
input[type="number"] {
  width: 100px;
  margin-right: 5px;
}
button {
  margin-right: 10px;
}
</style>