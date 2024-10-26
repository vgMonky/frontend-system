import { ref, watch } from 'vue';
import { saveToLocal, loadFromLocal } from '@/feature_modules/StyleVariables/saveLocal';
import defaultVariables from './default_variables.json';

// Create refs for each variable group
const colorVariables = ref(loadFromLocal('colorVariables', defaultVariables.colorVariables));
const shapeVariables = ref(loadFromLocal('shapeVariables', defaultVariables.shapeVariables));
const textVariables = ref(loadFromLocal('textVariables', defaultVariables.textVariables));

// Generic update function
const updateVariable = (group, key, value) => {
  group.value[key] = value;
};

// Generic watch function
const watchVariables = (group, name) => {
  watch(group, (newVariables) => {
    Object.entries(newVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    saveToLocal(name, newVariables);
  }, { deep: true });
};

// Set up watches for each group
watchVariables(colorVariables, 'colorVariables');
watchVariables(shapeVariables, 'shapeVariables');
watchVariables(textVariables, 'textVariables');

// Generic init function
const initVariables = (group) => {
  Object.entries(group.value).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

// Generic reset function
const resetToDefaults = (group, defaultGroup, name) => {
  group.value = { ...defaultGroup };
  saveToLocal(name, defaultGroup);
  initVariables(group);
};

// Specific functions for each variable group
const updateColorVariable = (key, value) => updateVariable(colorVariables, key, value);
const updateShapeVariable = (key, value) => updateVariable(shapeVariables, key, value);
const updateTextVariable = (key, value) => updateVariable(textVariables, key, value);

const initColorVariables = () => initVariables(colorVariables);
const initShapeVariables = () => initVariables(shapeVariables);
const initTextVariables = () => initVariables(textVariables);

const resetColorToDefaults = () => resetToDefaults(colorVariables, defaultVariables.colorVariables, 'colorVariables');
const resetShapeToDefaults = () => resetToDefaults(shapeVariables, defaultVariables.shapeVariables, 'shapeVariables');
const resetTextToDefaults = () => resetToDefaults(textVariables, defaultVariables.textVariables, 'textVariables');

// Function to export all variables
const exportAllVariables = () => {
  const allVariables = {
    colorVariables: colorVariables.value,
    shapeVariables: shapeVariables.value,
    textVariables: textVariables.value,
  };
  const jsonString = JSON.stringify(allVariables, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'style-variables.json';
  a.click();
  URL.revokeObjectURL(url);
};

// Function to import all variables
const importAllVariables = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedVariables = JSON.parse(event.target.result);
        if (importedVariables.colorVariables && importedVariables.shapeVariables && importedVariables.textVariables) {
          colorVariables.value = importedVariables.colorVariables;
          shapeVariables.value = importedVariables.shapeVariables;
          textVariables.value = importedVariables.textVariables;
          saveToLocal('colorVariables', importedVariables.colorVariables);
          saveToLocal('shapeVariables', importedVariables.shapeVariables);
          saveToLocal('textVariables', importedVariables.textVariables);
          initColorVariables();
          initShapeVariables();
          initTextVariables();
          resolve('Style variables imported successfully');
        } else {
          reject('Invalid style variables format');
        }
      } catch (error) {
        reject('Error parsing style variables file');
      }
    };
    reader.onerror = () => reject('Error reading file');
    reader.readAsText(file);
  });
};

export {
  colorVariables, shapeVariables, textVariables,
  updateColorVariable, updateShapeVariable, updateTextVariable,
  initColorVariables, initShapeVariables, initTextVariables,
  resetColorToDefaults, resetShapeToDefaults, resetTextToDefaults,
  exportAllVariables, importAllVariables
};