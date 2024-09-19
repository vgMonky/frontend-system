import { ref, watch } from 'vue';
import { saveToLocal, loadFromLocal } from '@/utils/saveLocal';

const defaultTextVariables = {
  font: 'sans-serif',
  hmax: '50pt',
  hmin: '18pt',
  p: '12pt',
  ps: '9pt'
};

const textVariables = ref(loadFromLocal('textVariables', defaultTextVariables));

const updateTextVariable = (key, value) => {
  textVariables.value[key] = value;
};

watch(textVariables, (newVariables) => {
  Object.entries(newVariables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  saveToLocal('textVariables', newVariables);
}, { deep: true });

const initTextVariables = () => {
  Object.entries(textVariables.value).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

const resetToDefaults = () => {
  textVariables.value = { ...defaultTextVariables };
  saveToLocal('textVariables', defaultTextVariables);
  initTextVariables();
};

export { textVariables, updateTextVariable, initTextVariables, resetToDefaults };