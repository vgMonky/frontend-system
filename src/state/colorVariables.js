import { ref, watch } from 'vue';
import { saveToLocal, loadFromLocal } from './saveLocal';

const defaultColors = {
  dark: '#0f0f0f',
  dark2: '#404040',
  accent: '#819234',
  light2: '#C0C0C0',
  light: '#f6f5f4',
};

const colorVariables = ref(loadFromLocal('colorVariables', defaultColors));

const updateColorVariable = (key, value) => {
  colorVariables.value[key] = value;
};

watch(colorVariables, (newColors) => {
  Object.entries(newColors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  saveToLocal('colorVariables', newColors);
}, { deep: true });

const initColorVariables = () => {
  Object.entries(colorVariables.value).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

const resetToDefaults = () => {
  colorVariables.value = { ...defaultColors };
  saveToLocal('colorVariables', defaultColors);
  initColorVariables();
};

export { colorVariables, updateColorVariable, initColorVariables, resetToDefaults };