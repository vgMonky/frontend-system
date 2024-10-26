<template>
    <h2>Contained class</h2>
    <p>The Contained class is used to encapsulate or group content that reprecents the same idea or function. It can be used when many continious content after an h1 or h2 is displayed for example if there are 3 paragraphs, the midle one can be contained. </p>
    <br>
    
    <p class="contained">
        I am contained
    </p>
    <br>
    <div class="contained">
        <p>contained objects here</p>
        <button>button</button>
    </div>
</template>
  
<script setup>
import Expandable from '@/feature_modules/components/Expandable.vue';
</script>

<style scoped>
</style>