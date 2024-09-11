<template>
  <div class="expandable">
    <div :class="['title-container', { 'closed': !isExpanded }]" @click="toggleExpand">
      <p class=" title">
        {{ isExpanded ? (titleopen || title) : title }}
        <span class="toggle-icon">{{ isExpanded ? '▲' : '▼' }}</span>
      </p>
    </div>
    <transition name="expand">
      <div v-if="isExpanded" class="content-container">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title here'
  },
  titleopen: {
    type: String,
    default: ''
  }
})

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const currentTitle = computed(() => {
  return isExpanded.value && props.titleopen ? props.titleopen : props.title
})
</script>

<style scoped>
.expandable {
  width: 100%;
}

.title-container {
  border: 1px solid var(--c2);
  border-radius: var(--r0) var(--r0) 0 0;
  transition: 0.3s ease-out;
  padding: var(--pad) var(--pad);
}

.title-container.closed {
  border-radius: var(--r0);
}

.content-container {
  background-color: var(--c4);
  border: 1px solid var(--c3);
  border-radius: 0 0 var(--r0) var(--r0);
  border-top: none;
  padding: var(--pad) var(--pad);
}

.title {
  color: var(--c2);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  transition: 0.3s ease-out;
}

.title-container:hover{
  border-color: var(--c2);
  background-color: var(--c2);
}
.title-container:hover .title{
  color: var(--c4);
}

.toggle-icon {
  font-size: 0.8em;
}

.expand-enter-active {
    transition: 0.3s ease;
    overflow: hidden;
}

.expand-leave-active {
    transition: 0.3s ease-out;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
    border-radius: 30px;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 2000px; /* Adjust this value based on your expected maximum content height */
    opacity: 1;
}
</style>