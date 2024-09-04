<script setup>
import { colorVariables, updateColorVariable, resetToDefaults } from '../state/colorVariables';

const handleColorChange = (event, key) => {
  updateColorVariable(key, event.target.value);
};
</script>

<template>
  <div class="color-editor">
    <h3>Edit Color Variables</h3>
    <br>
    <div v-for="(color, key) in colorVariables" :key="key" class="color-input">
      <label :for="key">{{ key }}:</label>
      <input 
        :id="key" 
        type="color" 
        :value="color" 
        @input="(event) => handleColorChange(event, key)"
      />
      <input 
        type="text" 
        :value="color" 
        @input="(event) => handleColorChange(event, key)"
      />
    </div>
    <button @click="resetToDefaults">Reset to Defaults</button>
  </div>
</template>

<style scoped>
.color-editor {
  margin-top: 20px;
}
.color-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
label {
  width: 80px;
  margin-right: 10px;
}
input[type="color"] {
  margin-right: 10px;
}
</style>