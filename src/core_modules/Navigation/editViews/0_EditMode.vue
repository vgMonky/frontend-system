<template>
  <h1>Edit Mode</h1>
  <p>If you toggle the edit mode, you will make the system hide all the editing capabilities. In this section you will also be able to set public variables....</p>
  <h3>Toggle edit mode</h3>
  
  <p>Password:</p>
  <input type="password">
  <div class="contained edit-mode-toggle">
    <p>Toggle the EditMode. Then check the menu to notice the access change.</p>
    <br>
    <Toggle v-model="editMode" :icon="toggleIcon" />
    <br>
    <span>{{ editMode ? 'Edit Mode: On' : 'Edit Mode: Off' }}</span>
  </div>
  <br>
  <h3>Public Variables</h3>
  <p>Page Title:</p>
  <input type="text">
  <p>Page icon:</p>
  <input type="file">
</template>

<script setup>
import { computed } from 'vue';
import Toggle from '@/core_modules/free_components/Toggle.vue';
import {  MonitorCheck, Pencil} from 'lucide-vue-next';
import { toggleEditMode, getEditMode } from '@/core_modules/Navigation/toggleEditMode';

const editMode = computed({
  get: () => getEditMode().value,
  set: () => toggleEditMode()
});

const toggleIcon = computed(() => editMode.value ? Pencil : MonitorCheck);
</script>

<style scoped>

</style>