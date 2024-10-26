<template>
    <h2>Text elements</h2>
    <p>The text will be used like typical markdown documentation. It will never use h1 next to a h2 or an h3. They will always have p text between them. The ps text will be used for simple detailed explenations or aclarations.</p>
    <br>
    <div class="contained">
        <h1>Headline h1</h1>
        <p>Font and pt sizes will be defined here</p>
        <br>
        <br>
        <h2>Headline h2</h2>
        <p>This is a paragraph.</p>
        <br>
        <br>
        <h3>Headline h3</h3>
        <p>This is a paragraph.</p>
        <br>
        <br>
        <h4>Headline h4</h4>
        <p>This is a paragraph.</p>
        <br>
        <p class="ps">This is small paragraph using the --ps variable.</p>
    </div>
</template>
  
<script setup>
import Expandable from '@/feature_modules/free_components/Expandable.vue';
</script>

<style scoped>
</style>  
    
    
