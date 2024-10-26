<template>
    <div class="toggle" :class="{ 'toggle-on': modelValue }" @click="toggle">
      <div class="toggle-circle">
        <component class="icon" :is="icon" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    icon: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const toggle = () => {
    emit('update:modelValue', !props.modelValue);
  };
  </script>
  
  <style scoped>
  .toggle {
    width: 60px;
    height: 30px;
    background-color: var(--c3);
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .toggle-on {
    background-color: var(--c3);
  }
  
  .toggle-circle {
    width: 26px;
    height: 26px;
    background-color: var(--c2);
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
  }
  
  .toggle-on .toggle-circle {
    transform: translateX(30px);
  }
  
  .toggle-circle :deep(svg) {
    width: 16px;
    height: 16px;
  }
  .icon{
    color: var(--c4);
  }
</style>