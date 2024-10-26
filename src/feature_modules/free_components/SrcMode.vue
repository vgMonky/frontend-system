<template>
  <div class="src-mode">
    <button @click="toggleSource" class="toggle-btn quiet">
      <component :is="showSource ? EyeOff : Eye" class="icon" />
      {{ showSource ? 'Hide Source' : 'Show Source' }}
    </button>
    
    <div v-if="showSource" class="source-code">
      <pre><code>{{ sourceCode }}</code></pre>
    </div>
    
    <div v-else class="rendered-component">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';

const props = defineProps({
  sourceCode: {
    type: String,
    required: true
  }
});

const showSource = ref(false);

const toggleSource = () => {
  showSource.value = !showSource.value;
};
</script>

<style scoped>
.toggle-btn{
  padding: 8px 16px;
  border-radius: var(--r0) var(--r0) 0px 0px;
}

.icon {
  margin-right: 8px;
}

.rendered-component{
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: var(--r0);
  padding: 16px;

}
.source-code {
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 0px var(--r0) var(--r0) var(--r0);
  padding: 16px;
  overflow-x: auto;  /* This enables horizontal scrolling */
  white-space: nowrap;  /* Prevents line wrapping */
}

pre {
  margin: 0;
}

code {
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;  /* This allows the code to expand beyond the pre element */
  min-width: 100%;  /* Ensures the code takes up at least the full width of the pre element */
}
</style>