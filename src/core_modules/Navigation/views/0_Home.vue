<template>
    <Banner 
      backgroundImage="https://www.shutterstock.com/image-photo/chameleon-close-eye-portrait-reptile-600nw-2466925375.jpg"
      :blurPixel="0"
    >
    </Banner>
  <em>
    <h4>Frontend System Library</h4>
    <p class="ps">*** You can test the system live right now by following the straight forward workflow: 
      <br> 1.Style (The global variable style system) 
      <br> 2.UseCase (The documented library) 
      <br> 4.EditMode (Toggle a development environment) 
      <br> 5.Create 
    </p>
    <br>
    <br>
  </em>

    <h4>3. Core Features</h4>
    <div class="feature-grid">
      <div class="feature-item contained">
        <h4>Component Library</h4>
        <p>Built on a generic style variable system, ensuring global consistency and alignment.</p>

      </div>
      <div class="feature-item contained">
        <h4>Edit Mode</h4>
        <p>Toggleable development environment for seamless transitions between user and developer views.</p>
      </div>
      <div class="feature-item contained">
        <h4>Navigation System</h4>
        <p>Facilitates view creation with automated route mapping.</p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


        
    <Banner >
      <div >
        <h4>0. Navigation System</h4>
        <p>Facilitates view creation with automated route mapping.</p>
      </div>
      <div >
        <h4>1. AI-Assisted Content Creation</h4>
        <p>Utilizes AI to format content based on the system's library documentation.</p>
      </div>
      <div >
        <h4>2. Assisted Content Creation</h4>
        <p>Utilizes AI to format content based on the system's library documentation.</p>
      </div>
      <div >
        <h4>3. Content Creation</h4>
        <p>Utilizes AI to format content based on the system's library documentation.</p>
      </div>

    </Banner>

</template>

<script setup>
import Banner from '@/core_modules/free_components/Banner.vue'

</script>

<style scoped>

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  opacity: 0.8;
  background-color: var(--c3);
  box-shadow: var(--sh);
}

</style>
