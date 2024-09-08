<script setup>
import { textVariables, updateTextVariable, resetToDefaults } from '../state/textVariables';

const handleInputChange = (event, key) => {
  let value = event.target.value;
  if (key !== 'font') {
    value = `${value}pt`;
  }
  updateTextVariable(key, value);
};
</script>

<template>
  <div class="text-editor">
    <h3>Edit Text Variables</h3>
    <div class="text-input">
      <label for="p">Paragraph Size (pt):</label>
      <input
        id="p"
        type="number"
        :value="parseInt(textVariables.p)"
        @input="(event) => handleInputChange(event, 'p')"
      />
    </div>
    <div class="text-input">
      <label for="font">Font Family:</label>
      <select
        id="font"
        :value="textVariables.font"
        @change="(event) => handleInputChange(event, 'font')"
      >
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
    <div class="text-input">
      <label for="hmax">Max Heading Size (pt):</label>
      <input
        id="hmax"
        type="number"
        :value="parseInt(textVariables.hmax)"
        @input="(event) => handleInputChange(event, 'hmax')"
      />
    </div>
    <div class="text-input">
      <label for="hmin">Min Heading Size (pt):</label>
      <input
        id="hmin"
        type="number"
        :value="parseInt(textVariables.hmin)"
        @input="(event) => handleInputChange(event, 'hmin')"
      />
    </div>
    <button @click="resetToDefaults">Reset to Defaults</button>
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
  </div>
</template>

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
}
</style>