<script setup>
import { ref, computed } from 'vue';
import { colorVariables, updateColorVariable, resetToDefaults } from '../state/colorVariables';
import { toggleTheme } from '../state/theme';

const showAdvanced = ref(false);

const toggleAdvanced = () => {
  showAdvanced.value = !showAdvanced.value;
};

const handleColorChange = (event, key) => {
  updateColorVariable(key, event.target.value);
};

const filteredColorVariables = computed(() => {
  if (showAdvanced.value) {
    return colorVariables.value;
  } else {
    const { dark, accent, light } = colorVariables.value;
    return { dark, accent, light };
  }
});
</script>

<template>
  <div class="color-editor">
    <h3>Edit Color Variables</h3>
    <p>Our color system is designed to ensure optimal contrast for interactive elements such as buttons, toggles, and links. This is achieved through the strategic use of an 'accent' color variable, which plays a crucial role in maintaining accessibility and visual hierarchy across our user interface. It's an indicator of interaction.</p>
    <br>
    <div v-for="(color, key) in filteredColorVariables" :key="key" class="color-input">
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
    <button @click="toggleAdvanced">{{ showAdvanced ? 'Hide Advanced' : 'Advanced Edit' }}</button>
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