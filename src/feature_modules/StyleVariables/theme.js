import { ref, watch } from 'vue';
import { saveToLocal, loadFromLocal } from './saveLocal';

const currentTheme = ref(loadFromLocal('theme', 'light'));

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  updateTheme();
};

const updateTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  saveToLocal('theme', currentTheme.value);
};

const initTheme = () => {
  updateTheme();
};

watch(currentTheme, updateTheme);

export { currentTheme, toggleTheme, initTheme };