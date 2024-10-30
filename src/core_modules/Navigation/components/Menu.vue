<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '../menuStore';
import { isMenuOpen, closeMenu } from '../toggleMenu';
import { getEditMode } from '../toggleEditMode';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';

const router = useRouter();
const menuStore = useMenuStore();
const menuRef = ref(null);
const showEditItems = ref(false);

const menuClass = computed(() => ({
  'menu-sidebar': true,
  'open': isMenuOpen.value
}));

const isEditMode = computed(() => getEditMode().value);
const baseMenuItems = computed(() => menuStore.getBaseMenuItems);
const customMenuItems = computed(() => menuStore.getCustomMenuItems);

onMounted(() => {
  menuStore.updateMenuItems(router.getRoutes());
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});

const handleOutsideClick = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target) && isMenuOpen.value) {
    closeMenu();
  }
};

const toggleEditItems = (event) => {
  event.stopPropagation(); // Stop event from bubbling up
  showEditItems.value = !showEditItems.value;
};

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 0);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
});
</script>

<template>
  <div class="menu">
    <div :class="menuClass" ref="menuRef">
      <div v-if="isEditMode" class="edit-section">
        <button @click="toggleEditItems" class="edit-toggle">
          Edit Views
          <ChevronDown v-if="!showEditItems" />
          <ChevronUp v-if="showEditItems" />
        </button>
        <div v-if="showEditItems" class="edit-items">
          <router-link v-for="item in baseMenuItems" :key="item.path" :to="item.path">
            {{ item.name }}
          </router-link>
        </div>
        <div class="divider"></div>
      </div>
      <router-link v-for="item in customMenuItems" :key="item.path" :to="item.path">
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.menu-sidebar {
  position: fixed;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: rgba(var(--c4-rgb), 1);
  border-left: 1px solid var(--c3);
  border-top: 1px solid var(--c3);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
}

.menu-sidebar.open {
  transform: translateX(0);
}

.menu-sidebar a {
  color: var(--c1);
  text-decoration: none;
  font-size: 1.1rem;
}

.menu-sidebar a:hover {
  text-decoration: underline;
}

.menu-sidebar a.router-link-active {
  font-weight: bold;
}

.edit-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: var(--c1);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 5px 0;
}

.edit-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
}

.divider {
  height: 1px;
  background-color: var(--c3);
  margin: 10px 0;
}
</style>