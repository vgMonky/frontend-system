<template>
    <div class="auto-use-case">
      <Expandable v-for="component in components" :key="component.name" :title="formatTitle(component.name)">
        <SrcMode :sourceCode="component.source">
          <component :is="component.component" />
        </SrcMode>
      </Expandable>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Expandable from '@/components/Expandable.vue';
  import SrcMode from '@/components/SrcMode.vue';
  
  const components = ref([]);
  
  onMounted(async () => {
    const componentContext = import.meta.glob('/src/components/componentsUseCase/*.vue', { eager: true });
    const sourceContext = import.meta.glob('/src/components/componentsUseCase/*.vue', { as: 'raw', eager: true });
  
    for (const path in componentContext) {
      const name = path.split('/').pop().replace('.vue', '');
      components.value.push({
        name,
        component: componentContext[path].default,
        source: sourceContext[path]
      });
    }
  });
  
  const formatTitle = (name) => {
    // Remove the first two characters (UC) and then format
    const nameWithoutPrefix = name.slice(2);
    return nameWithoutPrefix
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  </script>
  
  <style scoped>
  .auto-use-case {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>