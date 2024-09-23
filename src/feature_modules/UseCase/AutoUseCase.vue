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
import { ref } from 'vue';
import Expandable from '@/components/Expandable.vue';
import SrcMode from '@/components/SrcMode.vue';

// Import all components statically
import UCbutton from './UCbutton.vue';
import UCcontained from './UCcontained.vue';
import UCExpandable from './UCExpandable.vue';
import UCHero from './UCHero.vue';
import UCHtmlInput from './UCHtmlInput.vue';
import UCSrcMode from './UCSrcMode.vue';
import UCtext from './UCtext.vue';
import UCToggle from './UCToggle.vue';

// Import all source code statically
import UCbuttonSource from './UCbutton.vue?raw';
import UCcontainedSource from './UCcontained.vue?raw';
import UCExpandableSource from './UCExpandable.vue?raw';
import UCHeroSource from './UCHero.vue?raw';
import UCHtmlInputSource from './UCHtmlInput.vue?raw';
import UCSrcModeSource from './UCSrcMode.vue?raw';
import UCtextSource from './UCtext.vue?raw';
import UCToggleSource from './UCToggle.vue?raw';

const components = ref([
  { name: 'UCbutton', component: UCbutton, source: UCbuttonSource },
  { name: 'UCcontained', component: UCcontained, source: UCcontainedSource },
  { name: 'UCExpandable', component: UCExpandable, source: UCExpandableSource },
  { name: 'UCHero', component: UCHero, source: UCHeroSource },
  { name: 'UCHtmlInput', component: UCHtmlInput, source: UCHtmlInputSource },
  { name: 'UCSrcMode', component: UCSrcMode, source: UCSrcModeSource },
  { name: 'UCtext', component: UCtext, source: UCtextSource },
  { name: 'UCToggle', component: UCToggle, source: UCToggleSource },
]);

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