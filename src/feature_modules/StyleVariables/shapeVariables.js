import { ref, watch } from 'vue';
import { saveToLocal, loadFromLocal } from '@/utils/saveLocal';

const defaultShapeVariables = {
  r0: '5px',
  r1: '20px',
  pad: '25px',
};

const shapeVariables = ref(loadFromLocal('shapeVariables', defaultShapeVariables));

const updateShapeVariable = (key, value) => {
  shapeVariables.value[key] = value;
};

watch(shapeVariables, (newVariables) => {
  Object.entries(newVariables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  saveToLocal('shapeVariables', newVariables);
}, { deep: true });

const initShapeVariables = () => {
  Object.entries(shapeVariables.value).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

const resetToDefaults = () => {
  shapeVariables.value = { ...defaultShapeVariables };
  saveToLocal('shapeVariables', defaultShapeVariables);
  initShapeVariables();
};

export { shapeVariables, updateShapeVariable, initShapeVariables, resetToDefaults };