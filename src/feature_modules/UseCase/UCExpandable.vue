<template>
    <h2>Expandable Component</h2>
    <p>The Expandable Component can encapsulate any content or component. It will be used only when there is a need for the user to fill an input list like a form, or to hide a large amount of secundary information....</p>
    <br>
    
    <Expandable title="Title" titleopen="Title opened">
        {Some content inside here}
    </Expandable>
</template>
  
<script setup>
import Expandable from '@/feature_modules/free_components/Expandable.vue';
</script>

<style scoped>
</style>