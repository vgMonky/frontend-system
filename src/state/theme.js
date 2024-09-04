import { ref, watch } from 'vue';

const currentTheme = ref('light');

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  updateTheme();
};

const updateTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  currentTheme.value = savedTheme || 'light';
  updateTheme();
};

watch(currentTheme, updateTheme);

export { currentTheme, toggleTheme, initTheme };