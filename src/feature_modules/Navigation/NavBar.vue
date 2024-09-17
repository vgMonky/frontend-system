<script setup>
import { computed } from 'vue';
import { toggleMenu } from './toggleMenu';
import { getEditMode } from './toggleEditMode';
import Menu from './Menu.vue';
import ToggleTheme from '@/components/ToggleTheme.vue'
import { Menu as MenuIcon, FileSliders } from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    default: "Web Page Title"
  }
});

const isEditMode = computed(() => getEditMode().value);
const displayTitle = computed(() => isEditMode.value ? "Frontend System" : props.title);
</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <FileSliders size="40" stroke-width="1.2" />
      <p class="navbar-title">{{ displayTitle }}</p>
    </div>
    <div class="navbar-right">
      <ToggleTheme />
      <button class="contained" @click="toggleMenu">
        <MenuIcon />
      </button>
    </div>
  </nav>
  <Menu />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--c3);
  background-color: var(--c4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
}
.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.navbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>