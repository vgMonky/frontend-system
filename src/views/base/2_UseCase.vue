<template>
  <h1>Use Cases (UC)</h1>
  <p>All src code shown here will be feeded into the AI as prompt for it to understand and use the system. This means what ever description chosen here will act as documentation for the AI to interprete the system. You can edit or remove the content in src/feature_modules/UseCase/ , and also create new UC[name].vue to define the interpretation.    </p>
  <div class="contained ps">*** FilterUseCase.vue Component here. ***</div>
  <AutoUseCase />
</template>

<script setup>
import AutoUseCase from '@/feature_modules/UseCase/AutoUseCase.vue';
</script>

<style scoped>
</style>