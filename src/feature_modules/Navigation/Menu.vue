<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from './menuStore';
import { isMenuOpen, closeMenu } from './toggleMenu';

const router = useRouter();
const menuStore = useMenuStore();

const menuRef = ref(null);
const showCreateInfo = ref(false);

const menuClass = computed(() => ({
  'menu-sidebar': true,
  'open': isMenuOpen.value
}));

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

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 0);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
});

const toggleCreateInfo = () => {
  showCreateInfo.value = !showCreateInfo.value;
};
</script>

<template>
  <div :class="menuClass" ref="menuRef">
    <router-link v-for="item in baseMenuItems" :key="item.path" :to="item.path">
      {{ item.name }}
    </router-link>
    <br>
    <button @click="toggleCreateInfo">+ Create +</button>
    <div v-if="showCreateInfo" class="create-info">
      <p class="ps">To add a new view, create a new .vue file in src/views/newfile.vue or set an index to order them if you have many files:</p>
      <p class="ps contained">E.g. src/views/1_firstfile.vue</p>
    </div>
    <br>
    <router-link v-for="item in customMenuItems" :key="item.path" :to="item.path">
      {{ item.name }}
    </router-link>
  </div>
</template>

<style scoped>
.menu-sidebar {
  position: fixed;
  top: 80px; /* Adjust based on your NavBar height */
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--c4);
  border-left: 1px solid var(--c3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
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

.create-info {
  border: 1px solid var(--c3);
  padding: 10px;
  border-radius: var(--r0);
}


</style>