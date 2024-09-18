<template>
    <h2>Expandable Component</h2>
    <p>The Expandable Component is ....</p>
    <br>
    
    <Expandable title="Title" titleopen="Title opened">
        {Some content inside here}
    </Expandable>
</template>
  
<script setup>
import Expandable from '@/components/Expandable.vue';
</script>

<style scoped>
</style>