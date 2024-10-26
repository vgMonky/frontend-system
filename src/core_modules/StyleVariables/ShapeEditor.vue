<template>
  <h3>Edit Shape Variables</h3>
  <p>Adjust the shape variables to change the appearance of elements throughout the site.</p>
  <div v-for="(value, key) in shapeVariables" :key="key" class="input-group">
    <label :for="key">{{ getLabel(key) }}:</label>
    <div class="slider-container">
      <input
        :id="key"
        type="range"
        :min="0"
        :max="35"
        :value="parseInt(value)"
        @input="updateVariable(key, $event.target.value)"
      >
      <span>{{ value }}</span>
    </div>
  </div>
  <br>
  <button class="contained quiet" @click="resetShapeToDefaults"><RefreshCcw /> Reset to Defaults</button>
</template>

<script setup>
import { shapeVariables, updateShapeVariable, resetShapeToDefaults } from './variableManager';
import { RefreshCcw } from 'lucide-vue-next'

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
.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  width: 200px;
  margin-right: 10px;
}

.slider-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

input[type="range"] {
  flex-grow: 1;
  margin-right: 10px;
}

button {
  margin-right: 10px;
}
</style>