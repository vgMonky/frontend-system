<template>
  <div class="color-editor">
    <h3>Edit Color Variables</h3>
    <p>The strategic use of an 'accent' color variable, plays a crucial role in maintaining accessibility and visual hierarchy across our user interface. Look around! It's an indicator of interaction.</p>
    <br>
    <div class="contained">

      <button @click="toggleAdvanced">
        <component :is="showAdvanced ? Minus : Plus" />
        {{ showAdvanced ? 'Hide Advanced' : 'Show Advanced'}}
      </button>

      <div v-for="(color, key) in filteredColorVariables" :key="key" class="text-input">
        <p class="lable" :for="key">{{ key }}:</p>
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
      <br>
      <button class="contained" @click="resetColorToDefaults"><RefreshCcw />Reset to Defaults</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { colorVariables, updateColorVariable, resetColorToDefaults } from './variableManager';
import { Plus, Minus, RefreshCcw } from 'lucide-vue-next';

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

<style scoped>
.color-editor {
  margin-top: 20px;
}
.text-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.lable {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 6px;
}
input[type="color"] {
  margin-right: 10px;
}
input[type="text"] {
  width: 100px;
  margin-right: 5px;
}
button {
  margin-bottom: 15px;
}
</style>