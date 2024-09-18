<template>
    <h2>Button element</h2>
    <p>Button element can be used with out class, contained class or contained bold class, based on the level of importance/accent.</p>
    <div class="contained">
        <button>Normal</button>
        <br>
        <button class="contained">Important</button>
        <br>
        <button class="contained bold">Very Important!</button>
    </div>
    <br>
    <p>it can easly include icons to communicate its action by apending it from Lucide open-source icon library</p>
    <div class="contained">
        <button>
            <RefreshCcw />
            button with icon
        </button>
        <br>
        <button class="contained" >
            <RefreshCcw />
            button with icon
        </button>
        <br>
        <button class="contained bold">
            <RefreshCcw />
            button with icon
        </button>
    </div>
    <br>
    <p>In combination with Vue v-bind: and v-on @ it can create a tuggle button....</p>
    <div class="contained">
        <button @click="togglePreview">
            <component :is="showPreview ? ChevronDown : ChevronRight" />
            {{ showPreview ? 'Hide Preview' : 'Show Preview'}}
        </button>
        <br>
        <button class="contained " @click="togglePreview">
            <component :is="showPreview ? ChevronDown : ChevronRight" />
            {{ showPreview ? 'Hide Preview' : 'Show Preview'}}
        </button>
        <br>
        <button class="contained bold" @click="togglePreview">
            <component :is="showPreview ? ChevronDown : ChevronRight" />
            {{ showPreview ? 'Hide Preview' : 'Show Preview'}}
        </button>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue' 
  import { ChevronDown, ChevronRight, RefreshCcw} from 'lucide-vue-next';
  
  const showPreview = ref(false);
  
  const togglePreview = () => {
    showPreview.value = !showPreview.value;
  }
  </script>
  
  <style scoped>
  </style>