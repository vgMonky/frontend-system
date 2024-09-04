import { ref, watch } from 'vue';

const defaultColors = {
  color0: '#0f0f0f',
  color1: '#404040',
  color2: '#819234',
  color3: '#C0C0C0',
  color4: '#f9f9f9',
};

const colorVariables = ref(loadColors());

function loadColors() {
  const savedColors = localStorage.getItem('colorVariables');
  return savedColors ? JSON.parse(savedColors) : defaultColors;
}

function saveColors(colors) {
  localStorage.setItem('colorVariables', JSON.stringify(colors));
}

const updateColorVariable = (key, value) => {
  colorVariables.value[key] = value;
};

watch(colorVariables, (newColors) => {
  Object.entries(newColors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  saveColors(newColors);
}, { deep: true });

const initColorVariables = () => {
  Object.entries(colorVariables.value).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

const resetToDefaults = () => {
  colorVariables.value = { ...defaultColors };
  saveColors(defaultColors);
  initColorVariables();
};

export { colorVariables, updateColorVariable, initColorVariables, resetToDefaults };