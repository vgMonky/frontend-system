<script setup>
import { ref } from 'vue';
import { colorVariables, updateColorVariable, resetToDefaults } from '../state/colorVariables';
import { toggleTheme } from '../state/theme';

const handleColorChange = (event, key) => {
  updateColorVariable(key, event.target.value);
};

const showAdvanced = ref(false);

const toggleAdvanced = () => {
  showAdvanced.value = !showAdvanced.value;
};
</script>

<template>
  <h2>Color Theme</h2>
  <p>Colors and color-theme will be explained and edited here. </p>
  <button @click="toggleTheme">Toggle light/dark</button>
  <br><br>
  <div class="color-editor">
    <h3>Edit Color Variables</h3>
    <br>
    <div class="color-input">
      <label for="color2">color2:</label>
      <input
        id="color2"
        type="color"
        :value="colorVariables.color2"
        @input="(event) => handleColorChange(event, 'color2')"
      />
      <input
        type="text"
        :value="colorVariables.color2"
        @input="(event) => handleColorChange(event, 'color2')"
      />
    </div>
    <button @click="toggleAdvanced">{{ showAdvanced ? 'Hide Advanced' : 'Advanced Edit' }}</button>
    <div v-if="showAdvanced">
      <div v-for="(color, key) in colorVariables" :key="key" class="color-input">
        <template v-if="key !== 'color2'">
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
        </template>
      </div>
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