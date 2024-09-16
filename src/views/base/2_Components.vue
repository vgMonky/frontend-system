<template>
  <h1>Components</h1>
  <Expandable title="Button Element">
    <SrcMode :sourceCode="UCbuttonSource">
      <UCbutton/>
    </SrcMode>
    </Expandable>
  <Expandable title="Expandable Component">
  </Expandable>
</template>

<script setup>
import Expandable from '@/components/Expandable.vue';
import SrcMode from '@/components/SrcMode.vue';

import UCbutton from '@/components/componentsUseCase/UCbutton.vue';
import UCbuttonSource from '@/components/componentsUseCase/UCbutton.vue?raw';
</script>

<style scoped>
</style>