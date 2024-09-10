<template>
    <h3>Edit Shape Variables</h3>
    <p>Adjust the shape variables to change the appearance of elements throughout the site.</p>
    <div v-for="(value, key) in shapeVariables" :key="key" class="input-group">
      <label :for="key">{{ getLabel(key) }}:</label>
      <input 
        :id="key" 
        type="number" 
        :value="parseInt(value)"
        @input="updateVariable(key, $event.target.value)"
      >
      <span>px</span>
    </div>
    <br>
    <button @click="resetToDefaults">Reset to Defaults</button>
    
  </template>
  
  <script setup>
  import { shapeVariables, updateShapeVariable, resetToDefaults } from '@/state/shapeVariables';
  
  const labels = {
    r0: 'Container Border Radius',
    r1: 'Button Border Radius',
    pad0: 'Vertical Padding',
    pad1: 'Horizontal Padding'
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
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  label {
    display: inline-block;
    width: 150px;
    margin-right: 10px;
  }
  
  input[type="number"] {
    width: 60px;
    margin-right: 5px;
  }
  
  </style>