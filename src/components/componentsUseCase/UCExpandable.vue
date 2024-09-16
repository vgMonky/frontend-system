<template>
    <h3>Expandable Component</h3>
    <p>The Expandable Component is ....</p>
    <br>
    
    <Expandable title="Title" titleopen="Title opened">
        {Some content inside here}
    </Expandable>
</template>
  
<script setup>
import Expandable from '../Expandable.vue';
</script>

<style scoped>
</style>