<template>


  <div class="landing-page">
    
    <br><br><br>
    <div class="hero">
      <div class="glass-container"></div>
      <div class="color-container"></div>
      <div class="content-container">
        <h1>Frontend System Documentation</h1>
        <h4 class="hero-subtitle">An organiced starting point for developing a website based on a feature modules structure.</h4>
        <div class="cta-buttons">
          <button class="cta-button contained bold" @click="toggleMenu">Get Started</button>
          <button class="cta-button contained quiet" @click="scrollToSection('features')">Explore Features</button>
        </div>
      </div>
    </div>
    <br>


    <section id="philosophy">
      <h3>1. Design Philosophy: Constraint-Driven Development</h3>
      <p>Our system adheres to the principle of "Designed by Constraints." Like specialized tools crafted for specific tasks, our components are tailored to meet particular needs efficiently. While versatility is valued, each element is primarily shaped by its intended purpose within the system.</p>
    </section>
    <br>

    <section id="for-developers">
      <h3>2. For Developers</h3>
      <p>This repository serves as both a live documented template for an overview of the project; and a base system ready for extension. Developers are encouraged to fork the repository, take ownership of the code, and expand upon the existing framework.</p>
    </section>
    <br>

    <section id="features">
      <h3>3. Core Features</h3>
      <p>You can test this features live by opening the menu and navigating to their page in "Edit Views"  </p>
      <div class="feature-grid">
        <div class="feature-item contained">
          <h4>Edit Mode</h4>
          <p>Toggleable development environment for seamless transitions between user and developer views.</p>
        </div>
        <div class="feature-item contained">
          <h4>Style Variable System</h4>
          <p>Components built on a generic style variable system, ensuring global consistency and alignment.</p>
          <br>
          <button class="quiet ps" @click="applyRandomStyle">
            <Rainbow/>
            Randome Style
          </button>
        </div>
        <div class="feature-item contained">
          <h4>Navigation System</h4>
          <p>Facilitates view creation with automated route mapping.</p>
        </div>
      </div>
    </section>


    <!-- <Banner >
      <p class="ps">*** Banner Content ***</p>
    </Banner> -->

  </div>
</template>

<script setup>
import Banner from '@/core_modules/free_components/Banner.vue'
import { toggleMenu } from '@/core_modules/Navigation/toggleMenu';
import {Rainbow} from 'lucide-vue-next';
import { importRandomStyle } from '@/core_modules/StyleVariables/save/savedStyleManager';

const applyRandomStyle = () => {
  importRandomStyle();
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  border: 1px dashed var(--c2);
  border-radius: var(--r0);
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.glass-container, .color-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.glass-container {
  backdrop-filter: blur(20px);
  z-index: 1;
}

.color-container {
  background-color: var(--c3);
  opacity: 0.7;
  z-index: 2;
}

.content-container {
  position: relative;
  z-index: 3;
}

.hero-subtitle {
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}


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

ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 3rem;
}
</style>