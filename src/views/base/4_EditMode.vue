<template>
  <h1>Edit Mode</h1>
  <p>asdds</p>
  <div class="edit-mode-toggle contained">
    <Toggle v-model="editMode" :icon="toggleIcon" />
    <br>
    <span>{{ editMode ? 'Edit Mode: On' : 'Edit Mode: Off' }}</span>
  </div>
  <br>
  <p>Page Title:</p>
  <p>Contact Link:</p>
  <p>Contact Phone:</p>
</template>

<script setup>
import { computed } from 'vue';
import Toggle from '@/components/Toggle.vue';
import {  MonitorCheck, Pencil} from 'lucide-vue-next';
import { toggleEditMode, getEditMode } from '@/feature_modules/Navigation/toggleEditMode';

const editMode = computed({
  get: () => getEditMode().value,
  set: () => toggleEditMode()
});

const toggleIcon = computed(() => editMode.value ? Pencil : MonitorCheck);
</script>

<style scoped>

</style>