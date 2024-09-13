import { ref } from 'vue';

const isMenuOpen = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

export { isMenuOpen, toggleMenu, closeMenu };
