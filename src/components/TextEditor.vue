<template>
  <div class="text-editor">
    <h3>Edit Text Variables</h3>
    <div v-for="(value, key) in textVariables" :key="key" class="text-input">
      <label :for="key">{{ getLabel(key) }}:</label>
      <input
        v-if="key !== 'font'"
        :id="key"
        type="number"
        :value="parseInt(value)"
        @input="(event) => handleInputChange(event, key)"
      />
      <select
        v-else
        :id="key"
        :value="value"
        @change="(event) => handleInputChange(event, key)"
      >
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <span v-if="key !== 'font'">pt</span>
    </div>
    <button @click="togglePreview">{{ showPreview ? 'Hide' : 'Show' }} Preview</button>
    <button @click="resetToDefaults">Reset to Defaults</button>
    <div v-if="showPreview" class="preview">
      <h1>Headline h1</h1>
      <p>Font and pt sizes will be defined here</p>
      <br>
      <br>
      <h2>Headline h2</h2>
      <p>This is a paragraph.</p>
      <br>
      <br>
      <h3>Headline h3</h3>
      <p>This is a paragraph.</p>
      <br>
      <br>
      <h4>Headline h4</h4>
      <p>This is a paragraph.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { textVariables, updateTextVariable, resetToDefaults } from '../state/textVariables';

const showPreview = ref(false);

const labels = {
  p: 'Paragraph Size',
  font: 'Font Family',
  hmax: 'Max Heading Size',
  hmin: 'Min Heading Size'
};

const getLabel = (key) => labels[key] || key;

const handleInputChange = (event, key) => {
  let value = event.target.value;
  if (key !== 'font') {
    const intValue = Math.max(0, parseInt(value) || 0);
    value = `${intValue}pt`;
  }
  updateTextVariable(key, value);
};

const togglePreview = () => {
  showPreview.value = !showPreview.value;
};
</script>

<style scoped>
.text-editor {
  margin-top: 20px;
}
.text-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
label {
  width: 150px;
  margin-right: 10px;
}
input[type="number"], select {
  width: 100px;
  margin-right: 5px;
}
.preview {
  margin-top: 20px;
  border-top: 1px solid var(--c3);
  padding-top: 20px;
}
button {
  margin-right: 10px;
}
</style>