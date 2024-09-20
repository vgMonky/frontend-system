<template>
  <div class="text-editor">
    <h3>Edit Text Variables</h3>
    <p>Some text explanation or recommendation.</p>
    <br>
    <div class="contained">
      <!-- Font selection at the top -->
      <div class="text-input">
        <p class="lable" for="font">{{ getLabel('font') }}:</p>
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
      <!-- Heading sizes -->
      <div v-for="key in ['hmax', 'hmin']" :key="key" class="text-input">
        <p class="lable" :for="key">{{ getLabel(key) }}:</p>
        <input
          :id="key"
          type="number"
          :value="parseInt(textVariables[key])"
          @input="(event) => handleInputChange(event, key)"
        />
        <p>pt</p>
      </div>
      <!-- Paragraph sizes at the bottom -->
      <div v-for="key in ['p', 'ps']" :key="key" class="text-input">
        <p class="lable" :for="key">{{ getLabel(key) }}:</p>
        <input
          :id="key"
          type="number"
          :value="parseInt(textVariables[key])"
          @input="(event) => handleInputChange(event, key)"
        />
        <p>pt</p>
      </div>
      <button class="contained" @click="resetTextToDefaults"><RefreshCcw />Reset to Defaults</button>
    </div>
    <br>

    <button @click="togglePreview">
      <component :is="showPreview ? ChevronDown : ChevronRight" />
      {{ showPreview ? 'Hide Preview' : 'Show Preview'}}
    </button>

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
      <br>
      <p class="ps">This is small paragraph using the --ps variable.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { textVariables, updateTextVariable, resetTextToDefaults } from './variableManager';
import { ChevronRight, ChevronDown, RefreshCcw } from 'lucide-vue-next';


const showPreview = ref(false);
const togglePreview = () => {
  showPreview.value = !showPreview.value;
}


const labels = {
  font: 'Font Family',
  hmax: 'Max Heading Size',
  hmin: 'Min Heading Size',
  p: 'Paragraph Text Size',
  ps: 'Small Text Size'
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
.lable {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 6px;
}
input[type="number"], select {
  width: 140px;
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